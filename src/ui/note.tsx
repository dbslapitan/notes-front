"use client";

import GoBack from "./go-back";
import Main from "./main";
import DeleteSVG from "./svgs/delete";
import ArchiveSVG from "./svgs/archive";
import { text } from "@/lib/text";
import TagsSVG from "./svgs/tag";
import Clock from "./svgs/clock";
import Editor from "./editor";
import { FormEvent, useRef, useState } from "react";
import Quill from "quill";
import { INote } from "@/models/note";
import { URI } from "@/lib/constants";
import { revalidate } from "@/lib/server";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./dialog";
import Image from "next/image";
import trash from "../../public/icons/icon-delete.svg";
import archive from "../../public/icons/icon-archive.svg";
import restore from "../../public/icons/icon-restore.svg";

export default function Note({ href, username, note = null }: { href: string, username: string, note?: INote | null }) {

  const tagsRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<null | Quill>(null);
  const router = useRouter();

  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [archiveTrigger, setArchiveTrigger] = useState(false);

  const tags = note?.tags.join(", ");

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();
    const content = JSON.stringify(quillRef.current?.getContents());
    const tags = (tagsRef.current?.value as string).split(",").map(tag => {
      const newTag = tag.trim().toLowerCase();
      if (newTag) {
        return `${newTag[0].toUpperCase()}${newTag.slice(1)}`;
      }
      return newTag;
    }).filter(tag => tag);
    const title = (titleRef.current?.value as string);

    const newNote: INote = {
      content,
      isArchived: false,
      lastEdited: new Date(),
      tags,
      title
    };

    try {
      if (note) {
        await fetch(`${URI}/api/v1/${username}/${note._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newNote) }).then(res => res.json());
        await revalidate("/preview")
      }
      else {
        const id = await fetch(`${URI}/api/v1/${username}`, { method: "POST", body: JSON.stringify(newNote), headers: { "Content-Type": "application/json" } }).then(res => res.json());
        await revalidate("/preview");
        redirect(`/${username}?selected=${id}`, RedirectType.replace);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const handleDelete = async () => {
    try {
      await fetch(`${URI}/api/v1/${username}/${note?._id}`, { method: "DELETE" }).then(res => res.json());
      await revalidate(`/${username}`);
      router.replace(`/${username}`);
    } catch (e) {
      console.error(e);
    }
  }

  const triggerDelete = () => {
    setDeleteTrigger(!deleteTrigger);
  }

  const triggerArchive = () => {
    setArchiveTrigger(!archiveTrigger);
  }

  const handleArchive = async () => {
    if(note){
      console.log("archived");
      await fetch(`${URI}/api/v1/${username}/${note?._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({isArchived: !note?.isArchived}) }).then(res => res.json());
      await revalidate("/preview");
      setArchiveTrigger(false);
    }
  }

  return (
    <Main>
      <form onSubmit={handleSave}>
        <div className="flex gap-4 pb-3 border-b border-b-neutral-200">
          <GoBack href={`${href}`} />
          {note && <Dialog open={deleteTrigger} onOpenChange={setDeleteTrigger}>
            <DialogTrigger asChild>
              <button type="button" onClick={triggerDelete} className={`block text-neutral-600 w-4.5 h-4.5 bg-inherit ml-auto hover:cursor-pointer`}><DeleteSVG /></button>
            </DialogTrigger>
            <DialogContent className={`p-5 p-b-4`}>
              <div className="flex items-start gap-4 pb-5 border-b border-b-neutral-200">
                <span className={`min-h-fit min-w-fit p-2 rounded-[0.5rem] bg-neutral-100`}>
                  <Image src={trash} alt="" />
                </span>
                <div>
                  <DialogTitle className={`${text["preset-3"]}`}>Delete Note</DialogTitle>
                  <DialogDescription className={`${text["preset-5"]} mt-1.5 text-neutral-700`}>Are you sure you want to permanently delete this note? This action cannot be undone.</DialogDescription>
                </div>
              </div>
              <div className="text-right">
                <button className="py-3 px-4 text-neutral-600 bg-neutral-100 rounded-[0.5rem]" onClick={() => setDeleteTrigger(false)}>Cancel</button>
                <button className="py-3 px-4 ml-4 bg-red-500 text-neutral-0 rounded-[0.5rem]" onClick={handleDelete}>Delete Note</button>
              </div>
            </DialogContent>
          </Dialog>}
          {note && <Dialog open={archiveTrigger} onOpenChange={setArchiveTrigger}>
            <DialogTrigger asChild>
              <button type="button" onClick={triggerArchive} className={`block text-neutral-600 w-4.5 h-4.5 bg-inherit hover:cursor-pointer`}>{note?.isArchived ? <Image src={restore} alt="" />  : <ArchiveSVG />}</button>
            </DialogTrigger>
            <DialogContent className={`p-5 p-b-4`}>
              <div className="flex items-start gap-4 pb-5 border-b border-b-neutral-200">
                <span className={`min-h-fit min-w-fit p-2 rounded-[0.5rem] bg-neutral-100`}>
                  <Image src={archive} alt="" />
                </span>
                <div>
                  <DialogTitle className={`${text["preset-3"]}`}>Archive Note</DialogTitle>
                  <DialogDescription className={`${text["preset-5"]} mt-1.5 text-neutral-700`}>Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.</DialogDescription>
                </div>
              </div>
              <div className="text-right">
                <button className="py-3 px-4 text-neutral-600 bg-neutral-100 rounded-[0.5rem]" onClick={() => setArchiveTrigger(false)}>Cancel</button>
                <button className="py-3 px-4 ml-4 bg-blue-500 text-neutral-0 rounded-[0.5rem]" onClick={handleArchive}>{note?.isArchived ? "Restore" : "Archive"} Note</button>
              </div>
            </DialogContent>
          </Dialog>}
          <button type="button" className={`block ${text["preset-5"]} ${!note && "ml-auto"} text-neutral-600 bg-inherit hover:cursor-pointer`}>Cancel</button>
          <button className={`block ${text["preset-5"]} text-blue-500 bg-inherit hover:cursor-pointer`}>Save Note</button>
        </div>
        <input className={`mt-3 ${text["preset-2"]} placeholder:text-neutral-950 w-full focus:outline-none focus:placeholder:text-transparent`} type="text" defaultValue={note?.title} placeholder="Enter a title..." ref={titleRef} />
        <div className={`${text["preset-6"]} flex gap-2 mt-3`}>
          <label htmlFor="tags" className="flex gap-1.5 min-w-[33.53%] text-neutral-700"><span className="w-4 h-4"><TagsSVG /></span>Tags</label>
          <input type="text" id="tags" className={`grow focus:outline-none placeholder:text-[#99A0AE] focus:placeholder:text-transparent`} defaultValue={tags} placeholder="Add tags separated by commas(e.g. Work, Planning)" ref={tagsRef} />
        </div>
        <div className={`${text["preset-6"]} flex gap-2 mt-3 text-[#99A0AE] pb-3 border-b border-b-neutral-200`}>
          <p className="flex gap-1.5 min-w-[33.53%] text-neutral-700">
            <span className="block w-4 h-4"><Clock /></span>
            Last Edited
          </p>
          <p>{new Date(note?.lastEdited as Date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) || "Not yet saved"}</p>
        </div>
        <Editor quillRef={quillRef} delta={note?.content} />
      </form>
    </Main>
  );
}