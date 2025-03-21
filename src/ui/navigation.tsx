import Link from "next/link";
import HomeSVG from "./svgs/home";
import SearchSVG from "./svgs/search";
import ArchiveSVG from "./svgs/archive";
import TagsSVG from "./svgs/tag";
import SettingsSVG from "./svgs/settings";
import { text } from "@/lib/text";
import NavLink from "./nav-links";

export default function Navigation(){
  return(
    <nav className="shadow-sm py-3 px-4 md:px-0 border-t border-t-neutral-200 bg-neutral-0">
      <ul className="flex">
        <li className={`grow md:border-r md:border-neutral-200`}>
          <NavLink href={`/preview`} link="home">
            <HomeSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Home</span>
          </NavLink>
        </li>
        <li className={`grow md:border-r md:border-neutral-200`}>
          <NavLink href={`/preview?search=`} link="search">
            <SearchSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Search</span>
          </NavLink>
        </li>
        <li className={`grow md:border-r md:border-neutral-200`}>
          <NavLink href={`/preview?archived`} link="archived">
            <ArchiveSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Archived</span>
          </NavLink>
        </li>
        <li className={`grow md:border-r md:border-neutral-200`}>
          <NavLink href={`/preview?tag=`} link="tags">
            <TagsSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Tags</span>
          </NavLink>
        </li>
        <li className={`grow`}>
          <NavLink href={`/settings`} link="settings">
            <SettingsSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}