import { URI } from "@/lib/constants";

export default async function Page(){
  
  const {notes} = await fetch(`${URI}/api/v1/preview`, {method: "GET", cache: "force-cache"}).then(res => res.json());

  return(
    <main className="grow bg-neutral-0 rounded-2xl">
    </main>
  );
}