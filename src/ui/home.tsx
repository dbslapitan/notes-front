import { INote } from "@/models/note";
import Notes from "./notes";
import { text } from "@/lib/text";
import Main from "./main";

export default function Home({notes, username}: {notes: INote[], username: string}){
  return(
    <Main>
      <h1 className={`${text["preset-1"]}`}>All Notes</h1>
      <Notes notes={notes} username={username} />
    </Main>
  );
}