import { text } from "@/lib/text";
import Main from "./main";
import GoBack from "./go-back";
import Notes from "./notes";
import { INote } from "@/models/note";
import ScrollWrapper from "./scroll-wrapper";
import Create from "./create";

export default function Tagged({value, username, notes}: {value: string, username: string, notes: INote[]}){
  return(
    <Main>
      <GoBack href={`/${username}?tag=`} />
      <h1 className={`${text["preset-1"]} text-neutral-600 mt-4`}>Notes Tagged: <span className="text-neutral-950">{value}</span></h1>
      <p>All notes with the {`"${value}"`} tag are shown here.</p>
      <ScrollWrapper bottomId={"#mobile-nav"}>
        <Notes notes={notes} helper={`tag=${value}`} username={username}/>
      </ScrollWrapper>
      <Create href={`/${username}/create?tag=${value}`} />
    </Main>
  );
}