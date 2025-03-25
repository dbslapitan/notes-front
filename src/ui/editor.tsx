"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import ScrollWrapper from "./scroll-wrapper";
import Quill from "quill";

export default function Editor(){

  const toolbarRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const quill = new Quill(containerRef.current as HTMLDivElement, {
      placeholder: "Start typing your note here...",
      theme: "snow",
      modules: {
        toolbar: toolbarRef.current
      }
    });
    const scroll = document.querySelector("#scroll-editor");
    (containerRef.current as HTMLDivElement).style.height = `${scroll?.clientHeight}px`;
    console.log(quill);
  });

  return(
    <>
      <div className="mt-4" ref={toolbarRef}>
        <span className="ql-formats">
          <button type="button" className="ql-bold"></button>
          <button type="button" className="ql-italic"></button>
          <button type="button" className="ql-underline"></button>
          <button type="button" className="ql-strike"></button>
        </span>
        <span className="ql-formats">
          <button type="button" className="ql-blockquote"></button>
          <button type="button" className="ql-code-block"></button>
        </span>
        <span className="ql-formats">
          <button type="button" className="ql-link"></button>
          <button type="button" className="ql-image"></button>
          <button type="button" className="ql-video"></button>
          <button type="button" className="ql-formula"></button>
        </span>
        <span className="ql-formats">
          <button type="button" className="ql-list" value="ordered"></button>
          <button type="button" className="ql-list" value="bullet"></button>
          <button type="button" className="ql-list" value="check"></button>
        </span>
        <span className="ql-formats">
          <button type="button" className="ql-script" value="sub"></button>
          <button type="button" className="ql-script" value="super"></button>
        </span>
        <span className="ql-formats">
          <button type="button" className="ql-indent" value="-1"></button>
          <button type="button" className="ql-indent" value="+1"></button>
        </span>
        <span className="ql-formats">
          <select className="ql-color" />
          <select className="ql-background" />
        </span>
        <span className="ql-formats">
          <button type="button" className="ql-align"></button>
          <button type="button" className="ql-align" value="center"></button>
          <button type="button" className="ql-align" value="right"></button>
          <button type="button" className="ql-align" value="justify"></button>
        </span>
      </div>
        <ScrollWrapper bottomId={`#mobile-nav`} id="scroll-editor">
          <div className="h-full border border-[#CCCCCC]">
            <div className="border-none! h-full" ref={containerRef} />
          </div>
        </ScrollWrapper>
    </>
  );
}