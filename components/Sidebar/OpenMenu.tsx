"use client";

import {
  Plus,
  BarChart3,
  Clock,
  Zap,
  List,
  Wallet,
  Settings,
  HelpCircle,
  AlignJustify,
  X,
  PlusCircle,
  BarChart,
  FlameIcon,
  HammerIcon,
  ArrowLeftRight, // 👈 NEW ICON
} from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { VerticalThemeToggle } from "../ThemeToggle/VerticalThemeToggle";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import PlusCircleIcon from "../icons/PlusCircleIcon";
import MarketIcon from "../icons/MarketIcon";
import FireIcon from "../icons/FireIcon";
import AuctionIcon from "../icons/AuctionIcon";
import OtcIcon from "../icons/OtcIcon";
import DashboardIcon from "../icons/DashboardIcon";
import ActivityIcon from "../icons/ActivityIcon";
import SettingIcon from "../icons/SettingIcon";
import TelegramIcon from "../icons/TelegramIcon";
import XIcon from "../icons/XIcon";
import { HorizontalThemeToggle } from "../ThemeToggle/HorizontalThemeToggle";
import ExpandIcon from "../icons/ExpandIcon";
import { Card } from "../ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export function OpenMenu() {
  const [open, setOpen] = useState(false);
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  const menuItems: [React.ElementType, string, string][] = [
    [PlusCircleIcon, "Create Offer", "createoffer"],
    [MarketIcon, "Market", "market"],
    [FireIcon, "Listing", "listings"],
    [AuctionIcon, "Auctions", "auctions"],
    [OtcIcon, "OTC Swap", "otc"],
    [DashboardIcon, "Dashboard", "dashboard"],
    [ActivityIcon, "Activity", "activity"],
    [SettingIcon, "Settings", "settings"],
  ];

  useEffect(() => {
    setOpenMobile(true);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="p-2">
          <AlignJustify className="hidden md:flex w-5 h-5" />
          <div className="flex md:hidden w-[100px] h-9 px-4 items-center">
            <Avatar className="w-[100px] h-9">
              <Image
                src="/pawnzLogo.svg"
                alt="company logo"
                width={36}
                height={36}
              />
            </Avatar>
          </div>
        </Button>
      </SheetTrigger>

      <div className="hidden">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
      </div>

      <SheetContent side="left" className="w-[100vw] md:w-[200px]">
        <Sidebar
          className="pb-12 z-[100] border-r-[1px] overflow-x-hidden pl-2"
          collapsible="none"
        >
          <SidebarHeader className="flex flex-row justify-between items-center py-2 space-y-2">
            <Avatar className="w-[138px] h-9">
              <Image
                src="/pawnzFullLogo.svg"
                alt="company logo"
                width={138}
                height={36}
              />
            </Avatar>
            <div className="flex gap-x-4 items-center md:hidden">
              <HorizontalThemeToggle />
              <Card
                className="rounded-sm p-1.5 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <div className="w-6 h-6">
                  <ExpandIcon />
                </div>
              </Card>
            </div>
          </SidebarHeader>

          <SidebarContent className="flex flex-col items-center gap-y-2 md:gap-y-0">
            <SidebarMenu>
              {menuItems.map(([Icon, label, link], i) => {
                const isActive = pathname === `/${link}`;
                return(

                <SidebarMenuItem
                  key={i}
                  className={`flex justify-center ${
                    i === 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  <SidebarMenuButton asChild className="w-full justify-start">
                    <a
                      href={link}
                      className={cn(
                      "p-2 mx-1.5 gap-x-2 w-8 h-8 flex items-center rounded-md",
                      "text-muted-foreground hover:text-foreground hover:bg-muted",
                      isActive && "bg-accent text-foreground font-semibold"
                    )}
                    >
                      <Icon className="w-5 h-5" />
                      <div>{label}</div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                )
              })}

              <div className="px-2 hidden md:flex justify-center">
                <Separator className="w-full mx-4" />
              </div>

              <SidebarMenuItem className="w-full flex justify-center  px-1.5">
                <SidebarMenuButton asChild className="w-full">
                  <button className="p-2 gap-x-2 w-full text-muted-foreground hover:text-foreground hover:bg-muted flex items-center">
                    <HelpCircle className="w-5 h-5" />
                    <div>Support</div>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <SidebarMenu>
              <div className="px-2 hidden md:flex justify-center py-2">
                <Separator className="w-full mx-4" />
              </div>
              <SidebarMenuItem className="hidden md:flex pl-2">
                <VerticalThemeToggle />
              </SidebarMenuItem>
            </SidebarMenu>

            <div className="hidden md:flex w-full pl-4 items-center py-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <div className="w-5 h-5 text-[#666] flex items-center">
                    <TelegramIcon />
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            <div className="hidden md:flex  w-full pl-4 py-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <div className="w-5 h-5 text-[#666]">
                    <XIcon />
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            <SidebarMenu className="flex md:hidden">
              <a href={"/createoffer"}>
                <Button className="flex w-[98%] rounded-sm bg-[#D5FF40] hover:bg-[#D5FF40] text-black font-medium">
                  <PlusCircleIcon />
                  Create Listing
                </Button>
              </a>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SheetContent>
    </Sheet>
  );
}
