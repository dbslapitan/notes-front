import Image from "next/image";
import Link from "next/link";
import light from "../../public/icons/logo-light.svg";

export default function Header(){
  return(
    <header>
      <Link href={`/`}>
        <Image src={light} alt="" priority/>
      </Link>
    </header>
  );
}