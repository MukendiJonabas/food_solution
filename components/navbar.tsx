import Link from "next/link";
import logo from "../public/logo2.jpeg";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-[#106A39]  w-full p-5 flex justify-between items-center lg:px-48 text-white text-xs md:text-xl font-extrabold">
      <Link href={"/"}>
        <Image src={logo} alt="" className="w-20" />
      </Link>
      <div className="flex gap-8 font-bold sm:text-[20px]">
        <Link href="/A_propos">NOUS DECOUVRIR</Link>
        <Link href="/services">PROJETS&PROGRAMMES</Link>
        <Link href="/don" className="text-[#99F906]">FAIRE UN DON</Link>
      </div>
    </div>
  );
}
