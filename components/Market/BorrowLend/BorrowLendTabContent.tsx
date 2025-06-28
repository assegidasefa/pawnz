// components/lend/BorrowLendTabContent.tsx
"use client";
import PortfolioSection from "./PortfolioSection";
import RightSideInfoCard from "./RightSideInforCard";
import MarketTable from "../MarketTable";
import LoanAndListing from "./LoanAndListing";
import { useEffect, useState } from "react";
import BorrowLendTabContentSkeleton from "./BorrowLendTabContentSkeleton";
import LendCollapsibleContent from "./LendCollapsibleContent";

const BorrowLendTabContent = ({
  rightSideInfoCardTitle,
  rightSideInfoCardSubtitle,
  rightSideInfoCardDescription,
  LoanAndListingTitle,
  type,
  isLendBorrowExpanded = false,
}: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    <BorrowLendTabContentSkeleton />;
  }
  return (
    <div className="space-y-6 w-full">
      <div className="flex gap-x-3 w-full">
        <PortfolioSection
          isLendBorrowExpanded={isLendBorrowExpanded}
          type={type}
        />
        <div className="hidden md:flex">
          <RightSideInfoCard
            title={rightSideInfoCardTitle}
            subtitle={rightSideInfoCardSubtitle}
            buttonLabel="Create Listing"
            description={rightSideInfoCardDescription}
            type={type}
          />
        </div>
      </div>
      <LoanAndListing title={LoanAndListingTitle} />
      {/* <OfferModal tokenData={tokenMock} /> */}
      <hr className="flex md:hidden" />
      <MarketTable />
      <hr className="flex md:hidden" />
      <div className="flex md:hidden">
        <LendCollapsibleContent />
      </div>
    </div>
  );
};

export default BorrowLendTabContent;
