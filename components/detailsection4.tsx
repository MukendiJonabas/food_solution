import Image from "next/image";
import Light from "@/public/lighting.png";
export default function DetailSection4() {
  return (
    <div className="newsletter bg-black w-full h-64  backdrop-blur-md flex flex-col justify-center items-center sm:h-96">
      <h2 className="text-2xl text-white font-bold">
        Rejoignez le combat <br /> contre la faim en RDC
      </h2>
      <p className="text-white text-center">
        Recevez des news sur la fondation, les producteurs et artisans locaux
      </p>
      <div className=" p-2 bg-[#99f906] border-[#99f906] border-2 border-solid  w-72 h-12 mt-3 flex flex-row">
        <input
          type="text"
          placeholder="Votre email"
          className="w-[60%] text-[#106a39] placeholder-[#106a39] text-[12px outline-none bg-transparent"
          value=""
        />
        <div className="w-[40%] justify-center bg-transparent flex  items-center">
          <p className="text-[#106a39] font-bold">Je m'inscris</p>
        </div>
      </div>
    </div>
  );
}
