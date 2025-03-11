"use client";

import { text } from "@/lib/css-presets";
import Image from "next/image";
import carret from "../../public/icons/icon-arrow-left.svg"
import { Dispatch } from "react";
import { useTheme } from "next-themes";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import sun from "../../public/icons/icon-sun.svg";
import moon from "../../public/icons/icon-moon.svg";
import system from "../../public/icons/icon-system-theme.svg";

export default function ColorSettings({ setValue }: { setValue: Dispatch<string> }) {

  const { resolvedTheme, setTheme } = useTheme();
  const handleValueChange = (value: string) => {
    setTheme(value);
  }

  return (
    <>
      <button onClick={() => setValue("all")} className={`${text["preset-4"]} flex items-center`}>
        <Image src={carret} alt="" />
        <span className="relative -top-0.25">Settings</span>
      </button>
      <h2 className={`${text["preset-1"]} mt-3`}>Color Theme</h2>
      <p className={`${text["preset-5"]} mt-2`}>Choose your color theme:</p>
      <RadioGroup defaultValue={resolvedTheme} className="mt-4.25" asChild onValueChange={handleValueChange}>
        <ul>
          <li className="flex p-4 rounded-[0.75rem] border items-center gap-4 has-data-[state=checked]:bg-neutral-100">
            <Label htmlFor="light" className={`flex grow items-center`}>
              <Image src={sun} alt="" className="bg-neutral-0 p-2 h-fit w-fit border rounded-[0.75rem] border-neutral-200" />
              <p className={`ml-4 flex flex-col ${text["preset-4"]} gap-1.5`}>
                Light Mode
                <span className={`${text["preset-6"]}`}>Select a sleek and modern dark theme</span>
              </p>
            </Label>
            <RadioGroupItem value="light" id="light" className="ml-auto bg-neutral-200 data-[state=checked]:bg-blue-500 data-[state=checked]:[&_circle]:[fill:white] data-[state=unchecked]:bg-neutral-0" />
          </li>
          <li className="flex p-4 rounded-[0.75rem] border items-center gap-4 has-data-[state=checked]:bg-neutral-100">
            <Label htmlFor="dark" className={`flex grow items-center`}>
              <Image src={moon} alt="" className="bg-neutral-0 p-2 h-fit w-fit border rounded-[0.75rem] border-neutral-200" />
              <p className={`ml-4 flex flex-col ${text["preset-4"]} gap-1.5`}>
                Dark Mode
                <span className={`${text["preset-6"]}`}>Select a sleek and modern dark theme</span>
              </p>
            </Label>
            <RadioGroupItem value="dark" id="dark" className="ml-auto bg-neutral-200 data-[state=checked]:bg-blue-500 data-[state=checked]:[&_circle]:[fill:white] data-[state=unchecked]:bg-neutral-0" />
          </li>
          <li className="flex p-4 rounded-[0.75rem] border items-center gap-4 has-data-[state=checked]:bg-neutral-100">
            <Label htmlFor="system" className={`flex grow items-center`}>
              <Image src={system} alt="" className="bg-neutral-0 p-2 h-fit w-fit border rounded-[0.75rem] border-neutral-200" />
              <p className={`ml-4 flex flex-col ${text["preset-4"]} gap-1.5`}>
                System
                <span className={`${text["preset-6"]}`}>Select a sleek and modern dark theme</span>
              </p>
            </Label>
            <RadioGroupItem value="system" id="system" className="ml-auto bg-neutral-200 data-[state=checked]:bg-blue-500 data-[state=checked]:[&_circle]:[fill:white] data-[state=unchecked]:bg-neutral-0" />
          </li>
        </ul>
      </RadioGroup>
    </>
  );
}