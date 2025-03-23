"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ScrollArea } from "./scroll-area";

export default function ScrollWrapper({bottomId = null, children}: {bottomId?: string | null, children: ReactNode}){

  const scrollRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
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
  });

  return(
    <ScrollArea className="grow mt-4" ref={scrollRef}>
      {children}
    </ScrollArea>
  );
}