"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";
import BorrowModalContent from "./BorrowModalContent";
export function BorrowModal({ children }: any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="h-[38px] py-0 flex flex-row items-center">
          {children}
        </div>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="min-w-[100vw] md:min-w-[580px]  p-0 overflow-auto"
      >
        <div className="bg-card px-0 gap-y-4">
          <SheetHeader className="flex flex-col space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg font-medium py-1 px-2 rounded-sm m-0 border ">
                Borrow
              </SheetTitle>
            </div>
          </SheetHeader>
          <div className="p-0 ">
            <BorrowModalContent
              coinOptions={[
                { symbol: "USDC", iconUrl: "/icons/usdc.svg" },
                { symbol: "PONKE", iconUrl: "/icons/ponke.svg" },
                { symbol: "BTC", iconUrl: "/icons/btc.svg" },
              ]}
              borrowerData={{
                name: "Ponke",
                avatarUrl: "https://example.com/avatar.jpg",
                askingAmount: 100_000,
                collateralAmount: 2_333_300_000,
                priceChange: "0.14 USD +7.31%",
                contractAddress: "5z3EqYdDe3XfRf9z1TNs8i1WduSWmrRC",
              }}
              onCreateOffer={(data) => {
                console.log("Submitting offer:", data);
                // Call your API here
              }}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
