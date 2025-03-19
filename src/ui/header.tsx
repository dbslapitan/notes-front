import Image from "next/image";
import Link from "next/link";
import light from "../../public/icons/logo-light.svg";
import LogoSVG from "./svgs/logo";

export default function Header(){
  return(
    <header className="py-3.25 px-4">
      <Link className="text-neutral-950" href={`/`}>
        <LogoSVG />
      </Link>
    </header>
  );
}