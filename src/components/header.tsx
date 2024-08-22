import { Button } from "./ui/button";
import ModelCreate from "./model-create-product";
import { Tractor } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-neutral-800 h-20 px-5 text-white w-full">
      <span className="text-2xl font-semibold md:text-1xl flex justify-center items-center gap-2">
        <Tractor /> Tractor CRUD
      </span>
      <ModelCreate />
    </nav>
  );
};

export default Header;
