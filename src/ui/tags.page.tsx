import { text } from "@/lib/text";
import Main from "./main";
import TagsList from "./tags-list";

export default function TagsPage({tags}: {tags: string[]}){

  return(
    <Main>
      <h1 className={`${text["preset-1"]}`}>Tags</h1>
      <TagsList tags={tags} />
    </Main>
  );
}