"use client";

import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";

import PayLoanIcon from "@/components/icons/PayLoanIcon";
import FullscreenWrapper from "@/components/Shared/FullscreenWrapper";
import TableToolbar from "@/components/Shared/TableToolbar";
import DashboardBorrowTable from "./DashboardBorrowTable";
import DashboardBorrowSkeleton from "./DashboardBorrowSkeleton";
import UserDetailSection from "../UserDetailSection";
import CustomRow from "./CustomRow";

import { BorrowToken, LoanCard } from "./types";
import { mockBorrowTokens, mockLoanCards } from "./mockBorrowData";

type LayoutType = "grid" | "list";

const DashboardBorrow = () => {
  const [loading, setLoading] = useState(true);
  const [tokens, setTokens] = useState<BorrowToken[]>([]);
  const [loanCards, setLoanCards] = useState<LoanCard[]>([]);
  const [filteredLoans, setFilteredLoans] = useState<LoanCard[]>([]);
  const [layout, setLayout] = useState<LayoutType>("grid");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const headers = ["COIN", "ACTIVITY", "ASK", "OFFER", "TIME"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTokens(mockBorrowTokens);
      setLoanCards(mockLoanCards);
      setFilteredLoans(mockLoanCards);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLayoutChange = (newLayout: LayoutType) => setLayout(newLayout);

  const handleSearch = useMemo(() => {
    return debounce((query: string) => {
      const trimmed = query.trim().toLowerCase();
      const filtered = trimmed
        ? loanCards.filter((loan) => loan.name.toLowerCase().includes(trimmed))
        : loanCards;

      setFilteredLoans(filtered);
    }, 300);
  }, [loanCards]);

  if (loading) return <DashboardBorrowSkeleton />;

  return (
    <div className="min-h-screen space-y-8">
      <UserDetailSection />

      {/* === My Loans Section === */}
      <section>
        {isFullscreen ? (
          <FullscreenWrapper
            open={isFullscreen}
            onOpenChange={() => setIsFullscreen(false)}
          >
            <LoanSection
              title="My Loans"
              layout={layout}
              isFullscreen
              onSearchChange={handleSearch}
              onLayoutChange={handleLayoutChange}
              toggleFullscreen={() => setIsFullscreen(false)}
              loans={filteredLoans}
            />
          </FullscreenWrapper>
        ) : (
          <LoanSection
            title="My Loans"
            layout={layout}
            onSearchChange={handleSearch}
            onLayoutChange={handleLayoutChange}
            toggleFullscreen={() => setIsFullscreen(true)}
            loans={filteredLoans}
          />
        )}
      </section>

      {/* === Listings Section === */}
      <section>
        <DashboardBorrowTable headers={headers} tokens={tokens} />
      </section>
    </div>
  );
};

export default DashboardBorrow;

// ---------------------
// Loan Section
// ---------------------

type LoanSectionProps = {
  title: string;
  layout: LayoutType;
  onSearchChange: (val: string) => void;
  onLayoutChange: (layout: LayoutType) => void;
  toggleFullscreen: () => void;
  loans: LoanCard[];
  isFullscreen?: boolean;
};

const LoanSection = ({
  title,
  layout,
  onSearchChange,
  onLayoutChange,
  toggleFullscreen,
  loans,
  isFullscreen = false,
}: LoanSectionProps) => (
  <div className=" w-[90vw] md:w-full px-2">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <TableToolbar
        layout={layout}
        showLayoutIcons
        showClose={false}
        onSearchChange={onSearchChange}
        onLayoutChange={onLayoutChange}
        onMaximizeClick={toggleFullscreen}
        onCloseClick={() => {}}
      />
    </div>

    {layout === "grid" ? (
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {loans.map((loan) => (
          <LoanCardItem key={loan.id} loan={loan} />
        ))}
      </div>
    ) : (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>BORROWER</TableHead>
              <TableHead className="text-center">FUNDED</TableHead>
              <TableHead className="text-center">COLLATERAL</TableHead>
              <TableHead className="text-center">PROGRESS</TableHead>
              <TableHead className="text-center">TIME LEFT</TableHead>
              <TableHead className="text-center">ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loans.map((loan) => (
              <LoanTableRow key={loan.id} loan={loan} />
            ))}
          </TableBody>
        </Table>
      </div>
    )}
  </div>
);

// ---------------------
// Grid Card Component
// ---------------------

const LoanCardItem = ({ loan }: { loan: LoanCard }) => (
  <Card className="!p-0">
    <CardContent className="p-4 space-y-2">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={loan.avatar} alt={loan.name} />
          <AvatarFallback>{loan.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 gap-y-3 space-y-2">
          <div className="font-medium">{loan.name}</div>
          <CustomRow
            label="Funded"
            value={loan.funded}
            image={loan.fundedImage}
          />
          <CustomRow
            label="Collateral"
            value={loan.collateral}
            image={loan.collateralImage}
          />
        </div>
      </div>

      <div className="relative w-full border rounded-md overflow-hidden">
        <Progress
          value={loan.progress}
          className="h-4"
          indicatorClassName="bg-[#D5FF40]"
        />
        <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-medium">
          {loan.progress}%
        </span>
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Time Left
        </span>
        <span>{loan.timeLeft}</span>
      </div>

      <Button className="w-full text-xs bg-[#D5FF40] md:bg-card border hover:bg-[#D5FF40] hover:text-black">
        <PayLoanIcon />
        Pay Loan
      </Button>
    </CardContent>
  </Card>
);

// ---------------------
// Table Row Component
// ---------------------

const LoanTableRow = ({ loan }: { loan: LoanCard }) => (
  <TableRow>
    <TableCell>
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={loan.avatar} />
          <AvatarFallback>{loan.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{loan.name}</span>
      </div>
    </TableCell>
    <TableCell className="text-center">
      <CustomRow label="" value={loan.funded} image={loan.fundedImage} />
    </TableCell>
    <TableCell className="text-center">
      <CustomRow
        label=""
        value={loan.collateral}
        image={loan.collateralImage}
      />
    </TableCell>
    <TableCell className="text-center w-[160px]">
      <div className="relative border rounded-md overflow-hidden">
        <Progress
          value={loan.progress}
          className="h-4"
          indicatorClassName="bg-[#D5FF40]"
        />
        <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-medium">
          {loan.progress}%
        </span>
      </div>
    </TableCell>
    <TableCell className="text-center text-xs text-muted-foreground">
      <div className="flex justify-center items-center gap-1">
        <Clock className="w-3 h-3" />
        {loan.timeLeft}
      </div>
    </TableCell>
    <TableCell className="text-center">
      <Button className="text-xs bg-card border hover:bg-[#D5FF40] hover:text-black">
        <div className="mr-1">
          <PayLoanIcon />
        </div>
        Pay Loan
      </Button>
    </TableCell>
  </TableRow>
);
