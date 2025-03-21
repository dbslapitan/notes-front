import { URI } from "@/lib/constants";
import { text } from "@/lib/text";
import { INote } from "@/models/note";
import { Badge } from "@/ui/badge";
import { ScrollArea } from "@/ui/scroll-area";
import Link from "next/link";

export default async function Page({params}: {params: Promise<{username: string, noteId: string}>}){
  
  const {username, noteId} = await params;

  const {notes}: {notes: INote[]} = await fetch(`${URI}/api/v1/preview`, {method: "GET", cache: "force-cache"}).then(res => res.json());

  return(
    <main className="flex flex-col grow px-4 pt-5 bg-neutral-0 rounded-2xl overflow-y-hidden">
      <h1 className={`${text["preset-1"]}`}>All Notes</h1>
      <ScrollArea className="grow mt-4 pb-5 h-[535px]">
        <ul>
          {
            notes.map(note => {
              return (
                <li key={note._id} className={`note border-t border-t-neutral-200 first-of-type:border-none [.selected+li]:border-none  ${noteId === note._id ? "selected bg-neutral-100 border-none rounded-[0.375rem]" : ""}`}>
                  <Link href={`/${username}/${note._id}`} className={`block pt-2 px-2 pb-3`}>
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
      </ScrollArea>
    </main>
  );
}