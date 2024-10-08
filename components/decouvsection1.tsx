import dev from "@/public/ops.jpg";
import Image from "next/image";
export default function DecouvSection1() {
    return(
        <div>

<div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={dev}
          layout="fill"
          objectFit="cover"
          alt="Image de fond"
          quality={100}
        />
      </div>

      <div className="border-2 border-solid border-[#99f906] bg-[#99f906] mb-1 p-1 sm:p-2 w-fit sm:w-fit ">
        <h1 className="text-[#106a39] text-[28px] font-bold sm:text-[30px]">Nous croyons</h1>
        </div>
          
        
      </div>
    </div> 
        
    )
}