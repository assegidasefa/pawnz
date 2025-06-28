import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { X, XIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const NotificationPanelContent = () => {
  return (
    <div>
      {/* Notifications */}
      <div className="w-[90vw] md:w-full gap-y-3 flex flex-col overflow-y-auto h-120 no-scrollbar">
        {/* Notification 1 */}
        <Card className="p-4 ">
          <div className="flex items-center justify-between">
            <h3 className="font-medium ">Loan Due Alert</h3>
            <div className="flex gap-x-[6px]">
              <Button className="flex items-center border p-0 h-5 px-1 rounded-sm bg-transparent hover:bg-transparent/70 ">
                <div className="text-xs ">READ More</div>
              </Button>
              <Button className="flex items-center p-0 h-5 px-1 rounded-sm bg-transparent hover:bg-transparent/70 border">
                <div className="text-xs  ">MARK AS READ</div>
              </Button>
              <div className="flex items-center">
              <XIcon width={16} height={16}/>
                </div>
            </div>
          </div>
          <p className="text-sm ">
            Your loan of{" "}
            <span className="text-[#BBEE4D] font-medium">12.1K USDC</span> for
            Ponke collateral is due in{" "}
            <span className="text-[#BBEE4D] font-medium">3 days</span>. Please
            prepare for repayment to avoid liquidation.
          </p>
          <div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">P</span>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <span className="text-sm ">Ponke</span>
                  <span className="text-xs text-[#F43F5E] border px-1 rounded-sm">
                    DUE SOON
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs ">2025-06-02 3:37 AM</span>
                <div className="bg-[#F43F5E] h-2 w-2 rounded-full"></div>
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full">
              Button 1
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium ">Loan Due Alert</h3>
            <div className="flex gap-x-[6px] text-xs">
              <Button className="flex items-center border p-0 h-5 px-1 rounded-sm bg-transparent hover:bg-transparent/70 ">
                READ More
              </Button>
              <Button className="flex items-center p-0 h-5 px-1 rounded-sm bg-transparent hover:bg-transparent/70 border">
                MARK AS READ
              </Button>
              <div className="flex items-center">
              <XIcon width={16} height={16}/>
                </div>
            </div>
          </div>
          <p className="text-sm ">
            Your loan of{" "}
            <span className="text-[#BBEE4D] font-medium">12.1K USDC</span> for
            Ponke collateral is due in{" "}
            <span className="text-[#BBEE4D] font-medium">3 days</span>. Please
            prepare for repayment to avoid liquidation.
          </p>

          <div className="flex justify-between">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">P</span>
              </div>
              <div className="flex items-center gap-x-2 ">
                <span className="text-sm ">Ponke</span>
                <span className="text-xs text-[#F43F5E] border px-1 rounded-sm">
                  DUE SOON
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs ">2025-06-02 3:37 AM</span>
              <div className="bg-[#F43F5E] h-2 w-2 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 w-full">
              <Button
                size="sm"
                className="bg-[#BBEE4D] hover:[#BBEE4D]/70 text-black font-medium w-1/2 rounded-xl"
              >
                Button 1
              </Button>
              <Button size="sm" variant="outline" className="w-1/2 rounded-xl">
                Button 2
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotificationPanelContent;
