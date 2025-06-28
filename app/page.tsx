"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MarketSection from "@/components/Market/MarketSection";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Simulated login check — replace this with your real logic
  const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (!isLoggedIn) {
      // router.replace("/auth");
      router.replace("/admin");

    } else {
      router.replace("/admin");
    }
    setLoading(false);
  }, []);

  if (loading) return null; // optionally show a loader

  return (
    <div>
      <MarketSection />
    </div>
  );
}
