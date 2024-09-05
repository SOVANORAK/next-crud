import SkeletonCard from "@/components/skeleton-card";
import React from "react";

interface Props {
  listsToRender: number;
}

const Loading = ({ listsToRender }: Props) => {
  return (
    <div className="flex gap-4 flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start flex-wrap">
      {Array(listsToRender)
        .fill(1)
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  );
};

export default Loading;
