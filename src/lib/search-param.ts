export const resolveSearchParam = async (searchParams: Promise<{ [key: string]: string | string[] | undefined }>) => {

  const query = await searchParams;
  const queryObject = new Object(query);

  const resolvedQuery = queryObject.hasOwnProperty("selected") && "selected" || queryObject.hasOwnProperty("search") && "search" || queryObject.hasOwnProperty("tag") && "tag" || queryObject.hasOwnProperty("archived") && "archived" || "home";

  return resolvedQuery;
}