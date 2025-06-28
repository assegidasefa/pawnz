import Listing from "@/components/Listing/Listing";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense>
        <Listing />
      </Suspense>
    </div>
  );
};

export default page;
