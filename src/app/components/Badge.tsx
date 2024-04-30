import { Category } from "../types/categories";
import { CATEGORY_COLORS } from "../constants/categories";

interface BadgeProps {
  emoji?: string;
  text: Category;
}
const Badge = ({ emoji, text }: BadgeProps) => {
  const className = CATEGORY_COLORS[text].className;
  return (
    <div className={`capitalize rounded-full px-2 py-1 flex w-min ${className}`}>
      {emoji && <span className="mr-1">{emoji}</span>}
      {text}
    </div>
  );
};

export default Badge;
