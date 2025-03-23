import { URI } from "@/lib/constants";
import { INote } from "@/models/note";
import Archived from "@/ui/archived";
import Home from "@/ui/home";
import Search from "@/ui/search";
import Tagged from "@/ui/tagged";
import TagsPage from "@/ui/tags.page";
import { redirect, RedirectType } from "next/navigation";

export default async function Page({ params, searchParams }: { params: Promise<{ username: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  const { username } = await params;
  const query = await searchParams;
  const queryObject = new Object(query);

  const resolvedQuery = queryObject.hasOwnProperty("search") && "search" || queryObject.hasOwnProperty("tag") && "tags" || queryObject.hasOwnProperty("archived") && "archived" || "home";

  const { notes, tags }: { notes: INote[], tags: string[] } = await fetch(`${URI}/api/v1/${username}`, { method: "GET", cache: "force-cache" }).then(res => res.json());

  const component = (() => {
    if (resolvedQuery === "home") {
      return <Home notes={notes} username={username} />;
    } else if (resolvedQuery === "archived"){
      const newNote = notes.filter(note => note.isArchived);
      return <Archived notes={newNote} username={username} />;
    } else if(resolvedQuery === "search"){
      if(!query.search){
        return <Search notes={notes} username={username} value="" />;
      }
      const value = query.search.toString();
      const newNote = notes.filter(note => note.title.toLowerCase() === value.toLowerCase() || note.content.toLowerCase() === value.toLowerCase() || note.tags.findIndex(tag => tag.toLowerCase() === value.toLowerCase()) !== -1);
      return <Search notes={newNote} username={username} value={value}/>;
    } else if(resolvedQuery === "tags"){
      const value = query.tag;
      console.log(value);
      if(!value){
        return <TagsPage username={username} tags={tags}/>
      } else{
        const index = tags.findIndex(tag => tag.toLowerCase() === (value as string).toLowerCase());
        if(index === -1){
          return redirect(`/${username}?tag=`, RedirectType.replace);
        }
        const newNotes = notes.filter(note => {
          const i = note.tags.findIndex(tag => tag === value);
          return i !== -1;
        });
        return <Tagged notes={newNotes} username={username} value={value.toString()}/>
      }
    }
    else{
      return <Home notes={notes} username={username} />;
    }
  })();

  return (
    <>
      {
        component
      }
    </>
  );
}