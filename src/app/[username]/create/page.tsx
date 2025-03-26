import { resolveSearchParam } from "@/lib/search-param";
import Note from "@/ui/note";

export default async function Page({params, searchParams}: {params: Promise<{username: string}>, searchParams: Promise<{ [key: string]: string | string[] | undefined }>}){

  const {username} = await params;
  const searchParam = await searchParams;

  const resolvedParam = await resolveSearchParam(searchParams);

  const href = (() => {
    if(resolvedParam === "archived"){
      return `/${username}?archived`;
    } else if(resolvedParam === "search"){
      return `/${username}?search=${searchParam.search}`;
    } else if(resolvedParam === "tag"){
      return `/${username}?tag=${searchParam.tag}`;
    } else{
      return `/${username}`
    }
  })();

  return(
    <Note href={href} username={username} />
  );
}