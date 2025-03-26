import Link from "next/link";
import TagsSVG from "./svgs/tag";

export default function TagsList({tags, username}: {tags: string[], username: string}){

  return(
    <ul>
      {
        tags.map(tag => {
          return(
            <li key={tag}>
              <Link href={`/${username}?tag=${tag}`} className="flex gap-2 pt-3 pb-4 border-b border-b-neutral-200 items-center">
                <span className="block w-5 h-5"><TagsSVG /></span>
                {
                  tag
                }
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}