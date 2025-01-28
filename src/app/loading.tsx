import SkeletonCard from "@/components/skeleton-card";
import React from "react";

interface Props {
  listsToRender: number;
}

const Loading = ({ listsToRender }: Props) => {
  return (
    <div className="grid grid-cols-auto-fit-300 gap-4 justify-center">
      {Array(listsToRender)
        .fill(1)
        .map((listNumber) => (
          <SkeletonCard key={listNumber} />
        ))}
    </div>
  );
};

export default Loading;
