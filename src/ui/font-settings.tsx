import { text } from "@/lib/css-presets";
import Image from "next/image";
import { Dispatch } from "react";
import carret from "../../public/icons/icon-arrow-left.svg";

export default function FontSettings({ setValue }: { setValue: Dispatch<string> }) {
  return (
    <>
      <button onClick={() => { setValue("all"); sessionStorage.setItem("settings", "all") }} className={`${text["preset-4"]} flex items-center`}>
        <Image src={carret} alt="" />
        <span className="relative -top-0.25">Settings</span>
      </button>
    </>
  );
}