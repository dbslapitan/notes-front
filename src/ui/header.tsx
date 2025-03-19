import Image from "next/image";
import Link from "next/link";
import light from "../../public/icons/logo-light.svg";

export default function Header(){
  return(
    <header className="py-3.25 px-4">
      <Link href={`/`}>
        <Image src={light} alt="" priority/>
      </Link>
    </header>
  );
}