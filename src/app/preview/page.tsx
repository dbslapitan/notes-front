import { URI } from "@/lib/constants";
import MobileLayout from "@/ui/mobile-layout";
import axios from "axios";

export default async function Page() {
  
  const {data} = await axios.get(`${URI}/api/v1/preview`);

  return (
    <>
      <MobileLayout notes={data.notes} tags={data.tags}/>
    </>
  );
}