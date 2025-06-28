import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AvatarFallback, Avatar } from "@/components/ui/avatar";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TokenCard from "../TokenCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import LendModalContent from "./LendModalContent";

// export function LendModal({ tokenData }: any) {
export function LendModal({ children }: any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        {children}
      </SheetTrigger>
      <SheetContent className="w-[100vw] md:min-w-[580px] overflow-y-auto ">
        <Card className="border-none py-[0.5px] px-0 md:p-4 gap-y-0">
          <SheetHeader className="py-0 m-0 pt-4 ">
            <SheetTitle>Lend</SheetTitle>
          </SheetHeader>
          <div className="bg-card  ">
            <div className="grid flex-1 auto-rows-min gap-6 ">
              <LendModalContent
                coinOptions={[
                  { symbol: "USDC", iconUrl: "/icons/usdc.svg" },
                  { symbol: "PONKE", iconUrl: "/icons/ponke.svg" },
                ]}
                initialCoin="USDC"
                initialOffer={1000000}
                data={{
                  borrowerName: "Ponke",
                  avatarUrl: "https://example.com/avatar.jpg",
                  askingAmount: 999000000,
                  collateralAmount: 1998000000,
                  priceChange: "0.14 USD +7.31%",
                  contractAddress: "5z3EqYdDe3XfRf9z1TNs8i1WduSWmrRC",
                  alreadyFundedPercentage: 10,
                  claimableCollateral: "222M PONKE = $31.08M",
                  timeLeft: "6hr 30min",
                  ltv: {
                    value: 40,
                    level: "High",
                    yield: "Yield",
                    estimatedYield: "3M USDC",
                    marginCall: 50,
                    liquidation: 30,
                  },
                }}
                onOfferChange={(amount, coin) =>
                  console.log(`Offer changed: ${amount} ${coin}`)
                }
              />
            </div>
            <SheetFooter className="bg-transparent border-green-500 p-0 md:p-4">
              <Button
                type="submit"
                className="w-full bg-[#BBEE4D] hover:bg-[#BBEE4D]/70 text-black font-semibold md:py-3 rounded-none md:rounded-lg m-0"
              >
                Fund this Loan
              </Button>
            </SheetFooter>
          </div>
        </Card>
      </SheetContent>
    </Sheet>
  );
}
