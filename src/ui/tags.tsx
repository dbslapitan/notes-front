"use client";

import { text } from "@/lib/css-presets";
import Image from "next/image";
import tagSrc from "../../public/icons/icon-tag.svg"
import { ScrollArea } from "./scroll-area";
import { RefObject, useEffect, useRef } from "react";

export default function Tags({ tags, bottomRef }: { tags: string[], bottomRef: RefObject<null | HTMLDivElement> }) {

  const scrollRef = useRef<null | HTMLDivElement>(null);
  const initialLoadRef = useRef(false);

  useEffect(() => {
    const setScrollHeight = () => {
      const top = (scrollRef.current as HTMLDivElement)?.getBoundingClientRect().top;
      const bottom = (bottomRef.current as HTMLDivElement)?.getBoundingClientRect().height;
      (scrollRef.current as HTMLDivElement).setAttribute("style", `height: ${window.innerHeight - top - bottom}px`);
    }

    if(!initialLoadRef.current){
      setScrollHeight();
      window.addEventListener("resize", setScrollHeight);
    }

    initialLoadRef.current = true;

    return () => {
      if(initialLoadRef.current){
        window.removeEventListener("resize", setScrollHeight);
      }
    }
  });

  return (
    <section>
      <h2 className={`${text["preset-1"]}`}>Tags</h2>
      <ScrollArea ref={scrollRef} className="mt-4">
        <ul>
          {
            tags.map(tag => {
              return (
                <li key={tag}>
                  <button className="w-full flex py-2.5 border-b gap-2">
                    <Image src={tagSrc} alt="" />
                    {tag}
                  </button>
                </li>
              );
            })
          }
        </ul>
      </ScrollArea>
    </section>
  );
}