import Link from "next/link";
import HomeSVG from "./svgs/home";
import SearchSVG from "./svgs/search";
import ArchiveSVG from "./svgs/archive";
import TagsSVG from "./svgs/tag";
import SettingsSVG from "./svgs/settings";

export default function Navigation(){
  return(
    <nav className="shadow-sm py-3 px-4 border-t border-t-neutral-200">
      <ul className="flex">
        <li>
          <Link className="text-neutral-950" href={`/preview`}>
            <HomeSVG />
            <span className="hidden">Home</span>
          </Link>
        </li>
        <li>
          <Link className="text-neutral-950" href={`/preview`}>
            <SearchSVG />
            <span className="hidden">Search</span>
          </Link>
        </li>
        <li>
          <Link className="text-neutral-950" href={`/preview`}>
            <ArchiveSVG />
            <span className="hidden">Archived</span>
          </Link>
        </li>
        <li>
          <Link className="text-neutral-950" href={`/preview`}>
            <TagsSVG />
            <span className="hidden">Tags</span>
          </Link>
        </li>
        <li>
          <Link className="text-neutral-950" href={`/preview`}>
            <SettingsSVG />
            <span className="hidden">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}