import Image from "next/image";
import photo from "./public/dev4.jpeg";
export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={photo}
          layout="fill"
          objectFit="cover"
          alt="Image de fond"
          quality={100}
        />
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full lg:px-48  text-left W-3">
        <h1 className="text-5xl font-bold text-green-300">DigiPublic</h1>
        <h2 className="text-4xl font-semibold text-green-400">Bienvenu(e)</h2>
      </div>
    </div>
  );
}
