import React from "react";
import { XIcon } from "@/icons/icons";

interface MenuHeaderProps {
  handleOpen?: () => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ handleOpen }) => {
  return (
    <section className="relative w-full flex pl-6 pr-10 py-8 pb-4">
      <div className="flex items-center gap-2">
        {handleOpen && (
          <button className="absolute right-0 pr-4" onClick={handleOpen}>
            <XIcon className="w-6 h-6 hover:dark:fill-zinc-600 dark:fill-zinc-700" />
            <span className="sr-only">Close Menu</span>
          </button>
        )}
        <div className="h-8 w-8 bg-gray-300 rounded-sm"></div>
        <h2 className="text-xl font-semibold">Alex</h2>
      </div>
    </section>
  );
};

export default MenuHeader;
