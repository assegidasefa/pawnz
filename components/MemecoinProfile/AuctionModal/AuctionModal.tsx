import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import AuctionModalContent from "./AuctionModalContent";
import RecentAuctionsTable from "./RecentAuctionsTable";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
export function AuctionModal({ children }: any) {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        {children}
      </SheetTrigger>
      <SheetContent className="min-w-[100vw] md:min-w-[580px] overflow-y-auto  ">
        <Card className="border-none px-6 md:p-4 m-0">
          <SheetHeader className="py-0 m-0">
            <SheetTitle>Auction</SheetTitle>
          </SheetHeader>
          <Card className="rounded-xl">
            <div className="grid flex-1 auto-rows-min gap-6">
              <AuctionModalContent />
            </div>
          </Card>
          <div>
            <div className="flex w-full justify-between items-center ">
              <div className="flex items-center gap-x-2">
                <div>Recent Auctions</div>
                {/* <Card className="px-1 py-0.5 rounded-sm">20</Card> */}
                <Badge variant={"outline"}>20</Badge>
              </div>
              <Badge
                variant={"outline"}
                onClick={() => {
                  router.push("/dashboard");
                }}
                className="cursor-pointer"
              >
                My Dashboard
              </Badge>
            </div>
            <div className="relative">
              <RecentAuctionsTable />
            </div>
          </div>
        </Card>
      </SheetContent>
    </Sheet>
  );
}
