import Image from "next/image"
import Logo from "@/public/logo2.jpeg"
export default function Footer() {
  return (
    <div className="flex w-full bottom-0 bg-black">
      <div className="W-20">
      <Image
      src={Logo}
      alt=""
      className=""
      />
      </div>
      <div className="text-white p-10">
        +243 997 679 336 congoliciousfoundation@gmail.com
      </div>
      <div className="text-white">
        Congolicious Foundation est une association sans but lucrative régulée
        par les autorités congolaises. Enregistrée au ministère des affaires
        sociales, actions humanitaires et solidarité nationale sous le numéro
        280/0.E/2022 et au ministère du plan et suivi de la mise en œuvre pour
        la révolution de la modernité sous le numéro 2044/PL/DCRE/22
      </div>
      <div className="text-white">
        © 2023 Congolicious Foundation. Tous les droits sont réservés
      </div>
    </div>
  );
}
