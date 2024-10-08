import Image from "next/image";
import OP from "../public/OIP.jpg";

export default function DetailSection() {
  return (
    <div>
      <div className="bg-[#0f071c] relative z-10 flex flex-col items-start justify-center h-full lg:px-48 text-white font-extrabold  W-3 text-justify">
        <p>
          Le numérique occupe une place essentielle dans notre société actuelle,
          influençant pratiquement tous les aspects de la vie quotidienne,
          professionnelle et éducative. Voici quelques raisons de son importance
          :
        </p>
        <br />
        <br />
        <h1 className="text-3xl">1.Accessibilité de l'information</h1>
        <br />
        <br />
        <p>
          Le numérique permet un accès rapide et instantané à une quantité
          énorme d'informations via Internet. Cela favorise l'éducation, la
          recherche, et la communication.
        </p>
        <br />
        <br />
        <h1 className="text-3xl">2.Transformation des métiers</h1>
        <br />
        <br />
        <p>
          Le numérique a bouleversé presque tous les secteurs : la santé, le
          commerce, la finance, etc. De nouveaux métiers liés aux technologies
          numériques apparaissent, tandis que d'autres sont modifiés par
          l'automatisation et les outils numériques.
        </p>
        <br />
        <br />
        <h1 className="text-3xl">3.Communication et collaboration</h1>
        <br />
        <br />
        <p>
          Les outils numériques (e-mails, réseaux sociaux, visioconférences)
          facilitent la communication à distance. Les équipes peuvent collaborer
          en temps réel, peu importe leur localisation.
        </p>

        <div className="md:w-1/2 bg-lime-400 text-green-900 p-10 text-justify">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Nos services informatiques sont réputés pour leur efficacité,
          </h1>
          <p className="text-lg md:text-xl font-semibold"></p>
        </div>

        {/* Colonne de droite (image) */}
        <div className="md:w-1/2">
          <Image
            src={OP} // Remplacer avec le chemin correct de votre image
            width={500}
            height={500}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
