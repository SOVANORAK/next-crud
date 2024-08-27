import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import Form from "./form";
import { Plus } from "lucide-react";

const ModelCreate = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-600 hover:bg-green-500 p-2 rounded-md">
            <Plus className="font-bold" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-neutral-900 text-white md:max-w-[525px] border-none rounded-md">
          <DialogHeader>
            <DialogTitle className="text-4xl font-semibold mb-5 ">
              Create
            </DialogTitle>
            <DialogDescription className="text-neutral-300">
              Create Product
            </DialogDescription>
          </DialogHeader>
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModelCreate;
