"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ScrollArea } from "./scroll-area";

export default function ScrollWrapper({bottomId = null, children, id = ""}: {bottomId?: string | null, children: ReactNode, id?: string}){

  const scrollRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {

    const setScrollHeight = () => {
      if(bottomId){
        const totalHeight = window.innerHeight;
        const bottomElement = document.querySelector(bottomId);
        const scrollTop =(scrollRef.current as HTMLDivElement).getBoundingClientRect().top;
        const bottomElTop = bottomElement?.getBoundingClientRect().height
        const scrollHeight = totalHeight - scrollTop - Number(bottomElTop);
        if(bottomElTop){
        (scrollRef.current as HTMLDivElement).style.height = `${scrollHeight}px`;
        }
      }
    }
    setScrollHeight();
    window.addEventListener("resize", setScrollHeight);

    return () => {
      window.removeEventListener("resize", setScrollHeight);
    }
  });

  return(
    <ScrollArea className="grow mt-4" ref={scrollRef} id={id}>
      {children}
    </ScrollArea>
  );
}