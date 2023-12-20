import { CircleUser, DownloadIcon, MenuIcon, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/account/history');
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <Component />
    </main>
  );
}

export function Navbar() {
  return (
    <nav className="bg-[#212a32] px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={240} height={240} />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center font-light text-[14px]">
          <div className="flex h-[80px] items-center border-b border-b-[#212a32] hover:border-b hover:border-b-gray-300">
            <Link className="text-white hover:text-gray-300 " href="/send-money/start">
              Send new transfer
            </Link>
          </div>
          <div className="flex h-[80px] items-center border-b border-b-[#212a32] hover:border-b hover:border-b-gray-300">
            <Link className="text-white hover:text-gray-300" href="#">
              Track transfer
            </Link>
          </div>
          <div className="flex h-[80px] items-center border-b border-b-[#212a32] hover:border-b hover:border-b-gray-300">
            <Link className="text-white hover:text-gray-300" href="#">
              Find locations
            </Link>
          </div>
          <div className="flex h-[80px] items-center border-b border-b-[#212a32] hover:border-b hover:border-b-gray-300">
            <Link className="text-white hover:text-gray-300" href="#">
              Help
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white border-x border-[#efe2b5] px-3">
              <MenuIcon className="h-20 w-10 text-[#efe2b5]" strokeWidth={1} />
            </button>
            <div className="flex items-center space-x-2">
              <CircleUser
                className="h-10 w-10 text-[#efe2b5]"
                strokeWidth={1}
              />
            </div>
            <div>
              <div className="text-[#efe2b5] truncate">FRANCK DARY...</div>
              <Link className="text-white hover:text-gray-300" href="#">
                Log out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Component() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="mx-auto w-[50%]">
        <div className="flex justify-between items-center mb-6">
          <Button className="bg-[#2c4e9d] text-white w-full font-light py-6">
            Start new transfer
          </Button>
        </div>
        <h1 className="text-2xl font-bold">History</h1>
        <div className="grid grid-cols-1 gap-4">
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm text-gray-500">09/12/2023</div>
                    <CardTitle>Pascale Fotsing</CardTitle>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary">Incomplete</Badge>
                  <div className="text-2xl font-semibold mt-1">17.84 EUR</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <Button variant="ghost">Show details</Button>
                <div>
                  <Button className="mr-2" variant="outline">
                    Remove
                  </Button>
                  <Button>Continue to Payment</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm text-gray-500">28/11/2023</div>
                    <CardTitle>Khalil Bousnina</CardTitle>
                    <div className="text-sm">MTCN: 911 192 5075</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="default">Complete</Badge>
                  <div className="text-2xl font-semibold mt-1">267.00 EUR</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <Button variant="ghost">Hide details</Button>
                <Button variant="ghost">Edit & resend</Button>
              </div>
              <div className="border-t border-gray-300 my-4 py-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Payment</h3>
                    <div className="text-sm mb-1">
                      Credit/Debit card ending in X90264
                    </div>
                    <h3 className="font-semibold mb-2">Delivery</h3>
                    <div className="text-sm mb-1">
                      TransferWise ending in X3459
                    </div>
                    <div className="text-sm">
                      Money available: Generally same banking day
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Summary</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-sm">Transfer amount</div>
                      <div className="text-sm text-right">267.00 EUR</div>
                      <div className="text-sm">Transfer fee</div>
                      <div className="text-sm text-right">+ 1.90 EUR</div>
                      <div className="font-semibold">Total</div>
                      <div className="font-semibold text-right">268.90 EUR</div>
                      <div className="text-sm">Total to receiver</div>
                      <div className="text-sm text-right">267.00 EUR</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button className="flex items-center" variant="ghost">
                  <DownloadIcon className="mr-2" />
                  Download PDF{"\n                          "}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
