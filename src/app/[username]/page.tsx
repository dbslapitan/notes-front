import { URI } from "@/lib/constants";
import { text } from "@/lib/text";
import { INote } from "@/models/note";
import Notes from "@/ui/notes";

export default async function Page({ params }: { params: Promise<{ username: string }> }) {

  const { username } = await params;

  const { notes }: { notes: INote[] } = await fetch(`${URI}/api/v1/${username}`, { method: "GET", cache: "force-cache" }).then(res => res.json());

  return (
    <main className="flex flex-col grow px-4 pt-5 bg-neutral-0 rounded-2xl overflow-y-hidden">
      <h1 className={`${text["preset-1"]}`}>All Notes</h1>
      <Notes notes={notes} username={username} />
    </main>
  );
}