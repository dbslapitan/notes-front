import Link from "next/link";
import ScrollWrapper from "./scroll-wrapper";
import Image from "next/image";
import { text } from "@/lib/text";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import { Button } from "./button";
import carret from "../../public/icons/icon-arrow-left.svg";
import sans from "../../public/icons/icon-font-sans-serif.svg";
import serif from "../../public/icons/icon-font-serif.svg";
import mono from "../../public/icons/icon-font-monospace.svg";

export default function FontSettings({username}: {username: string}) {
  return (
    <ScrollWrapper>
      <Link href={`/${username}/settings`} className={`${text["preset-4"]} flex items-center`}>
        <Image src={carret} alt="" width={18} height={18} />
        <span className="relative">Settings</span>
      </Link>
      <h2 className={`${text["preset-1"]} mt-3`}>Font Theme</h2>
      <p className={`${text["preset-5"]} mt-2`}>Choose your font theme:</p>
      <RadioGroup defaultValue={"sans"} className="mt-4.25" asChild>
        <ul>
          <li className="flex p-4 rounded-[0.75rem] border items-center gap-4 has-data-[state=checked]:bg-neutral-100">
            <Label htmlFor="sans" className={`flex grow items-center`}>
              <Image src={sans} alt="" className="bg-neutral-0 p-2 h-fit w-fit border rounded-[0.75rem] border-neutral-200" />
              <p className={`ml-4 flex flex-col ${text["preset-4"]} gap-1.5`}>
                Sans-serif
                <span className={`${text["preset-6"]}`}>Clean and modern, easy to read.</span>
              </p>
            </Label>
            <RadioGroupItem value="sans" id="sans" className="ml-auto bg-neutral-200 data-[state=checked]:bg-blue-500 data-[state=checked]:[&_circle]:[fill:white] data-[state=unchecked]:bg-neutral-0" />
          </li>
          <li className="flex p-4 rounded-[0.75rem] border items-center gap-4 has-data-[state=checked]:bg-neutral-100">
            <Label htmlFor="serif" className={`flex grow items-center`}>
              <Image src={serif} alt="" className="bg-neutral-0 p-2 h-fit w-fit border rounded-[0.75rem] border-neutral-200" />
              <p className={`ml-4 flex flex-col ${text["preset-4"]} gap-1.5`}>
                Serif
                <span className={`${text["preset-6"]}`}>Classic and elegant for a timeless feel.</span>
              </p>
            </Label>
            <RadioGroupItem value="serif" id="serif" className="ml-auto bg-neutral-200 data-[state=checked]:bg-blue-500 data-[state=checked]:[&_circle]:[fill:white] data-[state=unchecked]:bg-neutral-0" />
          </li>
          <li className="flex p-4 rounded-[0.75rem] border items-center gap-4 has-data-[state=checked]:bg-neutral-100">
            <Label htmlFor="mono" className={`flex grow items-center`}>
              <Image src={mono} alt="" className="bg-neutral-0 p-2 h-fit w-fit border rounded-[0.75rem] border-neutral-200" />
              <p className={`ml-4 flex flex-col ${text["preset-4"]} gap-1.5`}>
                Monospace
                <span className={`${text["preset-6"]}`}>Code-like, great for a technical vibe.</span>
              </p>
            </Label>
            <RadioGroupItem value="mono" id="mono" className="ml-auto bg-neutral-200 data-[state=checked]:bg-blue-500 data-[state=checked]:[&_circle]:[fill:white] data-[state=unchecked]:bg-neutral-0" />
          </li>
        </ul>
      </RadioGroup>
      <div className="mt-8 text-right">
        <Button className={`${text["preset-4"]} bg-blue-500 text-neutral-0`}>
          Apply Changes
        </Button>
      </div>
    </ScrollWrapper>
  );
}