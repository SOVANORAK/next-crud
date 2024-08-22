import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from "./form";
import { Plus } from "lucide-react";

const ModelCreate = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-600 hover:bg-green-500">
            <Plus className="font-bold" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-neutral-900 text-white md:max-w-[525px] border-none rounded-md">
          <DialogHeader>
            <DialogTitle className="text-3xl font-semibold">Create</DialogTitle>
          </DialogHeader>
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModelCreate;
