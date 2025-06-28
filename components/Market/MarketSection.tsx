"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BorrowLendTabContent from "./BorrowLend/BorrowLendTabContent";
import Home from "../Home/Home";
import LendCollapsibleContent from "./BorrowLend/LendCollapsibleContent";
import { Button } from "@/components/ui/button";
import ExpandIcon from "../icons/ExpandIcon";
import { LendModal } from "./LendModal/LendModal";
import { BorrowModal } from "../CreateOffer/borrow/Modal/BorrowModal";
import { CircleDollarSignIcon, PlusCircleIcon } from "lucide-react";
import LendDebtAlert from "./LendDebtAlert";

const MarketSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("all");
  const [isLendBorrowExpanded, setisLendBorrowExpanded] = useState(false);

  // Sync tab with query param on mount
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "lend" || tab === "borrow" || tab === "all") {
      setActiveTab(tab);
    } else {
      setActiveTab("all");
    }
  }, [searchParams]);

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl);
    setisLendBorrowExpanded(false); // Reset expansion on tab switch
  };

  const handleExpand = () => setisLendBorrowExpanded(true);
  const handleCollapse = () => setisLendBorrowExpanded(false);

  const [isLendAlertOpen, setIsLendAlertOpen] = useState<boolean>(true);

  return (
    <div>
      <div className="flex w-screen md:w-full">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full px-6"
        >
          <div className="flex justify-between items-center">
            <TabsList className="my-4 h-auto space-x-1 md:space-x-2 px-0">
              <TabsTrigger
                value="all"
                className="px-2 md:px-3 py-1.5 rounded-md"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="borrow"
                className="px-2 md:px-3 py-1.5 rounded-md"
              >
                Borrow
              </TabsTrigger>
              <TabsTrigger
                value="lend"
                className="px-2 md:px-3 py-1.5 rounded-md"
              >
                Lend
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center space-x-1 md:space-x-2">
              {/* Shown on all screen sizes when activeTab is "all" */}
              {activeTab === "all" && (
                <>
                  <BorrowModal
                    children={
                      <Button
                        variant="default"
                        className="bg-[#BBEE4D] hover:bg-[#BBEE4D] text-black rounded-sm flex h-[30px]  justify-center"
                      >
                        <PlusCircleIcon />
                        Borrow
                      </Button>
                    }
                  />
                  <LendModal
                    children={
                      <Button className="bg-[#BBEE4D] hover:bg-[#BBEE4D] text-black rounded-sm flex h-[30px]  justify-center">
                        <CircleDollarSignIcon />
                        Lend
                      </Button>
                    }
                  />
                </>
              )}

              {/* Show Borrow button only on mobile when tab is "borrow" */}
              {activeTab === "borrow" && (
                <BorrowModal
                  children={
                    <Button className="bg-[#BBEE4D] hover:bg-[#BBEE4D] text-black rounded-lg flex md:hidden">
                      <PlusCircleIcon />
                      Borrow
                    </Button>
                  }
                />
              )}

              {/* Show Lend button only on mobile when tab is "lend" */}
              {activeTab === "lend" && (
                <LendModal
                  children={
                    <Button className="bg-[#BBEE4D] hover:bg-[#BBEE4D] text-black rounded-lg flex md:hidden">
                      <CircleDollarSignIcon />
                      Lend
                    </Button>
                  }
                />
              )}

              {/* Expand button on desktop only */}
              {(activeTab === "lend" || activeTab === "borrow") &&
                !isLendBorrowExpanded && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="hidden md:block mr-2 p-1"
                    onClick={handleExpand}
                  >
                    <ExpandIcon />
                  </Button>
                )}
            </div>
          </div>

          <TabsContent value="all">
            <Home />
          </TabsContent>

          <TabsContent value="lend" className="flex">
            <BorrowLendTabContent
              rightSideInfoCardTitle="Lend USDC."
              rightSideInfoCardSubtitle="Earn on memecoins."
              rightSideInfoCardDescription="Browse live listings backed by tokens. Choose how much to fund — you decide which offers to back."
              LoanAndListingTitle="Active Loans"
              type={"LEND"}
              isLendBorrowExpanded={isLendBorrowExpanded}
            />
          </TabsContent>

          <TabsContent value="borrow" className="flex">
            <BorrowLendTabContent
              rightSideInfoCardTitle="Borrow USDC."
              rightSideInfoCardSubtitle="Keep your tokens."
              rightSideInfoCardDescription="List your memecoins as collateral. Lenders will send real offers — you decide how much to accept."
              LoanAndListingTitle="Your Listings"
              type={"BORROW"}
              isLendBorrowExpanded={isLendBorrowExpanded}
            />
          </TabsContent>
        </Tabs>

        {isLendBorrowExpanded && (
          <div className="w-[60%] hidden xl:flex">
            <LendCollapsibleContent onCollapse={handleCollapse} />
          </div>
        )}
        {isLendAlertOpen && (
          <LendDebtAlert
            onClose={() => {
              setIsLendAlertOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MarketSection;
