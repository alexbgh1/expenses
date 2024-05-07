import Badge from "../Badge";

import { CATEGORIES } from "@/app/constants/categories";

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
  return (
    <div
      className={`absolute z-10 min-w-min bg-white border border-gray-300 mt-1 overflow-hidden ease-in-out duration-150 ${
        open ? "max-h-screen" : "max-h-0 border-0"
      }`}
    >
      <ul className="p-2 flex flex-wrap gap-1">
        {CATEGORIES.map((category) => {
          const handleCategoryFilter = () => {
            if (categoryFilter?.includes(category)) {
              // Remove category from filter
              setCategoryFilter(categoryFilter.filter((cat) => cat !== category));
            } else {
              // Add category to filter
              setCategoryFilter([...(categoryFilter || []), category]);
            }
          };

          const isSelected = categoryFilter?.includes(category);

          return (
            <button key={category} onClick={handleCategoryFilter}>
              <Badge
                key={category}
                text={category}
                className={isSelected ? "opacity-90" : "opacity-40 hover:opacity-75 transition-opacity"}
                quantity={categoryCounts[category]}
              />
            </button>
          );
        })}
      </ul>
      <div className="border-t border-gray-200 flex justify-center">
        <button
          onClick={() => {
            handleFilter();
            setOpenCategoryFilter(false);
          }}
          className="p-1 text-xs text-gray-400 hover:text-gray-50 hover:bg-blue-500 w-full transition-colors"
        >
          Apply filters
        </button>
        <button
          onClick={() => setCategoryFilter(null)}
          className="p-1 text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-full"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default CategoryMultipleSelect;
