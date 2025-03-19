import Link from "next/link";
import HomeSVG from "./svgs/home";
import SearchSVG from "./svgs/search";
import ArchiveSVG from "./svgs/archive";
import TagsSVG from "./svgs/tag";
import SettingsSVG from "./svgs/settings";
import { text } from "@/lib/text";

export default function Navigation({selected = null}: {selected: string | null}){
  return(
    <nav className="shadow-sm py-3 px-4 md:px-0 border-t border-t-neutral-200 bg-neutral-0">
      <ul className="flex">
        <li className={`grow border-r border-neutral-200`}>
          <Link className={`flex flex-col gap-1 justify-center items-center py-1 rounded-sm max-w-[53.33%] m-auto ${selected === "home" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/preview`}>
            <HomeSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Home</span>
          </Link>
        </li>
        <li className={`grow border-r border-neutral-200`}>
          <Link className={`flex flex-col gap-1 justify-center items-center py-1 rounded-sm max-w-[53.33%] m-auto ${selected === "search" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/preview?search=`}>
            <SearchSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Search</span>
          </Link>
        </li>
        <li className={`grow border-r border-neutral-200`}>
          <Link className={`flex flex-col gap-1 justify-center items-center py-1 rounded-sm max-w-[53.33%] m-auto ${selected === "archived" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/preview?archived`}>
            <ArchiveSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Archived</span>
          </Link>
        </li>
        <li className={`grow border-r border-neutral-200`}>
          <Link className={`flex flex-col gap-1 justify-center items-center py-1 rounded-sm max-w-[53.33%] m-auto ${selected === "tags" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/preview?tag=`}>
            <TagsSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Tags</span>
          </Link>
        </li>
        <li className={`grow`}>
          <Link className={`flex flex-col gap-1 justify-center items-center py-1 rounded-sm max-w-[53.33%] m-auto ${selected === "settings" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/settings`}>
            <SettingsSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}