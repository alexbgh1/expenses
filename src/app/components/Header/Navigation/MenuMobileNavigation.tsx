"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, TagIcon, TicketIcon } from "@/app/icons/icons";

const MobileNavigation = () => {
  const path = usePathname();
  const isActive = (href: string) => path === href;

  const routes = [
    { href: "/", Icon: HomeIcon, label: "Home" },
    { href: "/tags", Icon: TagIcon, label: "Tags" },
    { href: "/expenses", Icon: TicketIcon, label: "Expenses" },
  ];

  return (
    <nav className="p-4">
      <ul className="flex flex-col gap-4 ">
        {routes.map((route) => (
          <MobileNavigationItem
            key={route.href}
            href={route.href}
            Icon={route.Icon}
            className={`${
              isActive(route.href) ? "bg-gray-200" : "text-gray-500"
            } hover:bg-gray-200 p-2 rounded-lg w-full flex items-center gap-4  active:bg-gray-300`}
            classNameIcon={`${isActive(route.href) ? "text-gray-800" : "text-gray-500"}`}
          >
            {route.label}
          </MobileNavigationItem>
        ))}
      </ul>
    </nav>
  );
};

interface MobileNavigationItemProps {
  Icon?: React.ElementType;
  href: string;
  children: React.ReactNode;
  className?: string;
  classNameIcon?: string;
}

const MobileNavigationItem = ({ Icon, href, children, className, classNameIcon }: MobileNavigationItemProps) => {
  return (
    <li>
      <Link href={href} className={className}>
        {Icon && <Icon className={classNameIcon} />}
        <span>{children}</span>
      </Link>
    </li>
  );
};

export default MobileNavigation;
