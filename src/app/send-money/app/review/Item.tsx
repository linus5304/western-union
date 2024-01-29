"use client";

import { CreditCard, Printer } from "lucide-react";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { useLocalStorage } from "usehooks-ts";
import { InfoTransactionType } from "../../../../lib/types";
import { formatDate } from "../../../../lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export function Component() {
  const [infoTransactionList] = useLocalStorage<InfoTransactionType[]>(
    "infoTransactionList",
    []
  );
  const date = new Date();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const queryTransactionId = params.get("transactionId");
  const transaction = infoTransactionList.find(
    trans => trans.id === queryTransactionId
  );

  return (
    <div>
      <div className="bg-white w-[800px] flex flex-col mx-auto my-8 p-4 text-gray-700">
        <div className="flex justify-between mb-6">
          <div className="text-2xl">Vérifier et confirmer</div>
          <div className="text-[#378abb] flex items-center gap-2">
            <Printer className="stroke-[#378abb]" size={30} />
            <div>IMPRIMER</div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div>Il ne s'agit pas d'un reçu.</div>
          <div>{formatDate(date)}</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <div className="border-b border-gray-700 text-sm font-semibold mb-2">
                OBJET DE LA TRANSACTION
              </div>
              <div className="flex justify-between">
                <div className="text-sm">{transaction?.beneficiare?.motif}</div>
                <div className="text-[#378abb] text-sm">ÉDITER</div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="border-b border-gray-700 text-sm font-semibold mb-2">
                SOURCE DES FONDS
              </div>
              <div className="flex justify-between">
                <div className="text-sm">
                  {transaction?.beneficiare?.originFond}
                </div>
                <div className="text-[#378abb] text-sm">ÉDITER</div>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <div className="border-b border-gray-700 text-sm font-semibold mb-2">
                DÉTAILS D'ENVOI
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <Image
                    src="/cmr_flag.svg"
                    height={30}
                    width={40}
                    alt="CMR flag"
                  />
                  <div>
                    {transaction?.beneficiare?.prenom}{" "}
                    {transaction?.beneficiare?.nomFamille}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="grid grid-cols-8">
                    <div className="h-8 w-8 shrink-0 rounded-full border border-gray-400 flex items-center flex-1">
                      <CreditCard className="mx-auto" />
                    </div>
                    <div className="text-[16px] col-span-7">
                      Carte de crédit/débit 3 CARTE MASTERCARD{" "}
                      <span className="text-sm">
                        se terminant en{" "}
                        {transaction?.paymentCard?.numeroDeCarte.slice(15, 19)}
                      </span>
                    </div>
                  </div>
                  <div className="text-[#378abb] text-sm">ÉDITER</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="border-b border-gray-700 text-sm font-semibold mb-2">
                RECEVOIR LES DÉTAILS
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <Image
                    src="/cmr_flag.svg"
                    height={30}
                    width={40}
                    alt="CMR flag"
                  />
                  <div>
                    {transaction?.beneficiare?.prenom}{" "}
                    {transaction?.beneficiare?.nomFamille}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="grid grid-cols-8 gap-2">
                    <div className="h-8 w-8 shrink-0 rounded-full border border-gray-400 flex items-center flex-1">
                      <CreditCard className="mx-auto" />
                    </div>
                    <div className="text-[16px] col-span-7">
                      Portefeuille mobile® <span className="text-sm"></span>
                      <div className="text-[14px]">
                        Numéro de téléphone portable du portefeuille:
                      </div>
                      <div className="text-[14px]">
                        + 237 {transaction?.beneficiare?.telephone}
                      </div>
                      <div className="text-[14px]">
                        Fournisseur de services de portefeuille : Orange
                      </div>
                    </div>
                  </div>
                  <div className="text-[#378abb] text-sm">ÉDITER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col w-full gap-4">
              <div>
                <div className="border-b border-gray-700 underline-offset-4 text-sm font-semibold mb-2">
                  LIEU DE PAIEMENT
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">Cameroun</div>
                </div>
              </div>
              <div>
                <div className="border-b border-gray-700 underline-offset-4 text-sm font-semibold mb-2">
                  DÉLAI DE LIVRAISON<sup>1</sup>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">En quelques minutes</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="border-b border-gray-700 text-sm font-semibold mb-2 flex justify-between">
                <div>RÉSUMÉ</div>
                <div className="text-[14px] font-normal text-[#378abb]">
                  ÉDITER
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[14px]">
                  <div>Montant du transfert</div>
                  <div>{transaction?.montantTransfer.toFixed(2)} EUR</div>
                </div>
                <div className="flex justify-between text-[14px]">
                  <div>
                    Frais de transfert<sup>2</sup>
                  </div>
                  <div>+ 1.90 EUR</div>
                </div>
                <div className="flex justify-between text-[14px] border-b border-double">
                  <div>Total</div>
                  <div>
                    {(Number(transaction?.montantTransfer) + 1.9)?.toFixed(2)}{" "}
                    EUR
                  </div>
                </div>
                <div className="flex justify-between text-[14px]">
                  <div>Total jusqu'au récepteur</div>
                  <div>
                    {Number(transaction?.montantTransfer)?.toFixed(2)} EUR
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[14px] flex flex-col gap-4 border-b pb-4 border-gray-400">
            <div>
              Pour tous les transferts, le destinataire peut recevoir moins en
              raison des taxes étrangères.
            </div>
            <div>
              <span className="font-bold">Important :</span> Western Union
              s'appuie sur les informations que vous nous fournissez pour
              envoyer de l'argent. Veuillez vérifier l'exactitude de tous les
              détails de la transaction avant de poursuivre votre transaction.
            </div>
          </div>
          <div className="flex gap-2 items-start text-[14px]">
            <input type="checkbox" />
            <div>
              J'accepte les{" "}
              <span className="text-[#378abb]">
                conditions d'utilisation et
              </span>{" "}
              la{" "}
              <span className="text-[#378abb]">
                déclaration de confidentialité en ligne de{" "}
              </span>
              Western Union. Je confirme que je n'envoie pas cette transaction
              au nom d'une autre personne.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            size="lg"
            className="bg-[#378abb] hover:bg-[#378abb] cursor-pointer"
          >
            Accepter
          </Button>
          <Button variant="ghost" size="lg">
            Annuler et revenir à l'historique
          </Button>
        </div>
      </div>

      <div className="border-b w-[800px] flex mx-auto border-gray-400"></div>
      <div className="text-[10px] w-[800px] flex flex-col mx-auto py-4 gap-2">
        <div>
          <sup>1</sup>
          Le service et les fonds peuvent être retardés ou indisponibles en
          fonction de certains facteurs, notamment le service sélectionné, la
          sélection des options de livraison différée, le montant envoyé, le
          pays de destination, la disponibilité des devises, les questions
          réglementaires, les questions de protection des consommateurs, les
          exigences d'identification, les restrictions de livraison, les heures
          d'ouverture des agences et les différences de fuseaux horaires
          (collectivement, les « restrictions »). Des restrictions
          supplémentaires peuvent s'appliquer; Consultez nos conditions
          générales pour plus de détails.
        </div>
        <div>
          <sup>2</sup>
          Western Union gagne également de l'argent grâce au change de devises.
          Lorsque vous choisissez un émetteur de fonds, comparez soigneusement
          les frais de transfert et les taux de change. Les frais, les taux de
          change et les taxes peuvent varier selon la marque, le canal et
          l'emplacement en fonction d'un certain nombre de facteurs. Les frais
          et les taux peuvent être modifiés sans préavis.
        </div>
        <div>
          <sup>3</sup>
          Si vous utilisez une carte de crédit, des frais d'avance de fonds de
          l'émetteur de la carte et des frais d'intérêt connexes peuvent
          s'appliquer. Pour éviter ces frais ou pour obtenir des frais réduits,
          utilisez une carte de débit ou vérifiez d'autres modes de paiement.
        </div>
      </div>
    </div>
  );
}
