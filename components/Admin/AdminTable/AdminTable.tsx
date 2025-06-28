"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import FullTable from "./FullTable";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CoinsDropdown } from "@/components/TopNavigation/CoinsDropdown";
import { AddMemecoinDialog } from "../AddMemeCoinDialog";
import TableToolbar from "@/components/Shared/TableToolbar";
import debounce from "lodash.debounce";
import { useIsMobile } from "@/hooks/use-mobile";
import SkeletonTable from "./SkeletonTable";
export type MarketItem = {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change: string;
  address: string;
  isActive: boolean;
};

const generateMockData = (): MarketItem[] =>
  Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Ponke ${i + 1}`,
    symbol: `https://api.dicebear.com/7.x/identicon/svg?seed=${i}`,
    price: `${(Math.random() * 2).toFixed(2)} USD`,
    change: `${(Math.random() * 10 - 5).toFixed(2)}%`,
    address: "5z3EqY4567886545678987SWmrRC",
    isActive: Math.random() > 0.5,
  }));

const AdminTable = () => {
  const [marketData, setMarketData] = useState<MarketItem[]>([]);
  const [leftSearchTerm, setLeftSearchTerm] = useState("");
  const [rightSearchTerm, setRightSearchTerm] = useState("");
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [rightSideLayout, setRightSideLayout] = useState<"grid" | "list">(
    "list"
  );
  const [showMemecoinModal, setShowMemecoinModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);
      const data = generateMockData();
      setMarketData(data);
      setLoading(false);
    };
    fetchMarketData();
  }, []);

  const handleToggleStatus = (id: number) => {
    setMarketData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const debouncedLeftSearch = useMemo(
    () => debounce((term: string) => setLeftSearchTerm(term), 300),
    []
  );
  const debouncedRightSearch = useMemo(
    () => debounce((term: string) => setRightSearchTerm(term), 300),
    []
  );

  const leftFilteredData = useMemo(() => {
    const lower = leftSearchTerm.toLowerCase().trim();
    return lower === ""
      ? marketData
      : marketData.filter((item) => item.name.toLowerCase().includes(lower));
  }, [marketData, leftSearchTerm]);

  const rightFilteredData = useMemo(() => {
    const lower = rightSearchTerm.toLowerCase().trim();
    return lower === ""
      ? marketData
      : marketData.filter((item) => item.name.toLowerCase().includes(lower));
  }, [marketData, rightSearchTerm]);

  return (
    <div className="flex flex-col lg:flex-row gap-2 overflow-hidden">
      {showMemecoinModal && (
        <AddMemecoinDialog
          open={showMemecoinModal}
          onOpenChange={setShowMemecoinModal}
        />
      )}

      {/* Full List Section */}
      <div className="w-[90vw] lg:w-1/2 ">
        <div className="w-full overflow-auto no-scrollbar">
          <Tabs defaultValue="memecoinLst">
            <div className="flex items-center justify-between p-4 gap-2 flex-wrap">
              {/* Left: Tabs, Button, Dropdown */}
              <div className="flex gap-x-2 items-center flex-wrap">
                <TabsList className="flex gap-2">
                  <TabsTrigger value="memecoinLst">Memecoin List</TabsTrigger>
                </TabsList>

                <Button
                  onClick={() => setShowMemecoinModal(true)}
                  className="bg-[#BBEE4D] hover:bg-[#BBEE4D]/70 h-auto py-1.5 px-2 text-black"
                >
                  <PlusCircle className="mr-1 w-4 h-4" />
                  {isMobile ? "" : "Add Memecoin"}
                </Button>

                <Card className="flex items-center justify-center border py-1 px-2 rounded-lg">
                  <CoinsDropdown autoHeight />
                </Card>
              </div>

              {/* Right: Search & Layout */}
              <div className="ml-auto">
                <TableToolbar
                  showLayoutIcons
                  showSearch
                  layout={layout}
                  onLayoutChange={setLayout}
                  onSearchChange={debouncedLeftSearch}
                  showClose={false}
                  showMaximize={false}
                />
              </div>
            </div>

            <TabsContent value="memecoinLst" className="px-0 gap-x-0">
              {loading ? (
                <SkeletonTable layout={layout} />
              ) : (
                <FullTable
                  data={leftFilteredData}
                  onToggleStatus={handleToggleStatus}
                  layout={layout}
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Active/Inactive Filters */}
      <div className="w-[90vw]  lg:w-1/2 border-l-[1px] px-2 overflow-x-auto">
        <div className="w-full overflow-auto no-scrollbar">
          <Tabs defaultValue="active">
            <div className="flex items-center justify-between p-4 gap-2 flex-wrap">
              {/* Left: Tabs + Dropdown */}
              <div className="flex gap-x-2 items-center flex-wrap">
                <TabsList className="flex gap-2">
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive</TabsTrigger>
                </TabsList>

                <Card className="flex items-center justify-center border py-1 px-2 rounded-lg">
                  <CoinsDropdown autoHeight />
                </Card>
              </div>

              {/* Right: Toolbar — pushed to end when wrapped */}
              <div className="ml-auto">
                <TableToolbar
                  showLayoutIcons
                  showSearch
                  showClose={false}
                  showMaximize={false}
                  layout={rightSideLayout}
                  onLayoutChange={setRightSideLayout}
                  onSearchChange={debouncedRightSearch}
                />
              </div>
            </div>

            <TabsContent value="active">
              {loading ? (
                <SkeletonTable layout={rightSideLayout} />
              ) : (
                <FullTable
                  data={rightFilteredData.filter((item) => item.isActive)}
                  filter="active"
                  onToggleStatus={handleToggleStatus}
                  layout={rightSideLayout}
                />
              )}
            </TabsContent>
            <TabsContent value="inactive">
              {loading ? (
                <SkeletonTable layout={rightSideLayout} />
              ) : (
                <FullTable
                  data={rightFilteredData.filter((item) => !item.isActive)}
                  filter="inactive"
                  onToggleStatus={handleToggleStatus}
                  layout={rightSideLayout}
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
