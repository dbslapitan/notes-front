"use client";

import Image from "next/image";
import Link from "next/link";
import greater from "../../public/icons/icon-arrow-left.svg"
import { text } from "@/lib/text";

export default function GoBack({href, className=""}: {href: string, className?: string}){


  return(
    <Link href={href} className={`flex gap-1 ${text["preset-5"]} text-neutral-600 ${className}`}><Image src={greater} width={18} height={18} alt=""/> Go Back</Link>
  );
}