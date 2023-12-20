import { Button } from "../../../components/ui/button";
import { Transaction } from "./transaction";

export default function Home() {
  return (
    <div className="w-[50%] mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <Button className="bg-[#2c4e9d] text-white w-full font-light py-6">
          Start new transfer
        </Button>
      </div>
      <h1 className="text-2xl font-light">History</h1>

      <div className="flex flex-col gap-4">
        <Transaction />
        <Transaction />
      </div>
    </div>
  );
}
