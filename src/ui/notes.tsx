"use client";

import { text } from "@/lib/css-presets";
import { INote } from "@/models/note";
import { ScrollArea } from "./scroll-area";
import { RefObject, useEffect, useRef } from "react";
import { Badge } from "./badge";
import { useSearchParams } from "next/navigation";
import Search from "./search";

export default function Notes({notes, bottomRef}: {notes: INote[], bottomRef: RefObject<null | HTMLDivElement>}){

  const filteredNotes = useRef(notes);

  const scrollRef = useRef<null | HTMLDivElement>(null);
  const initialLoadRef = useRef(false);
  const searchParams = useSearchParams();

  const currentParam = searchParams.has("search") && "search" || searchParams.has("tag") && "tag" || searchParams.has("archived") && "archived" || "home";

  const isSearch = currentParam === "search";
  const isArchived = currentParam === "archived";

  if(isSearch){
    if(searchParams.get("search")){
      const searchValue = searchParams.get("search") as string;
      const newNotes = notes.filter(note => note.tags.includes(searchValue) || note.content.toLowerCase().includes(searchValue.toLowerCase()) || note.title.toLowerCase().includes(searchValue.toLowerCase()));
      filteredNotes.current = newNotes;
    }
    else{
      filteredNotes.current = notes;
    }
  }
  else{
    if(searchParams.has("archived")){
      const newNotes = filteredNotes.current.filter(note => note.isArchived);
      filteredNotes.current = newNotes;
    }
  }

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

  return(
    <>
      <h1 className={`${text["preset-1"]}`}>{isSearch && "Search" || isArchived && "Archived" ||  "Notes"}</h1>
      <Search className={`${isSearch ? "" : "hidden"}`}/>
      <p className={`${text["preset-5"]} ${isSearch && searchParams.get("search") ? "" : "hidden"} text-neutral-700`}>All notes matching &quot;<strong className="font-medium">{searchParams.get("search")}</strong>&quot;are displayed below.</p>
      <p className={`${text["preset-5"]} mt-4 p-2 bg-neutral-100 border border-neutral-200 rounded-[0.5rem] ${isSearch && searchParams.get("search") && !filteredNotes.current.length ? "" : "hidden"} text-neutral-700`}>No notes match your search. Try a different keyword or <button className="hover:cursor-pointer underline">create a new note.</button></p>
      <ScrollArea ref={scrollRef} className="h-0 mt-4">
        <ul>
          {
            filteredNotes.current.map(note => {
              return(
                <li key={note._id} className="p-2 border-b border-b-neutral-200 last-of-type:border-b-0">
                  <h2 className={`${text["preset-3"]}`}>{note.title}</h2>
                  <ul className="flex mt-3 gap-1">
                    {
                      note.tags.map(tag => {
                        return <li key={tag}><Badge className={`${text["preset-6"]} bg-neutral-200 text-neutral-950`}>{tag}</Badge></li>
                      })
                    }
                  </ul>
                  <p className={`${text["preset-6"]} mt-3`}>{(new Date(note.lastEdited)).toLocaleDateString("en-GB", {day: "numeric", month: "short", year: "numeric"})}</p>
                </li>
              );
            })
          }
        </ul>
      </ScrollArea>
    </>
  );
}