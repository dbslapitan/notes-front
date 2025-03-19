import Navigation from "@/ui/navigation";

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  const params = await searchParams;
  const paramObject = new Object(params);

  const resolvedParam = paramObject.hasOwnProperty("search") && "search" || paramObject.hasOwnProperty("tag") && "tags" || paramObject.hasOwnProperty("archived") && "archived" || "home";

  return (
    <>
      <main className="grow">

      </main>
      <Navigation selected={resolvedParam} />
    </>
  );
}