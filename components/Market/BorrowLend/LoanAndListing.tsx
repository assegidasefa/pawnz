"use client";
import {  useEffect, useState } from "react";
import LoanCard from "../LoadCard";
import TableToolbar from "@/components/Shared/TableToolbar";
import LoanAndListingSkeleton from "./LoanAndListingSkeleton";
import debounce from "lodash.debounce";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProgressBar } from "@/components/ProgressBar";
import { Progress } from "@/components/ui/progress";
import FullscreenWrapper from "@/components/Shared/FullscreenWrapper";

const mockLoans = [
  {
    token: "Ponke",
    collateral: "345M 🪙",
    asking: "12.1K 💎",
    timeLeft: "6h 30m left",
    progress: 10,
    avatar: "/images/coins/ponk.png",
  },
  {
    token: "CheemsCoin",
    collateral: "200M 🪙",
    asking: "15.5K 💎",
    timeLeft: "1d 3h left",
    progress: 50,
    avatar: "/images/coins/cheemscoin.png",
  },
  {
    token: "Kishu Inu",
    collateral: "300M 🪙",
    asking: "10.2K 💎",
    timeLeft: "4h 45m left",
    progress: 75,
    avatar: "/images/coins/kishu.png",
  },
  {
    token: "ShibaToken",
    collateral: "400M 🪙",
    asking: "20.8K 💎",
    timeLeft: "2d 5h left",
    progress: 20,
    avatar: "/images/coins/shiba.png",
  },
  {
    token: "Order of Champ",
    collateral: "150M 🪙",
    asking: "9.7K 💎",
    timeLeft: "3h left",
    progress: 85,
    avatar: "/images/coins/mememaster.png",
  },
];

const LoanAndListing = ({ title }: any) => {
  const [loans, setLoans] = useState<typeof mockLoans | null>(null);
  const [loansLoading, setLoansLoading] = useState(false);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  useEffect(() => {
    setLoansLoading(true);
    // Simulate fetching loans
    setTimeout(() => {
      setLoans(mockLoans);
      setLoansLoading(false);
    }, 300);
    // Cleanup function to reset loans if component unmounts
    return () => {
      setLoans(null);
      setLoansLoading(false);
    };
  }, []);

  const handleLayoutChange = (newLayout: "grid" | "list") => {
    setLayout(newLayout);
  };

  const debouncedSearch = debounce((value: string) => {
    setLoansLoading(true);
    setTimeout(() => {
      if (value.trim() === "") {
        setLoans(mockLoans);
      } else {
        const filteredLoans = mockLoans.filter((loan) =>
          loan.token.toLowerCase().includes(value.toLowerCase())
        );
        setLoans(filteredLoans);
      }
      setLoansLoading(false);
    }, 300);
  }, 300);

  if (!loans) {
    return <LoanAndListingSkeleton />;
  }

  return (
    <div>
      {isFullscreen ? (
        <FullscreenWrapper
          open={isFullscreen}
          onOpenChange={() => setIsFullscreen((prev) => !prev)}
        >
          <div className="flex items-center justify-between my-3">
            <h2 className="text-xl font-semibold">{title}</h2>
            <TableToolbar
              showLayoutIcons={true}
              showSearch={true}
              showMaximize={true}
              showClose={false}
              onSearchChange={debouncedSearch}
              onLayoutChange={handleLayoutChange}
              onCloseClick={() => {}}
              onMaximizeClick={() => setIsFullscreen((prev) => !prev)}
            />
          </div>

          {loansLoading ? (
            layout === "grid" ? (
              <div className="flex overflow-x-auto md:grid grid-cols-4 gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="min-w-[180px] rounded-lg border p-4 space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-2 w-full rounded-full" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table className="min-w-full divide-y divide-gray-200">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-4 py-2 text-left">
                        Token
                      </TableHead>
                      <TableHead className="px-4 py-2 text-left">
                        Collateral
                      </TableHead>
                      <TableHead className="px-4 py-2 text-left">
                        Asking
                      </TableHead>
                      <TableHead className="px-4 py-2 text-left">
                        Time Left
                      </TableHead>
                      <TableHead className="px-4 py-2 text-left">
                        Progress
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...Array(5)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-4 w-24" />
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-2 w-24 rounded-full" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          ) : loans.length > 0 ? (
            layout === "grid" ? (
              <div className="flex overflow-x-auto md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {loans.map((loan, index) => (
                  <LoanCard
                    key={index}
                    token={loan.token}
                    collateral={loan.collateral}
                    asking={loan.asking}
                    timeLeft={loan.timeLeft}
                    progress={loan.progress}
                    avatar={loan.avatar}
                  />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-normal">COIN</TableHead>
                      <TableHead className="font-normal">COLLATERAL</TableHead>
                      <TableHead className="font-normal">ASKING FOR</TableHead>
                      <TableHead className="font-normal">FILL</TableHead>
                      <TableHead className="font-normal text-right">
                        TIME LEFT
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loans.map((item, idx) => (
                      <TableRow key={idx} className="border-none h-[41px]">
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6">
                              <img
                                src={item.avatar}
                                alt={item.token}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span>{item.token}</span>
                          </div>
                        </TableCell>
                        <TableCell>{item.collateral}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span>{item.asking}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="relative w-full border rounded-lg overflow-hidden">
                            <Progress
                              value={item.progress}
                              className="h-4"
                              indicatorClassName={"bg-[#D5FF40]"}
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-medium">
                              {item.progress}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {item.timeLeft}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500 mt-4">No loans available</p>
            </div>
          )}
        </FullscreenWrapper>
      ) : (
        <>
          <div className="flex items-center justify-between my-3">
            <h2 className="text-xl font-semibold">{title}</h2>
            <TableToolbar
              showLayoutIcons={true}
              showSearch={true}
              showMaximize={true}
              showClose={false}
              onSearchChange={debouncedSearch}
              onLayoutChange={handleLayoutChange}
              onCloseClick={() => {}}
              onMaximizeClick={() => setIsFullscreen((prev) => !prev)}
            />
          </div>

          {loansLoading ? (
            layout === "grid" ? (
              <div className="flex overflow-x-auto md:grid grid-cols-4 gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="min-w-[180px] rounded-lg border p-4 space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-2 w-full rounded-full" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table className="min-w-full divide-y divide-gray-200">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-4 py-2 text-left">
                        Token
                      </TableHead>
                      <TableHead className="px-4 py-2 text-left">
                        Collateral
                      </TableHead>
                      <TableHead className="px-4 py-2 text-left">
                        Asking
                      </TableHead>
                      <TableHead className="px-4 py-2 text-left">
                        Time Left
                      </TableHead>
                      <TableHead className="px-4 py-2 text-left">
                        Progress
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...Array(5)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-4 w-24" />
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          <Skeleton className="h-2 w-24 rounded-full" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          ) : loans.length > 0 ? (
            layout === "grid" ? (
              <div className="flex overflow-x-auto md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {loans.map((loan, index) => (
                  <LoanCard
                    key={index}
                    token={loan.token}
                    collateral={loan.collateral}
                    asking={loan.asking}
                    timeLeft={loan.timeLeft}
                    progress={loan.progress}
                    avatar={loan.avatar}
                  />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-normal">COIN</TableHead>
                      <TableHead className="font-normal">COLLATERAL</TableHead>
                      <TableHead className="font-normal">ASKING FOR</TableHead>
                      <TableHead className="font-normal">FILL</TableHead>
                      <TableHead className="font-normal text-right">
                        TIME LEFT
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loans.map((item, idx) => (
                      <TableRow key={idx} className="border-none h-[41px]">
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6">
                              <img
                                src={item.avatar}
                                alt={item.token}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span>{item.token}</span>
                          </div>
                        </TableCell>
                        <TableCell>{item.collateral}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span>{item.asking}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="relative w-full border rounded-lg overflow-hidden">
                            <Progress
                              value={item.progress}
                              className="h-4"
                              indicatorClassName={"bg-[#D5FF40]"}
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-medium">
                              {item.progress}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {item.timeLeft}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500 mt-4">No loans available</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LoanAndListing;
