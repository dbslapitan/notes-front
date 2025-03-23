import { text } from "@/lib/text";
import Main from "./main";
import SearchInput from "./search-input";
import { INote } from "@/models/note";
import Notes from "./notes";
import Link from "next/link";

export default function Search({notes, username, value}: {notes: INote[], username: string, value: string}){
  
  return(
    <Main>
      <h1 className={`${text["preset-1"]}`}>Search</h1>
      <SearchInput value={value} username={username}/>
      {
        value.trim() && <p className={`mt-4 ${text["preset-5"]} text-neutral-700`}>All notes matching "{value}" are displayed below.</p>
      }
      {
        notes.length ? <Notes notes={notes} username={username} /> : <p className={`mt-4 p-2 rounded-[0.5rem] bg-neutral-100 ${text["preset-5"]}`}>No notes match your search. Try a different keyword or <Link className="underline" href={`${username}/create`}>create a new note.</Link></p>
      }
    </Main>
  );
}