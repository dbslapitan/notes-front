import { URI } from "@/lib/constants";
import { resolveSearchParam } from "@/lib/search-param";
import { INote } from "@/models/note";
import Archived from "@/ui/archived";
import Home from "@/ui/home";
import Note from "@/ui/note";
import Search from "@/ui/search";
import Tagged from "@/ui/tagged";
import TagsPage from "@/ui/tags-page";
import { redirect, RedirectType } from "next/navigation";

export default async function Page({ params, searchParams }: { params: Promise<{ username: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  const { username } = await params;
  const query = await searchParams;
  const queryObject = new Object(query);

  const resolvedQuery = await resolveSearchParam(searchParams);

  const { notes, tags }: { notes: INote[], tags: string[] } = await fetch(`${URI}/api/v1/${username}`, { method: "GET", cache: "force-cache"}).then(res => res.json());

  const component = (() => {
    if (resolvedQuery === "home") {
      const newNotes = notes.filter(note => !note.isArchived);
      return <Home notes={newNotes} username={username} />;
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
    } else if(resolvedQuery === "tag"){
      const value = query.tag;
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
    } else if(resolvedQuery === "selected"){
      if(!notes.some(note => note._id === query.selected)){
        return redirect(`/${username}`, RedirectType.replace);
      }
      const href = (() => {
        const resolved = queryObject.hasOwnProperty("search") && "search" || queryObject.hasOwnProperty("tag") && "tag" || queryObject.hasOwnProperty("archived") && "archived" || "home";
        if(resolved !== "home" && resolved !== "archived"){
          const value = query[resolved];
          return `/${username}?${resolved}=${value || ""}`
        } else if(resolved === "archived"){
          return `/${username}?archived`;
        } else {
          return `/${username}`
        }
      })();
      return <Note href={href} username={username} note={notes.find(note => note._id === query.selected)} />
    }
    else{
      const newNotes = notes.filter(note => !note.isArchived);
      return <Home notes={newNotes} username={username} />;
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