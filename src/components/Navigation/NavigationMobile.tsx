"use client";
import { useState } from "react";
import { MenuIcon } from "@/icons/icons";
import AsideMenuMobile from "./AsideMenuMobile";

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="sm:hidden leading-[0]">
      <button onClick={handleOpen}>
        <MenuIcon className="h-8 w-8 fill-white" />
        <span className="sr-only">Open Menu</span>
      </button>
      <AsideMenuMobile isOpen={isOpen} handleOpen={handleOpen} />
    </div>
  );
};

export default NavigationMobile;
