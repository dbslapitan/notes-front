"use client";

import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { JSX, ReactNode } from "react";

export default function NavLink({children, link, href}: {children: ReactNode, link: string, href: string}){

  const params = useSearchParams();
  const {username} = useParams();
  console.log(username);
  const resolvedParam = params.has("search") && "search" || params.has("tag") && "tags" || params.has("archived") && "archived" || "home";

  return(
    <Link className={`flex flex-col gap-1 justify-center items-center py-1 rounded-sm max-w-[53.33%] m-auto ${resolvedParam === link ? "bg-blue-50 text-blue-500" : "text-neutral-950"}`} href={`/${username}${href}`}>
      {children}
    </Link>
  );
}