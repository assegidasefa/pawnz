"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ReactNode } from "react";

type FullscreenWrapperProps = {
  open: boolean;
  onOpenChange: () => void;
  children: ReactNode;
};

const FullscreenWrapper = ({
  open,
  onOpenChange,
  children,
}: FullscreenWrapperProps) => {
  return (
    <Drawer open={open} onClose={onOpenChange}>
      <DrawerContent className="h-screen gap-y-0 backdrop-blur-sm p-0 border-none  mx-4 lg:mx-14 2xl:mx-18">
        <DrawerHeader className="sr-only">
          <div className="hidden">
            <DrawerTitle>Full screen</DrawerTitle>
          </div>
        </DrawerHeader>
        <div className="relative w-full h-full flex justify-center overflow-hidden m-0">
          <div className="relative w-full  h-full  rounded-xl overflow-y-auto">
           
            <div className="p-4 md:p-6">{children}</div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FullscreenWrapper;
