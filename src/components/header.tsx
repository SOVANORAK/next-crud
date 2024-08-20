import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-neutral-800 h-20 px-5 text-white w-full">
      <span className="text-1xl font-semibold md:text-2xl">Next js Crud</span>
      <Button className="bg-neutral-700">Button</Button>
    </nav>
  );
};

export default Header;
