import { Category, CategoryColors } from "../types/categories";

//TODO: Improve colors and add more categories
const CATEGORY_COLORS: Record<Category, CategoryColors> = {
  home: {
    textColor: {
      light: "#101827",
      dark: "#F9FAFB",
    },
    bgColor: {
      light: "#e5e7eb",
      dark: "#111827",
    },
  },
  food: {
    textColor: {
      light: "#f1f8f7",
      dark: "#F9FAFB",
    },
    bgColor: {
      light: "#8B5CF6",
      dark: "#111827",
    },
  },
  office: {
    textColor: {
      light: "#e5e7eb",
      dark: "#F9FAFB",
    },
    bgColor: {
      light: "#F9FAFB",
      dark: "#111827",
    },
  },
  transport: {
    textColor: {
      light: "#F9FAFB",
      dark: "#111827",
    },
    bgColor: {
      light: "#111827",
      dark: "#F9FAFB",
    },
  },
};

export { CATEGORY_COLORS };
