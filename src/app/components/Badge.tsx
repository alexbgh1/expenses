import { Category } from "../types/categories";
import { CATEGORY_COLORS } from "../constants/categories";

interface BadgeProps {
  emoji?: string;
  text: Category;
}
const Badge = ({ emoji, text }: BadgeProps) => {
  const textColor = CATEGORY_COLORS[text].textColor.light;
  const bgColor = CATEGORY_COLORS[text].bgColor.light;
  return (
    <div
      className="capitalize rounded-full px-2 py-1 flex w-min"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {emoji && <span className="mr-1">{emoji}</span>}
      {text}
    </div>
  );
};

export default Badge;
