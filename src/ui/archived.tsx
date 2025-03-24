import { text } from "@/lib/text";
import Main from "./main";
import { INote } from "@/models/note";
import Notes from "./notes";
import ScrollWrapper from "./scroll-wrapper";

export default function Archived({notes, username}: {notes: INote[], username: string}){
  return(
    <Main>
      <h1 className={`${text["preset-1"]}`}>Archived Note</h1>
      <p className={`${text["preset-5"]} mt-2 text-neutral-700`}>All your archived notes are stored here. You can restore or delete them anytime.</p>
      <ScrollWrapper bottomId={"mobile-nav"}>
        <Notes notes={notes} helper="archived" username={username} />
      </ScrollWrapper>
    </Main>
  );
}