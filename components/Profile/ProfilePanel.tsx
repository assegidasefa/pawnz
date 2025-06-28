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
  Globe,
  XSquareIcon,
  XIcon,
  Sun,
  Moon,
  Bell,
  ChevronDown,
  Share,
} from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../ModeToggle";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { VerticalThemeToggle } from "../ThemeToggle/VerticalThemeToggle";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import ProfileModal from "./ProfileModal";
import { CoinsDropdown } from "../TopNavigation/CoinsDropdown";
export function ProfilePanel() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Card className="flex flex-row py-0 items-center px-2 h-[38px] gap-x-2 rounded-sm">
          <span className="text-sm ">2XFX+2</span>
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </Card>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[100%] md:w-[500px] h-screen md:h-auto"
      >
        <SheetHeader className="flex flex-row justify-between w-[100vw] md:w-auto">
          <SheetTitle>Profile</SheetTitle>
          <div className="flex md:hidden gap-x-2 items-center">
            <Card className="flex items-center justify-center border py-[6px] px-2 rounded-sm">
              <CoinsDropdown />
            </Card>
            <Card
              onClick={() => setOpen(false)}
              className="flex items-center justify-center border py-[10px] px-4 rounded-sm"
            >
              <XIcon height={16} width={16} className="cursor-pointer" />
            </Card>
          </div>
        </SheetHeader>
        <ProfileModal />
        <SheetFooter className="w-screen md:w-auto mb-6 md:mb-0">
          {/* Bottom Actions */}
          <div className="space-y-3 mt-auto">
            <Button variant="outline" className="w-full bg-transparent ">
              <Share className="w-4 h-4 mr-2" />
              Share Referral
            </Button>

            <Button className="w-full bg-[#D5FF40] hover:bg-[#D5FF40] text-black font-medium">
              My Dashboard
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
