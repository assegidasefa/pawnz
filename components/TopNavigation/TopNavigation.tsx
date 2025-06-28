"use client";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { CoinsDropdown } from "./CoinsDropdown";
import { SearchDialog } from "./SearchDialog";
import { ProfilePanel } from "../Profile/ProfilePanel";
import { NotificationPanel } from "../Notification/NotificationPanel/NotificationPanel";
import Image from "next/image";
import { OpenMenu } from "../Sidebar/OpenMenu";
import UserCheckedIcon from "../icons/UserCheckedIcon";
export const TopNavigation = () => {
  return (
    <Card className="w-screen md:w-full rounded-none h-17 p-0">
      <header className="w-full  px-4 py-3">
        <div className="flex items-center justify-between md:max-w-7xl mx-auto w-full h-full">
          {/* Logo for Mobile Only */}
          <div className="md:hidden">
            {/* <Avatar className="w-[100px] h-9">
              <Image
                src="/pawnzFullLogo.svg"
                alt="company logo"
                width={100}
                height={36}
              />
            </Avatar> */}
            <OpenMenu />
          </div>

          {/* SearchDialog for Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <SearchDialog
              trigger={
                <div className="relative border rounded-sm h-[38px] p-1.5 md:p-0">
                  <Search className="flex justify-center h-full  items-center md:absolute md:left-3 md:top-1/2 md:transform md:-translate-y-1/2 w-6 md:w-4 md:h-4" />
                  <Input
                    placeholder="Search Collateral"
                    className="hidden md:flex pl-10 w-64 "
                  />
                  <Button
                    variant={"outline"}
                    className="hidden md:flex h-6 bg-transparent p-0 absolute right-[10px] top-1/2 transform -translate-y-1/2 px-2"
                  >
                    \
                  </Button>
                </div>
              }
            />
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile SearchDialog */}
            <div className="md:hidden">
              <SearchDialog
                trigger={
                  <div className="relative border rounded-sm h-[38px] p-1.5 md:p-0">
                    <Search className="flex justify-center h-full  items-center md:absolute md:left-3 md:top-1/2 md:transform md:-translate-y-1/2 w-6 md:w-4 md:h-4" />
                    <Input
                      placeholder="Search Collateral"
                      className="hidden md:flex pl-10 w-64 "
                    />
                    <Button
                      variant={"outline"}
                      className="hidden md:flex h-6 bg-transparent p-0 absolute right-[10px] top-1/2 transform -translate-y-1/2 px-2"
                    >
                      \
                    </Button>
                  </div>
                }
              />
            </div>

            {/* Coins Dropdown (Desktop only) */}
            <div className="hidden md:flex">
              <Card className="flex items-center justify-center border py-[6px] px-2 rounded-lg">
                <CoinsDropdown />
              </Card>
            </div>
            <div>
              <Badge
                variant={"default"}
                className="bg-[#BBEE4D] h-full py-[10px] px-2"
              >
                <UserCheckedIcon />
                <div className="hidden md:flex text-black">Admin</div>
              </Badge>
            </div>
            {/* Notification */}
            <NotificationPanel />

            {/* Price tag (Desktop only) */}
            <div className="hidden md:flex">
              <Card className="py-0 px-4 h-[38px] flex items-center rounded-sm">
                <div className="flex items-center text-center h-full text-sm font-medium">
                  $ 12,7M
                </div>
              </Card>
            </div>

            {/* Profile Panel */}
            <ProfilePanel />
          </div>
        </div>
      </header>
    </Card>
  );
};
