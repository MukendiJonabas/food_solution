import Image from "next/image";
import photo from "../public/dev4.jpeg";

export default function HeroSection() {
  return (
    <div>
      <div className="relative w-full h-screen ">
        <div className="">
          <Image
            src={photo}
            layout="fill"
            objectFit="cover"
            alt="Image de fond"
            quality={100}
          />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full lg:px-48  text-left W-3">
          <h1 className="text-white font-extrabold xl:text-[2.5rem] sm:text-[2rem] py-4">BIBITTUDE PROGRAMME</h1>
          <p className="text-white text-[0.7rem] leading-3 sm:text-[1.5rem] sm:leading-7 my-4 w-[60%]">
            une initiative visant à autonomiser les femmes victimes des conflits
            armés à l'est de la RDC
          </p>
        <div>
        <a href="" rel="noreferrer" target="_blank" className="border-1 border-solid border-[#99f906] bg-[#99f906] text-[#106a39] px-4 sm:py-2 text-[10px] sm:text-[20px] sm:w-fit text-center w-fit py-2 see-video animate__animated animate__bounce animate__infinite">en savoir plus</a>
        </div>
        </div>
      </div>
    </div>
  );
}
