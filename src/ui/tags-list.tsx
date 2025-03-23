import Link from "next/link";

export default function TagsList({tags}: {tags: string[]}){

  return(
    <ul className={`mt-4`}>
      {
        tags.map(tag => {
          console.log(tag);
          return(
            <li key={tag}>
              <Link href={`#`}>
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