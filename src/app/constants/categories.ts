import { Category, CategoryColors } from "../types/categories";

//TODO: Improve colors and add more categories
//found this: https://flowbite.com/docs/components/badge/
const CATEGORY_COLORS: Record<Category, CategoryColors> = {
  home: { className: "bg-gray-200 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-700 dark:text-gray-300" },
  food: { className: "bg-yellow-100 text-yellow-800 text-xs font-medium dark:bg-yellow-900 dark:text-yellow-300" },
  transport: {
    className: "bg-purple-100 text-purple-800 text-xs font-medium rounded-full dark:bg-purple-900 dark:text-purple-300",
  },
  pet: { className: "bg-red-100 text-red-800 text-xs font-medium rounded-full dark:bg-red-900 dark:text-red-300" },
  work: { className: "bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-300" },
  education: {
    className: "bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-300",
  },
  health: {
    className: "bg-pink-100 text-pink-800 text-xs font-medium rounded-full dark:bg-pink-900 dark:text-pink-300",
  },

  entertainment: {
    className: "bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full dark:bg-indigo-900 dark:text-indigo-300",
  },
  subscription: {
    className: "bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full dark:bg-cyan-900 dark:text-cyan-300",
  },
  other: {
    className: "bg-gray-100 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-900 dark:text-gray-300",
  },
};

const EMOJI_BASED_ON_CATEGORY: Record<Category, string> = {
  home: "🏠",
  food: "🍞",
  transport: "🚗",
  pet: "🐶",
  work: "💼",
  education: "🎓",
  health: "🏥",
  entertainment: "🎉",
  subscription: "💳",
  other: "❓",
};

export { CATEGORY_COLORS, EMOJI_BASED_ON_CATEGORY };
