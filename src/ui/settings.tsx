import { text } from "@/lib/text";
import theme from "../../public/icons/icon-system-theme.svg";
import font from "../../public/icons/icon-font.svg";
import lock from "../../public/icons/icon-lock.svg";
import logout from "../../public/icons/icon-logout.svg";
import Image from "next/image";
import { Separator } from "./separator";
import Link from "next/link";

export default function Settings({username}: {username: string}){

  return(
    <>
      <h1 className={`${text["preset-1"]}`}>Settings</h1>
      <ul className="mt-4">
        <li>
          <Link href={`/${username}/settings?selected=color`} className={`flex gap-2 ${text["preset-4"]} py-2.5 w-full items-center`}>
            <Image alt="" src={theme} />
            <span className="h-fit relative -top-0.5">Color Theme</span>
          </Link>
        </li>
        <li>
          <Link href={`/${username}/settings?selected=font`} className={`flex gap-2 ${text["preset-4"]} py-2.5 w-full items-center`}>
            <Image alt="" src={font} />
            <span className="h-fit relative -top-0.5">Font Theme</span>
          </Link>
        </li>
        <li>
          <Link href={`/${username}/settings`} className={`flex gap-2 ${text["preset-4"]} py-2.5 w-full items-center`}>
            <Image alt="" src={lock} />
            <span className="h-fit relative -top-0.5">Change Password</span>
          </Link>
        </li>
      </ul>
      <Separator className="mt-2"/>
      <button className={`flex gap-2 ${text["preset-4"]} py-2.5 w-full items-center mt-2`}>
        <Image alt="" src={logout} />
        <span className="h-fit relative -top-0.5">Logout</span>
      </button>
    </>
  );
}