import { URI } from "@/lib/constants";
import { INote } from "@/models/note";
import Home from "@/ui/home";

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
      return <main className="grow"></main>
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