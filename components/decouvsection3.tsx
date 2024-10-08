import Image from "next/image";
import web from "@/public/web-dev.webp"
export default function DecouvSection3(){
    return(
        <div>
            <div className=" relative ">
      {/* Image de fond */}
      <Image
        src={web}  // Remplacer par le chemin correct de votre image
        alt="Fond d'appel à l'action"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Conteneur de texte et formulaire */}
      <div className="  bg-black bg-opacity-50 flex flex-col items-center justify-center z-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
          Rejoignez le combat contre la faim en RDC
        </h2>
        <p className="text-white text-lg text-center mb-6">
          Recevez des news sur la fondation, les producteurs et artisans locaux
        </p>

        {/* Formulaire d'inscription */}
        <form className="flex">
          <input
            type="email"
            placeholder="Votre email"
            className="p-2 rounded-l-lg text-gray-900 w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-lime-400 text-green-900 font-bold p-2 rounded-r-lg"
          >
            Je m'inscris
          </button>
        </form>
      </div>
    </div>
        </div>
    )
}