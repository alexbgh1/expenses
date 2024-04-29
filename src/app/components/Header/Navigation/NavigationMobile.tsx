"use client";
import { useState } from "react";
import { MenuIcon } from "@/app/icons/icons";
import SideMenuMobile from "./MenuMobile";

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <div>
      <button onClick={handleOpen}>
        <MenuIcon className="h-8 w-8 fill-white" />
      </button>
      <SideMenuMobile isOpen={isOpen} handleOpen={handleOpen} />
    </div>
  );
};

export default NavigationMobile;
