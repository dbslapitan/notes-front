"use client";

import GoBack from "./go-back";
import Main from "./main";
import DeleteSVG from "./svgs/delete";
import ArchiveSVG from "./svgs/archive";
import { text } from "@/lib/text";
import TagsSVG from "./svgs/tag";
import Clock from "./svgs/clock";
import Editor from "./editor";
import { FormEvent, useRef } from "react";
import Quill from "quill";
import { INote } from "@/models/note";
import { URI } from "@/lib/constants";
import { revalidate } from "@/lib/server";

export default function Note({ href, username }: { href: string, username: string }) {

  const tagsRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<null | Quill>(null);

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();

    const content = JSON.stringify(quillRef.current?.getContents());
    const tags = (tagsRef.current?.value as string).split(",").map(tag => {
      const newTag = tag.trim().toLowerCase();
      if(newTag){
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

    console.log(newNote);
    const id = await fetch(`${URI}/api/v1/${username}` ,{method: "POST", body: JSON.stringify(newNote), headers: {"Content-Type": "application/json"}}).then(res => res.json());
    await revalidate("/preview");

  }

  return (
    <Main>
      <form onSubmit={handleSave}>
        <div className="flex gap-4 pb-3 border-b border-b-neutral-200">
          <GoBack href={`${href}`} />
          <button className={`block text-neutral-600 w-4.5 h-4.5 bg-inherit ml-auto`}><DeleteSVG /></button>
          <button className={`block text-neutral-600 w-4.5 h-4.5 bg-inherit`}><ArchiveSVG /></button>
          <button className={`block ${text["preset-5"]} text-neutral-600 bg-inherit`}>Cancel</button>
          <button className={`block ${text["preset-5"]} text-blue-500 bg-inherit`}>Save Note</button>
        </div>
        <input className={`mt-3 ${text["preset-2"]} placeholder:text-neutral-950 w-full focus:outline-none focus:placeholder:text-transparent`} type="text" placeholder="Enter a title..." ref={titleRef} />
        <div className={`${text["preset-6"]} flex gap-2 mt-3`}>
          <label htmlFor="tags" className="flex gap-1.5 min-w-[33.53%] text-neutral-700"><span className="w-4 h-4"><TagsSVG /></span>Tags</label>
          <input type="text" id="tags" className={`grow focus:outline-none placeholder:text-[#99A0AE] focus:placeholder:text-transparent`} placeholder="Add tags separated by commas(e.g. Work, Planning)" ref={tagsRef} />
        </div>
        <div className={`${text["preset-6"]} flex gap-2 mt-3 text-[#99A0AE] pb-3 border-b border-b-neutral-200`}>
          <p className="flex gap-1.5 min-w-[33.53%] text-neutral-700">
            <span className="block w-4 h-4"><Clock /></span>
            Last Edited
          </p>
          <p>Not yet saved</p>
        </div>
        <Editor quillRef={quillRef} />
      </form>
    </Main>
  );
}