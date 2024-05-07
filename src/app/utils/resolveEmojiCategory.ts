import { EMOJI_BASED_ON_CATEGORY } from "../constants/categories";
import { Category } from "../types/categories";

const resolveEmojiCategory = (category: Category) => {
  return EMOJI_BASED_ON_CATEGORY[category] || "❓";
};

export { resolveEmojiCategory };
