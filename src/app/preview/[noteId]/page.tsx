import MobileLayout from "@/ui/mobile-layout";

export default async function Page({params}: {params: {noteId: string}}){
  const {noteId} = await params;
  return(
    <>
      <MobileLayout fixed="note"/>
    </>
  );
}