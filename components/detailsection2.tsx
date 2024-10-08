import Image from "next/image";
import Don from "@/public/donation.webp"
export default function DetailSection2() {
    return(
        <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 flex flex-row  sm:px-0 sm:py-16 ">
        <div className=" py-2 flex flex-col justify-center items-start pl-10 w-[50%] h-40 border-1 border-solid border-[#106a39] bg-[#106a39] sm:w-[50%] sm:h-96">
            <h3 className="text-[#99f906] text-[26px] font-bold sm:text-[45px] leading-none aos-init aos-animate" data-aos="fade-up">Nourrir, <br/> c’est assurer <br/> l’avenir </h3>
            <a className="border-1 border-solid border-[#99f906] bg-[#99f906] text-[#106a39] px-2 text-[10px] sm:text-[20px] mt-4 mx-0" href="/cause">en savoir plus</a><button></button>
     
            
     </div>
     <div className="detail w-[50%] h-40 border-1 border-solid border-[#99f906] bg-[#99f906] sm:h-96">
        <Image
         src={Don}
         alt="donation"
         />
     </div>
     
     
     </div>
    );
}