import HomeSVG from "./svgs/home";
import SearchSVG from "./svgs/search";
import ArchiveSVG from "./svgs/archive";
import TagsSVG from "./svgs/tag";
import SettingsSVG from "./svgs/settings";
import { text } from "@/lib/text";
import NavLink from "./nav-links";
import { Suspense } from "react";

export default function Navigation() {
  return (
    <Suspense>
      <nav id="mobile-nav" className="shadow-sm py-3 px-4 md:px-0 border-t border-t-neutral-200 bg-neutral-0">
      <ul className="flex">
        <li className={`grow md:border-r md:border-neutral-200`}>
          <NavLink href={``} link="home">
            <span className="w-6 h-6"><HomeSVG /></span>
            <span className={`hidden md:block ${text["preset-6"]}`}>Home</span>
          </NavLink>
        </li>
        <li className={`grow md:border-r md:border-neutral-200`}>
          <NavLink href={`?search=`} link="search">
            <SearchSVG />
            <span className={`hidden md:block ${text["preset-6"]}`}>Search</span>
          </NavLink>
        </li>
        <li className={`grow md:border-r md:border-neutral-200`}>
          <NavLink href={`?archived`} link="archived">
            <span className="w-6 h-6"><ArchiveSVG /></span>
            <span className={`hidden md:block ${text["preset-6"]}`}>Archived</span>
          </NavLink>
        </li>
        <li className={`grow md:border-r md:border-neutral-200`}>
          <NavLink href={`?tag=`} link="tags">
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
    </Suspense>

  );
}