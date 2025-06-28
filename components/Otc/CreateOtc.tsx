"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  ChevronDown,
  PlusCircleIcon,
  ArrowLeftRight,
  XIcon,
} from "lucide-react";

import TokenCard from "./TokenCard";
import CreateOtcSkeleton from "./CreateOtcSkeleton";
import OtcIcon from "../icons/OtcIcon";
import LinkProfileIcon from "../icons/LinkProfileIcon";
import DoubleBookMakrIcon from "../icons/DoubleBookMakrIcon";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import CustomCalendar from "../Shared/CustomCalendar";
import { format } from "date-fns";

type Token = {
  amount: string;
  token: string;
  value: string | number;
  symbol: string;
};

const fetchMockOfferings = () =>
  Promise.resolve([
    { amount: "200K", token: "DINGOCOIN", value: "10000", symbol: "PONKE" },
    { amount: "150K", token: "PEPECASH", value: "1000", symbol: "BONK" },
  ]);

const fetchMockWants = () =>
  Promise.resolve([
    { amount: "0", token: "USDC", value: "500M", symbol: "SOL" },
    { amount: "0", token: "ETH", value: "300M", symbol: "DOGE" },
    { amount: "0", token: "BTC", value: "100M", symbol: "SHIBA" },
  ]);
const avatars = [
  { src: "/pawnzLogo.svg", bg: "bg-blue-500" },
  { src: "/pawnzLogo.svg", bg: "bg-yellow-400" },
  { src: "/pawnzLogo.svg", bg: "bg-green-500" },
  { src: "/pawnzLogo.svg", bg: "bg-orange-400" },
  { src: "/pawnzLogo.svg", bg: "bg-purple-500" },
];
export default function CreateOtc() {
  const [loading, setLoading] = useState(true);
  const [myOfferings, setMyOfferings] = useState<Token[]>([]);
  const [wantedTokens, setWantedTokens] = useState<Token[]>([]);
  const [walletAddress, setWalletAddress] = useState("0x1B6c...21aa");
  const [isPrivate, setIsPrivate] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [openItem, setOpenItem] = useState<string | null>(null);

  const isMyOfferingsOpen = openItem === "my-offerings";
  const isWantedTokensOpen = openItem === "wanted-tokens";

  const coinOptions = ["USDC", "SOL", "ETH", "BONK", "PONKE", "DOGE", "SHIBA"];
  useEffect(() => {
    console.log(isMyOfferingsOpen, "isMyOfferingsOpen");
  }, [isMyOfferingsOpen]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    fetchMockOfferings().then(setMyOfferings);
    fetchMockWants().then(setWantedTokens);
    return () => clearTimeout(timer);
  }, []);

  const updateTokenList = (
    list: Token[],
    setList: (tokens: Token[]) => void,
    index: number,
    updated: Token
  ) => {
    const copy = [...list];
    copy[index] = updated;
    setList(copy);
  };

  const removeTokenFromList = (
    list: Token[],
    setList: (tokens: Token[]) => void,
    index: number
  ) => {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  };

  const handleAddOffering = () => {
    const newToken = {
      amount: "100K",
      token: "MOCK",
      value: "123M",
      symbol: "MOCKSYM",
    };
    setMyOfferings((prev) => [...prev, newToken]);
  };

  const handleAddWanted = () => {
    const newToken = {
      amount: "0",
      token: "NEWTOKEN",
      value: "50M",
      symbol: "NTK",
    };
    setWantedTokens((prev) => [...prev, newToken]);
  };

  if (loading) return <CreateOtcSkeleton />;

  return (
    <div className="relative min-h-screen">
      <div className="backdrop-blur w-full">
        <div className="flex items-center space-x-4 justify-between">
          <div className="hidden md:flex text-sm">
            Create a private over-the-counter exchange with multiple assets
          </div>
          <div className="flex gap-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <Checkbox
                checked={isPrivate}
                onCheckedChange={(checked) => setIsPrivate(checked === true)}
              />
              <span className="text-sm">Private Listing</span>
            </div>
            <Button className="mr-4 hidden md:flex bg-[#D5FF40] hover:bg-[#D5FF40]/70 text-black font-medium">
              <OtcIcon /> OTC Swap
            </Button>
          </div>
        </div>
      </div>

      <div className="flex w-[88vw] md:w-full">
        <div className="flex-1 pt-6">
          <Card className="flex w-screen md:w-full px-4 flex-col md:grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 md:py-4">
            {/* Duration */}
            <Card className="p-0 m-0 border-none gap-0 shadow-none">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-medium">Duration</CardTitle>
              </CardHeader>
              <CardContent className="p-0 w-full">
                <div className="flex items-center space-x-2 w-full">
                  <Input
                    value={date ? format(new Date(date), "dd/MM/yyyy") : ""}
                    onChange={(e) => {
                      const parsed = new Date(e.target.value);
                      setDate(isNaN(parsed.getTime()) ? undefined : parsed);
                    }}
                    className="text-center bg-primary border-none"
                  />
                  <CustomCalendar date={date} setDate={setDate} />
                </div>
              </CardContent>
            </Card>

            {/* Counterparty Wallet */}
            <Card className="p-0 m-0 border-none gap-0 shadow-none">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-medium">
                  Counterparty Wallet Address
                </CardTitle>
              </CardHeader>
              <CardContent className="px-1">
                <div className="flex items-center space-x-2 mt-2 md:mt-0">
                  <Input
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="text-center bg-primary"
                  />
                  <Card className="border p-2 bg-primary flex flex-row gap-x-1 py-1">
                    <DoubleBookMakrIcon />
                    <ChevronDown />
                  </Card>
                </div>
                <div className="flex items-center mt-2 text-xs justify-end">
                  <Checkbox
                    checked={isPrivate}
                    onCheckedChange={(checked) =>
                      setIsPrivate(checked === true)
                    }
                    className="mr-2"
                  />
                  <span>Private Exchange (Only visible to counterparty)</span>
                </div>
              </CardContent>
            </Card>
          </Card>

          <div className="px-4 md:p-0 w-full">
            {/* Mobile Accordion */}
            <div className="flex flex-col gap-y-4 md:hidden">
              <Accordion
                type="single"
                collapsible
                value={openItem || ""}
                onValueChange={(value) => setOpenItem(value || null)}
              >
                {/* My Offerings */}
                <AccordionItem value="my-offerings">
                  <div className="flex items-center justify-between gap-2 px-1 mb-2">
                    <div className="text-lg font-medium">My offerings</div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="border"
                        onClick={handleAddOffering}
                      >
                        <PlusCircleIcon className="h-4 w-4 mr-1" /> Add token
                      </Button>
                      <AccordionTrigger className="p-2 border" />
                    </div>
                  </div>

                  {/* Show first card when collapsed */}
                  {!isMyOfferingsOpen && myOfferings.length > 0 && (
                    <div className="relative px-1 pb-2">
                      <TokenCard
                        data={myOfferings[0]}
                        coinOptions={coinOptions}
                        onChange={(updated) =>
                          updateTokenList(
                            myOfferings,
                            setMyOfferings,
                            0,
                            updated
                          )
                        }
                        showAvatars={true}
                        avatars={avatars}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() =>
                          removeTokenFromList(myOfferings, setMyOfferings, 0)
                        }
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  <AccordionContent>
                    {myOfferings.map((offering, idx) => (
                      <div key={idx} className="relative px-1 pb-2">
                        <TokenCard
                          data={offering}
                          coinOptions={coinOptions}
                          onChange={(updated) =>
                            updateTokenList(
                              myOfferings,
                              setMyOfferings,
                              idx,
                              updated
                            )
                          }
                          showAvatars={false}
                          avatars={avatars}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() =>
                            removeTokenFromList(
                              myOfferings,
                              setMyOfferings,
                              idx
                            )
                          }
                        >
                          <XIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Repeat similar logic for Wanted Tokens */}
                <AccordionItem value="wanted-tokens">
                  <div className="flex items-center justify-between gap-2 px-1 mt-4 mb-2">
                    <div className="text-lg font-medium">
                      What I'd like to get
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="border"
                        onClick={handleAddWanted}
                      >
                        <PlusCircleIcon className="h-4 w-4 mr-1" /> Add token
                      </Button>
                      <AccordionTrigger className="p-2 border" />
                    </div>
                  </div>

                  {/* Show first card when collapsed */}
                  {!isWantedTokensOpen && wantedTokens.length > 0 && (
                    <div className="relative px-1 pb-2">
                      <TokenCard
                        data={wantedTokens[0]}
                        coinOptions={coinOptions}
                        onChange={(updated) =>
                          updateTokenList(
                            wantedTokens,
                            setWantedTokens,
                            0,
                            updated
                          )
                        }
                        showAvatars={true}
                        avatars={avatars}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() =>
                          removeTokenFromList(wantedTokens, setWantedTokens, 0)
                        }
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  <AccordionContent>
                    {wantedTokens.map((token, idx) => (
                      <div key={idx} className="relative px-1 pb-2">
                        <TokenCard
                          data={token}
                          coinOptions={coinOptions}
                          onChange={(updated) =>
                            updateTokenList(
                              wantedTokens,
                              setWantedTokens,
                              idx,
                              updated
                            )
                          }
                          showAvatars={false}
                          avatars={avatars}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() =>
                            removeTokenFromList(
                              wantedTokens,
                              setWantedTokens,
                              idx
                            )
                          }
                        >
                          <XIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 items-start">
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">My offerings</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="border"
                    onClick={handleAddOffering}
                  >
                    <PlusCircleIcon className="h-4 w-4 mr-1" /> Add token
                  </Button>
                </div>
                {myOfferings.map((offering, idx) => (
                  <div key={idx} className="relative">
                    <TokenCard
                      data={offering}
                      coinOptions={coinOptions}
                      onChange={(updated) =>
                        updateTokenList(
                          myOfferings,
                          setMyOfferings,
                          idx,
                          updated
                        )
                      }
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() =>
                        removeTokenFromList(myOfferings, setMyOfferings, idx)
                      }
                    >
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="hidden md:flex justify-center pt-10">
                <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4 text-[#BBEE4D]" />
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">What I'd like to get</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="border"
                    onClick={handleAddWanted}
                  >
                    <PlusCircleIcon className="h-4 w-4 mr-1" /> Add token
                  </Button>
                </div>
                {wantedTokens.map((token, idx) => (
                  <div key={idx} className="relative">
                    <TokenCard
                      data={token}
                      coinOptions={coinOptions}
                      onChange={(updated) =>
                        updateTokenList(
                          wantedTokens,
                          setWantedTokens,
                          idx,
                          updated
                        )
                      }
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() =>
                        removeTokenFromList(wantedTokens, setWantedTokens, idx)
                      }
                    >
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 text-center z-60">
        <Button className="flex md:hidden rounded-none font-bold bg-[#D5FF40] hover:bg-[#D5FF40]/70 w-screen text-black">
          <OtcIcon /> OTC Swap
        </Button>
      </div>
    </div>
  );
}
