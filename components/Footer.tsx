import { HelpCircle } from "lucide-react";
import TelegramIcon from "./icons/TelegramIcon";
import XIcon from "./icons/XIcon";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import EthereumIcon from "./icons/EthereumIcon";
import FuelIcon from "./icons/FuelIcon";
import NetworkIcon from "./icons/NetworkIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center w-full border-t mt-auto ">
      {/* Footer */}
      <Card className="px-4 flex flex-row items-center justify-between text-sm py-0 rounded-none h-8 max-md:max-w-full border-none">
        <div className="flex items-center space-x-6">
          <Badge
            variant="secondary"
            className="bg-transparent hover:bg-transparent text-[#05EB05] px-0"
          >
            <div className="w-2 h-2 bg-[#47bb64] rounded-full mr-2"></div>
            Live
          </Badge>

          <div className="text-[#666] font-normal border-l border-gray-300 pl-6 flex gap-x-1 items-center">
            <NetworkIcon />
            Networks
          </div>

          <Link
            href="/terms-of-service"
            className="hidden md:flex text-[#666] font-normal border-l border-gray-300 pl-6">
            Terms of Service
          </Link>

          <Link
            href="/privacy-policy"
            className="hidden md:flex text-[#666] font-normal border-l border-gray-300 pl-6">
            Privacy Policy
          </Link>

          <Link
            href="/support"
            className="hidden md:flex text-[#666] font-normal border-l border-gray-300 pl-6 items-center gap-x-1">
            <HelpCircle className="w-4 h-4" />
            Support
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6 ">
          <Badge
            variant="secondary"
            className="bg-transparent hover:bg-transparent text-[#666] px-0 flex items-center"
          >
            <div className="w-4 h-4">
              <EthereumIcon />
            </div>
            $2,663.49
          </Badge>
          <Badge
            variant="secondary"
            className="bg-transparent hover:bg-transparent text-[#666] px-0 flex items-center"
          >
            <FuelIcon />
            10.8 GWEI
          </Badge>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" className="w-5 h-5 text-[#666]">
            <TelegramIcon />
          </a>
          <a href="#" className="w-5 h-5 text-[#666]">
            <XIcon />
          </a>
        </div>
      </Card>
    </footer>
  );
};
