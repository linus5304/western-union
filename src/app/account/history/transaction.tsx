"use client";

import { DownloadIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";
import Image from "next/image";
import { useState } from "react";

export type TransactionStatus =
  | "incomplete"
  | "complete"
  | "cancelled"
  | "refunded";

{
  /* <div className="text-sm text-gray-400">
MTCN: 911 192 5075{" "}
<span className="text-[#368abb] cursor-pointer">Track</span>
</div> */
}

export function Transaction() {
  const [status, setStatus] = useState<TransactionStatus>("complete");
  const [isHidden, setIsHidden] = useState<Boolean>(false);

  const toggle = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div className="grid grid-cols-1">
      <div className="w-full border p-3 bg-white shadow-lg">
        <div className="border-b border-dashed my-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar>
                  <AvatarImage src="" alt="@shadcn" />
                  <AvatarFallback className="text-white bg-[#cbcbcb] text-xl">
                    PF
                  </AvatarFallback>
                </Avatar>
                <Image
                  src="/cmr-flag-round.svg"
                  alt="cmr"
                  height={15}
                  width={15}
                  className="absolute rounded-none top-6 left-6"
                />
              </div>
              <div>
                <div className="text-[13px] text-gray-500">09/12/2023</div>
                <div className="text-xl text-gray-400">Pascale Fotsing</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-red-700">Incomplete</div>
              <div className="text-2xl font-light mt-1">
                17.84{" "}
                <span className="text-sm font-normal text-gray-400">EUR</span>
              </div>
            </div>
          </div>
        </div>
        {status === "incomplete" && (
          <div className="flex justify-between items-center">
            <div className="text-[#2c4e9d] font-light text-sm" onClick={toggle}>
              Show details
            </div>
            <div>
              <Button
                className="mr-2 font-semibold border-[#2c4e9d] text-[#2c4e9d]"
                variant="outline"
                size="sm"
              >
                Remove
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="font-semibold border-[#2c4e9d] text-[#2c4e9d]"
              >
                Continue to Payment
              </Button>
            </div>
          </div>
        )}
        {status !== "incomplete" && (
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              MTCN: 911 192 5075{" "}
              <span className="text-[#368abb] cursor-pointer">Track</span>
            </div>
            <div className="flex divide-x-2 items-center">
              <div
                className="text-[#2c4e9d] font-normal text-[12px] pr-10 cursor-pointer"
                onClick={toggle}
              >
                Show details
              </div>
              <div className="text-[#2c4e9d] font-normal text-[12px] pl-10">
                Edit & resend
              </div>
            </div>
          </div>
        )}
      </div>
      {isHidden && <PaymentSummary />}
    </div>
  );
}

function PaymentSummary() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 px-6 w-[90%] mx-auto py-10 bg-[#f3faff]">
        <div>
          <h3 className="font-normal mb-2 border-b">Payment</h3>
          <div className="text-[13px] mb-2">
            Credit/Debit card ending in X90264
          </div>
          <h3 className="font-normal mb-2 border-b">Delivery</h3>
          <div className="text-[13px] mb-1">TransferWise ending in X3459</div>
          <div className="text-[13px]">
            Money available: Generally same banking day
          </div>
        </div>
        <div>
          <h3 className="font-normal mb-2 border-b">Summary</h3>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="text-[13px]">Transfer amount</div>
              <div className="text-[13px] text-right">267.00 EUR</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[13px]">Transfer fee</div>
              <div className="text-[13px] text-right">+ 1.90 EUR</div>
            </div>
            <div className="flex justify-between bg-gray-200 p-1">
              <div className="text-[13px]">Total</div>
              <div className="text-[13px] text-right">268.90 EUR</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[13px]">Total to receiver</div>
              <div className="text-[13px] text-right">267.00 EUR</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto bg-white">
        <div className="">
          <DownloadIcon size={40} className="mx-auto" />
          <Button variant="ghost" className="w-fit">
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
