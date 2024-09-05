import ModelCreate from "./model-create-product";
import { Tractor } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-neutral-800 h-20 px-5 text-white w-full">
      <span className="text-2xl font-bold md:text-3xl flex justify-center items-center gap-2">
        CRUD
      </span>
      <ModelCreate />
    </nav>
  );
};

export default Header;
