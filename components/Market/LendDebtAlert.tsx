import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Badge } from "../ui/badge";

type Props = {
  onClose: () => void;
};

const LendDebtAlert = (props: Props) => {
  return (
    <div className="w-11/12 md:w-[440px] gap-3  p-4 right-2 bottom-10 fixed bg-card/60 rounded-lg outline outline-offset-[-1px] outline-zinc-100/10 backdrop-blur-[20px] inline-flex flex-col justify-start items-center z-50 border border-black/30 shadow-md dark:border-white/30 dark:shadow-lg">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
          <div className="flex-1 justify-center text-sm font-medium font-['Inter'] leading-tight">
            Loan Due Alert
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-4 px-1 bg-zinc-100/0 rounded outline utline-offset-[-1px] outline-zinc-100/10 backdrop-blur-[20px] flex justify-center items-center gap-2">
              <div className="text-right justify-center text-muted-foreground text-xs font-normal font-['Geist_Mono'] uppercase leading-none">
                Read more
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={props.onClose}
              className="p-1 rounded hover:bg-[#f1f1f1]/10 transition"
            >
              <X />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="flex-1 justify-start text-muted-foreground text-sm">
              <span className="">Your loan of </span>
              <span className="">12.1K USDC</span>
              <span className="text-muted-foreground "> for </span>
              <span className="text-primary-foreground font-bold">Ponke</span>
              <span className="text-muted-foreground"> collateral is due in </span>
              <span className="text-primary-foreground font-bold">3 days</span>
              <span className="text-muted-foreground">
                . Please prepare for repayment to avoid liquidation.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 mt-2">
        <div className="flex items-center gap-2">
          <img alt="ponk" src="/images/ponk.png" className="w-6 h-6 rounded" />
          <p className="text-sm font-medium text-[#acadae]">Ponke</p>
          {/* <span className="px-2 py-0.5 rounded bg-[#f1f1f1]/[0.02] border border-[#f1f1f1]/[0.12] text-xs uppercase text-[#ff777a]">
          </span> */}
          <Badge variant={'outline'} className="text-destructive-foreground">
            Due Soon

          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs uppercase text-[#acadae]">2025-06-02 13:02</p>
          <span className="w-2 h-2 rounded-full bg-rose-500" />
        </div>
      </div>
      <div className="w-full flex justify-end items-center self-stretch gap-3 mt-4">
        <Button
          onClick={props.onClose}
          className="border flex-1 px-3 py-2 rounded hover:bg-[#26272d] hover:text-white  hover:dark:text-white hover:border"
        >
          Dismiss
        </Button>
        <Button className="flex-1 px-3 py-2 rounded bg-[#d5ff40] hover:text-[#d5ff40] border border-[#f1f1f1]/[0.12] text-black/80 hover:border hover:border-[#d5ff40]">
          Take Action
        </Button>
      </div>
    </div>
  );
};

export default LendDebtAlert;
