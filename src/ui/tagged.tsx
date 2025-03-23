import { text } from "@/lib/text";
import Main from "./main";
import GoBack from "./go-back";

export default function Tagged({value, username}: {value: string, username: string}){
  return(
    <Main>
      <GoBack href={`/${username}?tag=`} />
      <h1 className={`${text["preset-1"]} text-neutral-600 mt-4`}>Notes Tagged: <span className="text-neutral-950">{value}</span></h1>
      <p>All notes with the {`"${value}"`} tag are shown here.</p>
    </Main>
  );
}