import { text } from "@/lib/css-presets";
import Image from "next/image";
import carret from "../../public/icons/icon-arrow-left.svg"
import { Dispatch } from "react";

export default function ColorSettings({setValue}: {setValue: Dispatch<string>}){
  return(
    <>
      <button onClick={() => setValue("all")} className={`${text["preset-4"]} flex items-center`}>
        <Image src={carret} alt=""/>
        <span className="relative -top-0.25">Settings</span>
      </button>
      <h2 className={`${text["preset-1"]} mt-3`}>Color Theme</h2>
      <p className={`${text["preset-5"]} mt-2`}>Choose your color theme:</p>
    </>
  );
}