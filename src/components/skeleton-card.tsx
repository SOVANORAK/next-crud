import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";

const SkeletonCard = () => {
  return (
    <div className="w-fit">
      <Card className="rounded-md border-none p-4 flex flex-col gap-4 w-[350px] bg-neutral-800">
        <div className="w-[100%] max-w-[320px] h-[140px] rounded-md">
          <Skeleton className="h-full w-full bg-neutral-700" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="w-[250px] h-6 rounded-full bg-neutral-700" />
          <Skeleton className="w-[200px] h-4 rounded-full bg-neutral-700" />
        </div>

        <div>
          <Skeleton className="w-[40px] h-6 rounded-full bg-neutral-700" />
        </div>
      </Card>
    </div>
  );
};

export default SkeletonCard;
