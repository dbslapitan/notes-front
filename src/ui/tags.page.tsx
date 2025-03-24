import { text } from "@/lib/text";
import Main from "./main";
import TagsList from "./tags-list";
import ScrollWrapper from "./scroll-wrapper";
import Create from "./create";

export default function TagsPage({tags, username}: {tags: string[], username: string}){

  return(
    <Main>
      <h1 className={`${text["preset-1"]}`}>Tags</h1>
      <ScrollWrapper bottomId={"#mobile-nav"}>
        <TagsList tags={tags} username={username} />
      </ScrollWrapper>
      <Create href={`/${username}/create?tag=`} />
    </Main>
  );
}