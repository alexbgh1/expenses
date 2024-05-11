import Badge from "../Badge";

import { CATEGORIES_SORTED_OTHER_LAST } from "@/app/constants/categories";

import { Category } from "@/app/types/categories";

interface CategoryMultipleSelectProps {
  open: boolean;
  setOpenCategoryFilter: (open: boolean) => void;
  handleFilter: () => void;
  categoryCounts: Record<Category, number>;
  categoryFilter: Category[] | null;
  setCategoryFilter: (category: Category[] | null) => void;
}

const CategoryMultipleSelect = ({
  open,
  setOpenCategoryFilter,
  handleFilter,
  categoryCounts,
  categoryFilter,
  setCategoryFilter,
}: CategoryMultipleSelectProps) => {
  const handleCategoryFilter = (category: Category) => {
    if (categoryFilter?.includes(category)) {
      // Remove category from filter
      setCategoryFilter(categoryFilter.filter((cat) => cat !== category));
    } else {
      // Add category to filter
      setCategoryFilter([...(categoryFilter || []), category]);
    }
  };

  return (
    <div
      className={`absolute z-10 min-w-min dark:bg-zinc-900 bg-white border dark:border-zinc-600 border-gray-300 mt-1 overflow-hidden ease-in-out duration-150 ${
        open ? "max-h-screen" : "max-h-0 border-0"
      }`}
    >
      <ul className="p-2 flex flex-wrap gap-1">
        {CATEGORIES_SORTED_OTHER_LAST.map((category) => {
          const isSelected = categoryFilter?.includes(category);
          return (
            <button key={category} onClick={() => handleCategoryFilter(category)}>
              <Badge
                key={category}
                text={category}
                className={
                  isSelected
                    ? "opacity-90"
                    : "opacity-45 dark:opacity-40 dark:hover:opacity-75 hover:opacity-70 transition-opacity"
                }
                quantity={categoryCounts[category]}
              />
            </button>
          );
        })}
      </ul>
      <div className="border-t dark:border-zinc-600 border-gray-200 flex justify-center">
        <button
          onClick={() => {
            handleFilter();
            setOpenCategoryFilter(false);
          }}
          className="p-1 text-xs text-gray-400 dark:text-zinc-400 dark:hover:text-zinc-300 hover:text-gray-50 dark:hover:bg-blue-950 hover:bg-blue-500 w-full transition-colors"
        >
          Apply filters
        </button>
        <button
          onClick={() => setCategoryFilter(null)}
          className="p-1 text-xs dark:text-zinc-400 text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 hover:text-gray-600 hover:bg-gray-100 w-full"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default CategoryMultipleSelect;
