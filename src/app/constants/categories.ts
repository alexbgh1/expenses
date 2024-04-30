import { Category, CategoryColors } from "../types/categories";

//TODO: Improve colors and add more categories
//found this: https://flowbite.com/docs/components/badge/
const CATEGORY_COLORS: Record<Category, CategoryColors> = {
  home: { className: "bg-gray-200 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-700 dark:text-gray-300" },
  food: { className: "bg-yellow-100 text-yellow-800 text-xs font-medium dark:bg-yellow-900 dark:text-yellow-300" },
  office: { className: "text-green-500 bg-green-100" },
  transport: {
    className: "bg-purple-100 text-purple-800 text-xs font-medium rounded-full dark:bg-purple-900 dark:text-purple-300",
  },
};

export { CATEGORY_COLORS };
