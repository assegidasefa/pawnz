"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";
import Image from "next/image";

import AttachIcon from "../icons/AttachIcon";
import NewtabIcon from "../icons/NewtabIcon";
import LockIcon from "../icons/LockIcon";
import ReferralTable from "./ReferralTable";
import SettingsSkeleton from "./SettingSkeleton";

interface ReferralStats {
  referralCode: string;
  totalReferrals: number;
  totalVolume: number;
  lastReward: number;
  totalDistributed: number;
  tier: string;
}

export default function Settings() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [referralData, setReferralData] = useState<ReferralStats | null>(null);

  const REFERRAL_COPY_TEXT = "pawn_xyz/ref1b3123"; // fallback if referralData is null

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setReferralData({
        referralCode: "pawn_xyz/ref1b3123",
        totalReferrals: 0,
        totalVolume: 0,
        lastReward: 0,
        totalDistributed: 0,
        tier: "Supercat Tier1",
      });
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralData?.referralCode || REFERRAL_COPY_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading || !referralData) return <SettingsSkeleton />;

  return (
    <div className="w-[100vw] md:w-full">
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="referral" className="w-full">
          <TabsList className="grid w-[200px] grid-cols-2 bg-transparent">
            <TabsTrigger disabled value="settings">
              Settings
            </TabsTrigger>
            <TabsTrigger value="referral">Referral</TabsTrigger>
          </TabsList>

          <TabsContent value="referral" className="mt-6">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">Referral</h2>
                <div className="flex gap-x-2">
                  <Card className="border flex flex-row items-center gap-x-1 rounded-md px-3 py-1.5">
                    <span className="text-sm">{referralData.referralCode}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 rounded-full"
                      onClick={copyToClipboard}
                    >
                      {copied ? <Check size={14} /> : <AttachIcon />}
                    </Button>
                  </Card>
                  <Card className="border p-2 rounded-md flex flex-row items-center">
                    <NewtabIcon />
                  </Card>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm">Your Tier:</span>
                <Card className="uppercase text-xs font-bold p-1 rounded-sm flex flex-row gap-x-2">
                  {referralData.tier}
                  <LockIcon />
                </Card>
              </div>

              <hr />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-xl">
                  <div className="p-6 space-y-6">
                    <div className="space-y-2">
                      <p className="text-sm">Total Referrals</p>
                      <Card className="p-0 flex w-full justify-center text-center rounded-sm">
                        <p className="text-2xl font-medium">{referralData.totalReferrals}</p>
                      </Card>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">Total Referrer Filled Volume</p>
                      <Card className="p-0 flex w-full justify-center text-center rounded-sm">
                        <p className="text-2xl font-medium">${referralData.totalVolume}</p>
                      </Card>
                    </div>
                  </div>
                </div>

                <div className="border rounded-xl">
                  <div className="p-6 space-y-6">
                    <div className="space-y-1">
                      <p className="text-sm">Last Referral Reward</p>
                      <div className="flex justify-end items-center">
                        <Card className="p-0 flex flex-row w-full justify-center text-center rounded-sm items-center gap-x-3">
                          <div className="text-2xl font-medium">{referralData.lastReward}</div>
                          <Image
                            src="/icons/coin.svg" // use actual path or image url
                            alt="Coin"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </Card>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">Total Distributed Rewards</p>
                      <div className="flex justify-end items-center">
                        <Card className="p-0 flex flex-row items-center gap-x-3 w-full justify-center text-center rounded-sm">
                          <div className="text-2xl font-medium">{referralData.totalDistributed}</div>
                          <Image
                            src="/icons/coin.svg"
                            alt="Coin"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <ReferralTable />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
