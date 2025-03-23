import { URI } from "@/lib/constants";
import { INote } from "@/models/note";
import Archived from "@/ui/archived";
import Home from "@/ui/home";
import Search from "@/ui/search";

export default async function Page({ params, searchParams }: { params: Promise<{ username: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  const { username } = await params;
  const query = await searchParams;
  const queryObject = new Object(query);

  const resolvedQuery = queryObject.hasOwnProperty("search") && "search" || queryObject.hasOwnProperty("tag") && "tags" || queryObject.hasOwnProperty("archived") && "archived" || "home";

  const { notes }: { notes: INote[] } = await fetch(`${URI}/api/v1/${username}`, { method: "GET", cache: "force-cache" }).then(res => res.json());

  const component = (() => {
    if (resolvedQuery === "home") {
      return <Home notes={notes} username={username} />
    } else if (resolvedQuery === "archived"){
      const newNote = notes.filter(note => note.isArchived);
      return <Archived notes={newNote} username={username} />
    } else if(resolvedQuery === "search"){
      if(!query.search){
        return <Search notes={notes} username={username} value="" />
      }
      const value = query.search.toString();
      const newNote = notes.filter(note => note.title.toLowerCase() === value.toLowerCase() || note.content.toLowerCase() === value.toLowerCase() || note.tags.findIndex(tag => tag.toLowerCase() === value.toLowerCase()) !== -1);
      return <Search notes={newNote} username={username} value={value}/>
    }
    else{
      return <main className="grow"></main>
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