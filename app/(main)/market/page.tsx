"use client";

import MarketSection from "@/components/Market/MarketSection";
import { Suspense } from "react";

export default function Component() {
  return (
    <div>
      {/* Main Content */}
      <Suspense>
        <div className="flex-1 flex flex-col">
          {/* tab */}
          <MarketSection />
        </div>
      </Suspense>
    </div>
  );
}
