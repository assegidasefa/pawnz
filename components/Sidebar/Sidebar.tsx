"use client";
import { HelpCircle } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "../ModeToggle";
import { useEffect } from "react";
import { Separator } from "../ui/separator";
import { VerticalThemeToggle } from "../ThemeToggle/VerticalThemeToggle";
import Image from "next/image";
import { OpenMenu } from "./OpenMenu";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
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
import UserCheckedIcon from "../icons/UserCheckedIcon";

export function AppSidebar() {
  const pathname = usePathname();
  // console.log(pathname, "pathname");
  const { state, setOpenMobile } = useSidebar();
    const router = useRouter();
  
  const menuItems: [React.ElementType, string, string][] = [
    [PlusCircleIcon, "Create Offer", "createoffer"],
    [MarketIcon, "Market", "market"],
    [FireIcon, "Listing", "listings"],
    [AuctionIcon, "Auctions", "auctions"],
    [OtcIcon, "OTC", "otc"],
    [DashboardIcon, "Dashboard", "dashboard"],
    [ActivityIcon, "Activity", "activity"],
    [SettingIcon, "Settings", "settings"],
    [UserCheckedIcon,"Admin","admin"]
  ];

  useEffect(() => {
    setOpenMobile(true);
  }, []);
  return (
    <Sidebar
      className="pb-12 z-[100] border-r-[1px] overflow-x-hidden no-scrollbar h-screen"
      collapsible="none"
    >
      <SidebarHeader className="flex flex-col items-center py-2 space-y-2 ">
        <Avatar className="w-9 h-9 cursor-pointer" onClick={()=>router.push('/market')}>
          <Image
            src="/pawnzLogo.svg"
            alt="company logo"
            width={36}
            height={36}
          />
        </Avatar>
      </SidebarHeader>

      <SidebarContent className="flex flex-col items-center no-scrollbar ">
        <SidebarMenu>
          {menuItems.map(([Icon, label, link], i) => {
            const isActive = pathname === `/${link}`; // or use startsWith for nested routes
            return (
              <SidebarMenuItem key={i} className="flex justify-center w-full">
                <SidebarMenuButton asChild className="w-full justify-center">
                  <a
                    href={`/${link}`}
                    className={cn(
                      "p-2 mx-1.5 gap-x-2 w-8 h-8 flex items-center rounded-md",
                      "text-muted-foreground hover:text-foreground hover:bg-muted",
                      isActive && "bg-accent text-foreground font-semibold"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          <div className="px-2 flex justify-center">
            <Separator className="w-full mx-4" />
          </div>
          <div className={` w-full justify-center`}>
            <SidebarMenuItem className="w-full flex justify-center">
              <SidebarMenuButton asChild className={` w-full justify-center`}>
                <button
                  className={` p-2 gap-x-2 w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-muted flex items-center `}
                >
                  <HelpCircle className="w-5 h-5 " />
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
        </SidebarMenu>
        <div className="px-2 flex justify-center">
          <Separator className="w-full mx-4" />
        </div>

        <div className="flex" />
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
            <VerticalThemeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex justify-center">
          <SidebarMenu>
            <SidebarMenuItem>
              {/* <Image src={telegramIcon} alt="" width={20} height={20} /> */}
              <div className="w-5 h-5 text-[#666]">
                <TelegramIcon />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
        <div className="flex justify-center">
          <SidebarMenu>
            <SidebarMenuItem>
              {/* <Image src={XIcon} alt="" width={20} height={20} /> */}
              <div className="w-5 h-5 text-[#666]">
                <XIcon />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarFooter className="flex justify-center py-4">
        {/* <SidebarTrigger /> */}
        <OpenMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
