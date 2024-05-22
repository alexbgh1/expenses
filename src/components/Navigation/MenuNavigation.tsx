"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, GraphIcon, TicketIcon } from "@/icons/icons";

const MenuNavigation = () => {
  const path = usePathname();
  const isActive = (href: string) => path === href;

  const routes = [
    { href: "/", Icon: HomeIcon, label: "Home" },
    { href: "/graphs", Icon: GraphIcon, label: "Graphs" },
    { href: "/expenses", Icon: TicketIcon, label: "Expenses" },
  ];

  return (
    <nav className="p-4 w-full">
      <ul className="flex flex-col gap-2 ">
        {routes.map((route) => (
          <MenuNavigationItem
            key={route.href}
            href={route.href}
            Icon={route.Icon}
            className={cn(
              "dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:active:bg-zinc-800 hover:bg-gray-200 p-2 rounded-lg w-full flex items-center gap-4  active:bg-gray-300",
              isActive(route.href) ? "bg-gray-200 dark:bg-zinc-900" : "text-gray-500 dark:text-zinc-500"
            )}
            classNameIcon={`${
              isActive(route.href) ? " w-6 h-6 fill-zinc-400" : "fill-zinc-600 dark:fill-zinc-700 w-6 h-6"
            }`}
          >
            {route.label}
          </MenuNavigationItem>
        ))}
      </ul>
    </nav>
  );
};

interface MenuNavigationItemProps {
  Icon?: React.ElementType;
  href: string;
  children: React.ReactNode;
  className?: string;
  classNameIcon?: string;
}

const MenuNavigationItem = ({ Icon, href, children, className, classNameIcon }: MenuNavigationItemProps) => {
  return (
    <li>
      <Link href={href} className={className}>
        {Icon && <Icon className={classNameIcon} />}
        <span>{children}</span>
      </Link>
    </li>
  );
};

export default MenuNavigation;
