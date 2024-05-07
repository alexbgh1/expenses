import { Category } from "../types/categories";
import { CATEGORY_COLORS } from "../constants/categories";

interface BadgeProps {
  emoji?: string;
  text: Category;
}
const Badge = ({ emoji, text }: BadgeProps) => {
  console.log("CATEGORY_COLORS", CATEGORY_COLORS[text]);
  const className =
    CATEGORY_COLORS[text]?.className ||
    "bg-gray-100 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-700 dark:text-gray-300";
  return (
    <div className={`capitalize rounded-full px-2 py-1 flex w-min ${className}`}>
      {emoji && <span className="mr-1">{emoji}</span>}
      {text}
    </div>
  );
};

export default Badge;
