import GoBack from "./go-back";
import Main from "./main";

export default function Note({href}: {href: string}){
  return(
    <Main>
      <div>
        <GoBack href={`${href}`} />
      </div>
    </Main>
  );
}