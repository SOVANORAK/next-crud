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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-500 p-2 rounded-md">
          <Plus className="font-bold" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-neutral-900 text-white  rounded-md">
        <DialogHeader>
          <DialogTitle className="text-4xl font-semibold mb-5 ">
            Create
          </DialogTitle>
        </DialogHeader>
        <Form />
      </DialogContent>
    </Dialog>
  );
};

export default ModelCreate;
