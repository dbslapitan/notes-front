"use client";

import { text } from "@/lib/text";
import { Input } from "./input";
import SearchSVG from "./svgs/search";
import { Label } from "./label";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput({value, username}: {value: string, username: string}){

  const router = useRouter();

  const handleInputChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
    router.replace(`/${username}?search=${event.target.value}`);
  }, 300);

  return(
    <div className="relative mt-4 p-0.5 border-[2px] border-neutral-0 rounded-[0.5rem] focus-within:border-neutral-500">
      <Label htmlFor="search" className="absolute top-3.5 left-4 w-5 h-5 text-neutral-500"><SearchSVG /></Label>
      <Input type="text" id="search" className={`py-3 pl-11 pr-4 h-11 ${text["preset-5"]} border-neutral-300 outline-none focus-visible:ring-0 focus-visible:border-neutral-950`} defaultValue={value} onChange={(e) => handleInputChange(e)}/>
    </div>
  );
}