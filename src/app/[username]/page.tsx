import { URI } from "@/lib/constants";
import { text } from "@/lib/text";
import { INote } from "@/models/note";
import { Badge } from "@/ui/badge";
import { ScrollArea } from "@/ui/scroll-area";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({params}: {params: Promise<{username: string}>}) {

  const {username} = await params;

  const { notes }: { notes: INote[] } = await fetch(`${URI}/api/v1/${username}`, { method: "GET", cache: "force-cache"}).then(res => res.json());

  if(notes.length){
    redirect(`/${username}/${notes[0]._id}`);
  }

  return (
    <>
    </>
  );
}