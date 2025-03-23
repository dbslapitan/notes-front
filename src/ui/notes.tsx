import { INote } from "@/models/note";
import Link from "next/link";
import { text } from "@/lib/text";
import { Badge } from "./badge";

export default function Notes({notes, username}: {notes: INote[], username: string}){
  return(
    <ul className="pb-5">
      {
        notes.map(note => {
          return (
            <li key={note._id} className={`note border-t border-t-neutral-200 first-of-type:border-none [.selected+li]:border-none`}>
              <Link href={`/${username}?selected=${note._id}`} className={`block pt-2 px-2 pb-3`}>
                <h2 className={`${text["preset-3"]}`}>{note.title}</h2>
                <ul className="mt-3 flex flex-wrap gap-1">
                  {
                    note.tags.map(tag => {
                      return (
                        <Badge key={tag} asChild className={`bg-neutral-200 text-neutral-950 ${text["preset-6"]}`}>
                          <li>
                            {tag}
                          </li>
                        </Badge>
                      )
                    })
                  }
                </ul>
                <p className={`mt-3 ${text["preset-6"]}`}>{new Date(note.lastEdited).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}