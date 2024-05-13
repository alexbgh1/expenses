import { cn } from "@/lib/utils";

import { Category } from "../types/categories";
import { CATEGORY_COLORS } from "../constants/categories";

interface BadgeProps {
  emoji?: string;
  className?: string;
  text: Category;
  quantity?: number;
}
const Badge = ({ emoji, text, className, quantity }: BadgeProps) => {
  const classNameCategory =
    CATEGORY_COLORS[text]?.className ||
    "bg-gray-100 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-700 dark:text-gray-300";
  return (
    <div className={cn("capitalize rounded-full px-2 py-1 flex w-min", classNameCategory, className)}>
      {emoji && <span className="mr-1">{emoji}</span>}
      {text} {quantity && <span className=" opacity-75 ml-1 px-1 rounded-full">{quantity}</span>}
    </div>
  );
};

export default Badge;
