"use client";

import { Bell, XIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "../../ModeToggle";
import { useEffect, useState } from "react";
import { Separator } from "../../ui/separator";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";
import { VerticalThemeToggle } from "../../ThemeToggle/VerticalThemeToggle";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import NotificationPanelContent from "./NotificationPanelContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MoreIcon from "@/components/icons/MoreIcon";
import { useRouter } from "next/navigation";
export function NotificationPanel() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Card className="h-[38px] px-[12px] py-0 flex flex-row items-center rounded-sm">
          <div className="relative">
            <Bell className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-[9px] h-[9px] bg-red-500 rounded-full"></div>
          </div>
        </Card>
      </SheetTrigger>
      <SheetContent side="right" className="w-full md:min-w-[500px]">
        <SheetHeader className=" py-4 px-4">
          {/* Header */}
          <div className="flex items-center justify-between w-[90vw] md:w-full">
            <SheetTitle className="text-lg font-medium">
              Notifications
            </SheetTitle>
            <div className="flex md:hidden items-center gap-2">
              <Card
                onClick={() => setOpen(false)}
                className="flex items-center justify-center border py-[10px] px-4 rounded-sm"
              >
                <XIcon height={16} width={16} />
              </Card>
            </div>
          </div>
        </SheetHeader>
        <Tabs defaultValue="all" className="w-[90vw] md:w-full px-6 py-0 ">
          <div className="flex justify-between items-center ">
            <TabsList className="flex w-[70vw] md:w-auto h-auto  md:gap-x-2 ">
              <TabsTrigger value="all" className="px-3 py-1.5 rounded-md">
                All
              </TabsTrigger>
              <TabsTrigger
                disabled
                value="loans"
                className="px-3 py-1.5 rounded-md border"
              >
                Loans
              </TabsTrigger>
              <TabsTrigger
                disabled
                value="offers"
                className="px-3 py-1.5 rounded-md"
              >
                Offers
              </TabsTrigger>
              <TabsTrigger
                disabled
                value="auctions"
                className="px-3 py-1.5 rounded-md"
              >
                Auctions
              </TabsTrigger>
            </TabsList>
            <div className="hidden md:flex">
              <Button
                onClick={() => {
                  router.push("/notifications"); // Navigate to full page
                  setOpen(false); // Close the drawer
                }}
                className="bg-white hover:bg-white/30 flex cursor-pointer border"
              >
                <MoreIcon />
                More
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            {/* <ListingBorrow /> */}
            <NotificationPanelContent />
          </TabsContent>
          <TabsContent value="loan" className="flex w-full">
            {/* <ListingLend /> */}
          </TabsContent>
          <TabsContent value="offer">{/* <ListingBorrow /> */}</TabsContent>
          <TabsContent value="auction" className="flex w-full">
            {/* <ListingLend /> */}
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
