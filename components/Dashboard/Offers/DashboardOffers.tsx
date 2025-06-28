"use client";
import DashboardOfferTable from "./DashboardOfferTable";
import { useEffect, useState } from "react";
import DashboardOfferSkeleton from "./DashboardOfferSkeleton";
import UserDetailSection from "../UserDetailSection";

export default function DashboardOffers() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const tokens = Array.from({ length: 20 }, () => ({
    name: "Ponke",
    symbol: "PONKE",
    offering: "350M",
    status: "Accept Decline",
    from: "5z3EqY...SWmrRC",
    time: "1m ago",
    color: "#FFD700",
    activity: "Active",
    apr: "5%",
    offer: "Special Offer",
  }));

  const headers = ["COIN", "OFFERING", "STATUS", "FROM", "TIME"];
  if (loading) {
    return <DashboardOfferSkeleton />;
  }
  return (
    <div className="min-h-screen w-full">
      <div className="">
        {/* User Profile Section */}
        <UserDetailSection />
        {/* Listings Section */}
        <div>
          {/* table  */}
          <DashboardOfferTable headers={headers} tokens={tokens} />
        </div>
      </div>
    </div>
  );
}
