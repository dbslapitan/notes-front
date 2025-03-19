import Link from "next/link";
import HomeSVG from "./svgs/home";
import SearchSVG from "./svgs/search";
import ArchiveSVG from "./svgs/archive";
import TagsSVG from "./svgs/tag";
import SettingsSVG from "./svgs/settings";

export default function Navigation({selected = null}: {selected: string | null}){
  return(
    <nav className="shadow-sm py-3 px-4 border-t border-t-neutral-200 bg-neutral-0">
      <ul className="flex">
        <li className={`grow rounded-sm ${selected === "home" ? "bg-blue-50" : ""}`}>
          <Link className={`flex flex-col justify-center items-center py-1 ${selected === "home" ? "text-blue-500" : "text-neutral-950"}`} href={`/preview`}>
            <HomeSVG />
            <span className="hidden md:block">Home</span>
          </Link>
        </li>
        <li className={`grow rounded-sm ${selected === "search" ? "bg-blue-50" : ""}`}>
          <Link className={`flex flex-col justify-center items-center py-1 ${selected === "search" ? "text-blue-500" : "text-neutral-950"}`} href={`/preview?search=`}>
            <SearchSVG />
            <span className="hidden md:block">Search</span>
          </Link>
        </li>
        <li className={`grow rounded-sm ${selected === "archived" ? "bg-blue-50" : ""}`}>
          <Link className={`flex flex-col justify-center items-center py-1 ${selected === "archived" ? "text-blue-500" : "text-neutral-950"}`} href={`/preview?archived`}>
            <ArchiveSVG />
            <span className="hidden md:block">Archived</span>
          </Link>
        </li>
        <li className={`grow rounded-sm ${selected === "tags" ? "bg-blue-50" : ""}`}>
          <Link className={`flex flex-col justify-center items-center py-1 ${selected === "tags" ? "text-blue-500" : "text-neutral-950"}`} href={`/preview?tag=`}>
            <TagsSVG />
            <span className="hidden md:block">Tags</span>
          </Link>
        </li>
        <li className={`grow rounded-sm ${selected === "settings" ? "bg-blue-50" : ""}`}>
          <Link className={`flex flex-col justify-center items-center py-1 ${selected === "settings" ? "text-blue-500" : "text-neutral-950"}`} href={`/settings`}>
            <SettingsSVG />
            <span className="hidden md:block">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}