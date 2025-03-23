"use client";

import { text } from "@/lib/text";
import { Input } from "./input";
import SearchSVG from "./svgs/search";
import { Label } from "./label";
import { ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput({value, username}: {value: string, username: string}){

  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    router.replace(`/${username}?search=${event.target.value}`);
  }

  return(
    <div className="relative mt-4">
      <Label className="absolute top-3 left-4 w-5 h-5"><SearchSVG /></Label>
      <Input type="text" className={`py-3 pl-11 pr-4 h-11 ${text["preset-5"]}`} defaultValue={value} onChange={handleInputChange}/>
    </div>
  );
}