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

export default function Note({ href }: { href: string }) {


  const quillRef = useRef<null | Quill>(null);

  const handleSave = (event: FormEvent) => {
    event.preventDefault();

    const content = JSON.stringify(quillRef.current?.getContents());

    console.log(content);
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
        <input className={`mt-3 ${text["preset-2"]} placeholder:text-neutral-950 w-full focus:outline-none focus:placeholder:text-transparent`} type="text" placeholder="Enter a title..." />
        <div className={`${text["preset-6"]} flex gap-2 mt-3`}>
          <label htmlFor="tags" className="flex gap-1.5 min-w-[33.53%] text-neutral-700"><span className="w-4 h-4"><TagsSVG /></span>Tags</label>
          <input type="text" id="tags" className={`grow focus:outline-none placeholder:text-[#99A0AE] focus:placeholder:text-transparent`} placeholder="Add tags separated by commas(e.g. Work, Planning)" />
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