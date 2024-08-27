import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";

const SkeletonCard = () => {
  return (
    <div className="flex gap-4 flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start w-full">
      <Card className="rounded-md border-none p-4 flex flex-col gap-3 w-[100%] max-w-[320px] bg-neutral-800">
        <div className="w-[100%] max-w-[320px] h-[140px] rounded-md">
          <Skeleton className="h-full w-full bg-neutral-700" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="w-[150px] h-6 rounded-full bg-neutral-700" />
          <Skeleton className="w-[100px] h-4 rounded-full bg-neutral-700" />
        </div>

        <div>
          <Skeleton className="w-[40px] h-6 rounded-full bg-neutral-700" />
        </div>
      </Card>
    </div>
  );
};

export default SkeletonCard;
