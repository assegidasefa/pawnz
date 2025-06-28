"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EditIcon, SquarePen } from "lucide-react";
import { WalletSelector } from "./WalletSelector";
import DepositIcon from "../icons/DepositIcon";
import WithdrawIcon from "../icons/WithdrawIcon";

type Props = {
  activeAction: "deposit" | "withdraw" | "adminTable";
  setActiveAction: (action: "deposit" | "withdraw" | "adminTable") => void;
};

export function AdminActionBar({ activeAction, setActiveAction }: Props) {
  const avatarList = [
    { src: "/pawnzLogo.svg", bg: "bg-blue-500" },
    { src: "/pawnzLogo.svg", bg: "bg-yellow-400" },
    { src: "/pawnzLogo.svg", bg: "bg-green-500" },
    { src: "/pawnzLogo.svg", bg: "bg-orange-400" },
    { src: "/pawnzLogo.svg", bg: "bg-purple-500" },
  ];

  return (
    <div className=" flex gap-12 py-[24px]">
      <div className="flex w-full justify-between lg:flex-row flex-col gap-4">
        <div className="flex gap-[48px] lg:flex-row flex-col ">
          <div className="flex items-center gap-4">
            <div className="relative w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]">
              <Avatar className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] bg-[#fcb900]">
                <AvatarImage src="/pawnzLogo.svg" alt="Avatar" />
              </Avatar>
              <div className="absolute bottom-0 right-0 w-[18px] h-[18px] bg-card rounded-xl p-[2px] shadow-md translate-x-1/4 translate-y-1/4">
                <img
                  src="/pawnzLogo.svg"
                  alt="Toncoin"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex gap-x-2 items-center">
              <h6 className="text-[14px] lg:text-[20px] font-sans">
                Admin_username
              </h6>
              <EditIcon width={16} height={16} className="text-accent" />
            </div>
          </div>

          <div className="flex justify-between gap-6 border py-2 px-4 rounded-xl h-[44px]">
            <div className="flex items-center gap-2">
              <h1 className="mr-2 text-[10px] lg:text-[14px] font-medium font-sans">
                Balance
              </h1>
              <p className=" text-[10px] lg:text-[14px]">$12.11B</p>
              <p className="text-[#00B700] text-[10px] lg:text-[14px] font-normal font-mono">
                +25.3%
              </p>
            </div>

            <div className="flex items-center">
              {avatarList.map((item, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full border  ${
                    item.bg
                  } flex items-center justify-center ${
                    index !== 0 ? "-ml-2" : ""
                  }`}
                >
                  <Avatar className="w-full h-full rounded-full overflow-hidden">
                    <AvatarImage
                      src={item.src}
                      alt={`Pawnz ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                    <AvatarFallback>PZ</AvatarFallback>
                  </Avatar>
                </div>
              ))}
              <div className="-ml-2 w-6 h-6 rounded-full bg-card border  flex items-center justify-center shadow-sm">
                <div className="flex gap-[2px]">
                  <span className="w-[2px] h-[2px] bg-card rounded-full" />
                  <span className="w-[2px] h-[2px] bg-card rounded-full" />
                  <span className="w-[2px] h-[2px] bg-card rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 w-full  lg:justify-end justify-between items-center">
          <Button
            onClick={() => setActiveAction("deposit")}
            className={`lg:w-[104px] lg:h-[36px] hover:bg-[#D5FF40]/70 hover:text-black rounded-[8px] px-2 items-center text-[10px] lg:text-[14px] font-medium ${
              activeAction === "deposit"
                ? "bg-[#D5FF40] text-black"
                : "bg-card text-muted-foreground"
            }`}
          >
            <DepositIcon />
            <h1 className="ml-1">Deposit</h1>
          </Button>

          <Button
            onClick={() => setActiveAction("withdraw")}
            className={`lg:w-[117px] lg:h-[36px] hover:bg-[#D5FF40]/70 hover:text-black rounded-[8px] px-2 items-center text-[10px] lg:text-[14px] font-medium ${
              activeAction === "withdraw"
                ? "bg-[#D5FF40] text-black"
                : "bg-card text-muted-foreground"
            }`}
          >
            <WithdrawIcon />
            <h1 className="ml-1">Withdraw</h1>
          </Button>

          <WalletSelector
            onChange={(wallet) => console.log("Selected:", wallet)}
          />
        </div>
      </div>
    </div>
  );
}
