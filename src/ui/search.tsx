import { text } from "@/lib/text";
import Main from "./main";
import { Input } from "./input";
import SearchInput from "./search-input";
import { INote } from "@/models/note";
import Notes from "./notes";

export default function Search({notes, username, value}: {notes: INote[], username: string, value: string}){
  
  return(
    <Main>
      <h1 className={`${text["preset-1"]}`}>Search</h1>
      <SearchInput value={value} username={username}/>
      {
        value.trim() && <p className={`mt-4 ${text["preset-5"]} text-neutral-700`}>All notes matching "{value}" are displayed below.</p>
      }
      <Notes notes={notes} username={username} />
    </Main>
  );
}