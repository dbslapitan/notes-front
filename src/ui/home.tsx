import { INote } from "@/models/note";
import Notes from "./notes";
import { text } from "@/lib/text";
import Main from "./main";
import ScrollWrapper from "./scroll-wrapper";

export default function Home({notes, username}: {notes: INote[], username: string}){
  return(
    <Main>
      <h1 className={`${text["preset-1"]}`}>All Notes</h1>
      <ScrollWrapper bottomId={"#mobile-nav"}>
        <Notes notes={notes} username={username} />
      </ScrollWrapper>
    </Main>
  );
}