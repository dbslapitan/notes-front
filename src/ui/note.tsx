import Image from "next/image";
import { Button } from "./button";
import GoBack from "./go-back";
import Main from "./main";
import DeleteSVG from "./svgs/delete";
import ArchiveSVG from "./svgs/archive";
import { text } from "@/lib/text";

export default function Note({ href }: { href: string }) {
  return (
    <Main>
      <form className="">
        <div className="flex gap-4 pb-3 border-b border-b-neutral-200">
          <GoBack href={`${href}`} />
          <button className={`block text-neutral-600 w-4.5 h-4.5 bg-inherit ml-auto`}><DeleteSVG /></button>
          <button className={`block text-neutral-600 w-4.5 h-4.5 bg-inherit`}><ArchiveSVG /></button>
          <button className={`block ${text["preset-5"]} text-neutral-600 bg-inherit`}>Cancel</button>
          <button className={`block ${text["preset-5"]} text-blue-500 bg-inherit`}>Save Note</button>
        </div>
        <input className={`mt-3 ${text["preset-2"]} placeholder:text-neutral-950`} type="text" placeholder="Enter a title..." />
        <div className={`mt-3`}>

        </div>
      </form>
    </Main>
  );
}