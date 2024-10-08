import Image from "next/image";
import Food from "@/public/congo.jpg";
import Menu from "@/public/menu.webp";
import Plat from "@/public/bibi.jpg";
export default function DetailSection3(){
    return (
        <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 flex flex-row sm:px-0 sm:py-16 ">
         
         <div className="flex flex-row w-full h-48 sm:h-[100%]  justify-between gap-2 pt-4 sm:py-4 sm:gap-6">
        <div className="flex flex-col w-full h-50 aos-init aos-animate">
            <div className="congo w-30 h-24 sm:h-[60%]">
            <Image
                src={Food}
                alt="ndunda"
                />
            </div>
            
            <div className="bg-[#106a39] w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center ">
                
                <h3 className="text-[#99f906] text-[9px] px-2 font-bold sm:text-[25px] text-start ">Congo Food Week</h3>
                <p className="px-2 text-[#99f906] font-normal text-[5px] sm:text-[15px] text-start">Le premier culinaire contre la faim en Republique Democratique du Congo</p>
                <a href="" target="_blank" rel="noreferrer" className="ml-2 mt-3 border-1 border-solid border-[#106a39] bg-[#99f906] text-[#106a39] py-1 px-1 text-[7px] w-14 h-5 sm:text-[15px] sm:w-32 sm:h-10 flex items-center justify-center ">en savoir plus</a>
                </div>
                </div>
                <div className="flex flex-col w-full h-50 aos-init aos-animate" data-aos="fade-up">
                    <div className="congolicious w-30 h-24 sm:h-[60%] ">
                        
                    <Image
                src={Menu}
                alt="ndunda"
                />
                        </div>
                        <div className="bg-[#106a39] w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center">
                            <h3 className="text-[#99f906] text-[8px] px-2 font-bold sm:text-[25px] text-start ">It’s Congolicious : <br/>A Cookbook</h3>
                            <p className="px-2 text-[#99f906] font-normal text-[5px] sm:text-[15px] text-start">L’un de rare livre des recettes Congolaise</p>
                            <a className="ml-2 mt-3 border-1 border-solid border-[#106a39] bg-[#99f906] text-[#106a39] text-center flex items-center justify-center py-0 px-0 text-[7px] w-14 h-4 sm:text-[15px] sm:w-32 sm:h-10 " href="/congolicious-book">en savoir plus</a>
                            </div>
                            </div>
                            <div className="flex flex-col w-full aos-init aos-animate" data-aos="fade-up">
                                <div className="bibititude w-30 h-24 sm:h-[60%]">
                                <Image
                                src={Plat}
                                alt="ndunda"
                                  />   
                                </div>
                                <div className="bg-[#106a39] w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center">
                                    <h3 className="px-2 text-[#99f906] text-[8px] font-bold sm:text-[25px] text-start ">Bibititude</h3>
                                    <p className="px-2 text-[#99f906] font-normal text-[5px] sm:text-[15px] text-start">Programme d’autonomisation des femmes victimes des conﬂits à l’est de la RDC.</p>
                                    <a className="ml-2 mt-3 border-1 border-solid border-[#106a39] bg-[#99f906] text-[#106a39] text-center flex items-center justify-center py-1 px-1 text-[7px] w-14 h-5 sm:text-[15px] sm:w-32 sm:h-10 " href="/bibititude">en savoir plus</a>
                                    </div>
                                    </div>
                                    </div>

        </div>
    )
}