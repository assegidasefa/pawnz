import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

interface SkeletonTableProps {
  layout: "list" | "grid";
}

const SkeletonTable: React.FC<SkeletonTableProps> = ({ layout }) => {
  if (layout === "list") {
    return (
      <div className="flex flex-col gap-2">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 gap-4 items-center p-2 border rounded"
          >
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded" />
              <Skeleton className="w-24 h-4" />
            </div>
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-8 w-24" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {[...Array(8)].map((_, idx) => (
        <Card key={idx} className="!p-0 overflow-hidden border rounded-md">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded" />
              <Skeleton className="w-24 h-4" />
            </div>
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-1/2 ml-auto" />
            <Skeleton className="h-8 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkeletonTable;
