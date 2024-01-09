import { Printer } from "lucide-react";

export default function page() {
  return (
    <div className="bg-white w-[800px] flex flex-col mx-auto my-8 p-4">
      <div className="flex justify-between mb-6">
        <div className="text-2xl">Vérifier et confirmer</div>
        <div className="text-[#378abb] flex items-center gap-2">
          <Printer className="stroke-[#378abb]" size={30}/>
          <div>IMPRIMER</div>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <div>Il ne s'agit pas d'un reçu.</div>
        <div>04.01.2024</div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col w-full">
          <div className="underline underline-offset-4 text-sm font-semibold mb-2">
            OBJET DE LA TRANSACTION
          </div>
          <div className="flex justify-between">
            <div className="text-sm">Soutien à la famille/frais de subsistance</div>
            <div className="text-[#378abb] text-sm">ÉDITER</div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="underline underline-offset-4 text-sm font-semibold mb-2">
          SOURCE DES FONDS
          </div>
          <div className="flex justify-between">
            <div className="text-sm">Salaire/Revenu</div>
            <div className="text-[#378abb] text-sm">ÉDITER</div>
          </div>
        </div>
      </div>
    </div>
  );
}
