"use client";

import { ReactNode, useContext } from "react";
import { FontContext } from "./providers";
import { fonts } from "@/lib/fonts";

export default function Main({children}: {children: ReactNode}){

  const {font} = useContext(FontContext);

  return(
    <main className={`${fonts[font]} relative flex flex-col grow px-4 pt-5 bg-neutral-0 dark:bg-neutral-950 rounded-t-2xl overflow-y-hidden`}>
      {children}
    </main>
  );
}