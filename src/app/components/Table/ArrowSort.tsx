import { cn } from "@/lib/utils";

import { ArrowUpZAIcon, ArrowDownAZIcon, ArrowUpWideShortIcon, ArrowDownShortWide } from "@/app/icons/arrows";
import { SortOrder } from "@/app/types";

interface ArrowSortProps {
  type: string;
  sortOrder: SortOrder;
  className?: string;
}

const ArrowSort = ({ type, sortOrder, className }: ArrowSortProps) => {
  if (type !== "string" && type !== "number" && type !== "date") {
    return null;
  }

  switch (type) {
    case "string":
      if (sortOrder === "asc") return <ArrowDownAZIcon className={cn("w-4 h-4 fill-gray-500", className)} />;
      return <ArrowUpZAIcon className={cn("w-4 h-4 fill-gray-500", className)} />;
    case "number":
      if (sortOrder === "asc") return <ArrowDownShortWide className={cn("w-4 h-4 fill-gray-500", className)} />;
      return <ArrowUpWideShortIcon className={cn("w-4 h-4 fill-gray-500", className)} />;
  }
};

export default ArrowSort;
