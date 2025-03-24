import Image from "next/image";
import Link from "next/link";
import plus from "../../public/icons/icon-plus.svg";

export default function Create({href}: {href: string}){
  return(
    <Link className="absolute bottom-4 right-4 bg-blue-500 p-2 rounded-[999px]" href={href}>
      <Image src={plus} alt="" width={32} height={32}/>
    </Link>
  );
}