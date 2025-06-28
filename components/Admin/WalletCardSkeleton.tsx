import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const WalletCardSkeleton = () => {
  return (
    <div>
      <div className="flex justify-between py-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-[114px] rounded-[8px]" />
      </div>

      <Card className="bg-transparent space-y-3 p-3 w-full rounded-[8px]">
        {/* Top Row */}
        <div className="flex justify-between gap-2">
          <Skeleton className="h-[35px] w-[137px] rounded-[8px]" />
          <div className="flex items-center gap-[-8px]">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-6 h-6 rounded-full -ml-2" />
            ))}
            <Skeleton className="w-6 h-6 rounded-full -ml-2" />
          </div>
        </div>

        {/* Net Worth */}
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-8 w-40" />
        </div>

        {/* Wallet Address */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      </Card>
    </div>
  );
};

export default WalletCardSkeleton;
