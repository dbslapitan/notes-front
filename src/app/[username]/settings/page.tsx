import Main from "@/ui/main";
import Settings from "@/ui/settings";
import ColorSettings from "@/ui/settings-color";

export default async function Page({ params, searchParams }: { params: Promise<{ username: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }){

  const {username} = await params;
  const searchParam = await searchParams;

  const component = (() => {
    if(searchParam?.selected === "color"){
      return <ColorSettings username={username} />
    } else if (searchParam?.selected === "font"){
      return <h1>Font</h1>
    } else {
      return <Settings username={username} />
    }
  })();

  return(
    <Main>
      {
        component
      }
    </Main>
  );
}