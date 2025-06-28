"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CopyIcon, EditIcon } from "lucide-react";
import { Card } from "../ui/card";
import EyeIcon from "../icons/EyeIcon";
import { UserStats } from "./types/user";
import { mockUserStats } from "./mockUserData";
import { Skeleton } from "../ui/skeleton";

const UserAvatar: React.FC<{ user: UserStats }> = ({ user }) => (
  <div className="relative w-14 h-14">
    <Avatar className="w-14 h-14">
      <AvatarImage src={user.avatarUrl} />
      <AvatarFallback className="bg-orange-500">
        {user.address.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-zinc-100 rounded p-0.5">
      <div className="relative w-full h-full bg-[#627EEA] rounded overflow-hidden">
        <img
          src="/images/coins/ethers.svg"
          alt="ethers"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  </div>
);

const UserAddress: React.FC<{ address: string }> = ({ address }) => (
  <div className="flex items-center gap-2">
    <span className="text-xs font-medium">{address}</span>
    <div className="flex gap-1 text-muted-foreground cursor-pointer">
      <CopyIcon width={16} height={16} />
      <EditIcon width={16} height={16} />
    </div>
  </div>
);

const StatCard: React.FC<{ label: string; value: string | number; className?: string }> = ({
  label,
  value,
  className = "",
}) => (
  <Card className={`px-4 py-2 text-center ${className}`}>
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="text-lg font-medium">{value}</div>
  </Card>
);

const NetWorthCard: React.FC<{ user: UserStats }> = ({ user }) => {
  const isPositive = user.netWorthChangeDirection === "up";

  return (
    <Card className="order-1 md:order-5 px-4 py-2 w-full md:w-auto mt-2 md:mt-0">
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-3 text-sm font-medium">
            Net Worth <EyeIcon />
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold">{user.netWorth}</div>
            <div className={isPositive ? "text-green-600 text-sm" : "text-red-600 text-sm"}>
              {user.netWorthChange}
            </div>
          </div>
        </div>

        <div className="flex -space-x-2 grayscale *:ring-2 *:ring-background">
          {user.contributors.map((c, i) => (
            <Avatar key={i} className="w-6 h-6">
              <AvatarImage src={c.avatarUrl} alt={`@${c.name}`} />
              <AvatarFallback>{c.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </Card>
  );
};

const UserDetailSection = () => {
  const [user, setUser] = useState<UserStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setUser(mockUserStats);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-32">
        <Skeleton ></Skeleton>
      </div>
    );

  if (!user) return <div className="text-red-600">Failed to load user data.</div>;

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
      {/* Left Side */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <UserAvatar user={user} />
        <div className="flex flex-col md:flex-row justify-between flex-1 min-w-0">
          <div className="flex items-center justify-between md:flex-col md:justify-start gap-2 min-w-0">
            <UserAddress address={user.address} />
            <Card className="p-1 rounded-sm text-xs whitespace-nowrap">{user.joined}</Card>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-4 w-full md:w-auto gap-3">
        <NetWorthCard user={user} />

        <div className="flex gap-2 w-full md:w-auto">
          <StatCard label="Auctions won" value={user.auctionsWon} className="w-1/2 md:w-auto" />
          <StatCard label="Referrals" value={user.referrals} className="w-1/2 md:w-auto" />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <StatCard label="Active Loans" value={user.activeLoans} className="w-1/2 md:w-auto" />
          <StatCard label="Active Offers" value={user.activeOffers} className="w-1/2 md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default UserDetailSection;
