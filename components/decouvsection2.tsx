import Image from "next/image";
import Code from "@/public/devops.jpg";
export default function DecouvSection2() {
  return (
    <div>
      <div className="bg-purple-900 py-8 px-4">
      {/* Conteneur flex */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Colonne de gauche (texte) */}
        <div className="md:w-1/2 bg-lime-400 text-green-900 p-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Nos services informatiques sont réputés pour leur efficacité,
          </h1>
          <p className="text-lg md:text-xl font-semibold">
            leur fiabilité et leur rapidité d'exécution.
          </p>
        </div>

        {/* Colonne de droite (image) */}
        <div className="md:w-1/2">
          <Image
            src={Code}  // Remplacer avec le chemin correct de votre image
            width={700}
            height={500}
            objectFit="cover"
            alt="Image DevOps"
          />
        </div>
      </div>
    </div>
      
    </div>
  );
}
