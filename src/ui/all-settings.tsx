"use client";

import { text } from "@/lib/css-presets";
import theme from "../../public/icons/icon-sun.svg";
import font from "../../public/icons/icon-font.svg";
import lock from "../../public/icons/icon-lock.svg";
import logout from "../../public/icons/icon-logout.svg";
import Image from "next/image";
import { Separator } from "./separator";
import { Dispatch } from "react";

export default function AllSettings({setValue}: {setValue: Dispatch<string>}) {

  const handleSettingClick = (tab: string) => {
    setValue(tab);
  }

  return (
    <>
      <h1 className={`${text["preset-1"]}`}>Settings</h1>
      <ul className="mt-4">
        <li>
          <button className={`flex gap-2 ${text["preset-4"]} py-2.5 w-full items-center`} onClick={() => handleSettingClick("color")}>
            <Image alt="" src={theme} />
            <span className="h-fit relative -top-0.5">Color Theme</span>
          </button>
        </li>
        <li>
          <button className={`flex gap-2 ${text["preset-4"]} py-2.5 w-full items-center`} onClick={() => handleSettingClick("font")}>
            <Image alt="" src={font} />
            <span className="h-fit relative -top-0.5">Font Theme</span>
          </button>
        </li>
        <li>
          <button className={`flex gap-2 ${text["preset-4"]} py-2.5 w-full items-center`} onClick={() => handleSettingClick("change-password")}>
            <Image alt="" src={lock} />
            <span className="h-fit relative -top-0.5">Change Password</span>
          </button>
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