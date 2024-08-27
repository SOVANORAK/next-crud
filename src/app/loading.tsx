import SkeletonCard from "@/components/skeleton-card";
import React from "react";

const skeletonCount: number = 6; // Number of skeleton loaders to show

const Loading = () => {
  return (
    <div className=" w-full min-h-screen bg-neutral-900">
      <div className="flex gap-4 flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <SkeletonCard />
        ))}
      </div>
    </div>
  );
};

export default Loading;
