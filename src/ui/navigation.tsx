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
        <li className="grow">
          <Link className={`flex rounded-sm justify-center py-1 ${selected === "home" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/preview`}>
            <HomeSVG />
            <span className="hidden">Home</span>
          </Link>
        </li>
        <li className="grow">
          <Link className={`flex rounded-sm justify-center py-1 ${selected === "search" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/preview?search=`}>
            <SearchSVG />
            <span className="hidden">Search</span>
          </Link>
        </li>
        <li className="grow">
          <Link className={`flex rounded-sm justify-center py-1 ${selected === "archived" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/preview?archived`}>
            <ArchiveSVG />
            <span className="hidden">Archived</span>
          </Link>
        </li>
        <li className="grow">
          <Link className={`flex rounded-sm justify-center py-1 ${selected === "tags" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/preview?tag=`}>
            <TagsSVG />
            <span className="hidden">Tags</span>
          </Link>
        </li>
        <li className="grow">
          <Link className={`flex rounded-sm justify-center py-1 ${selected === "settings" ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/settings`}>
            <SettingsSVG />
            <span className="hidden">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}