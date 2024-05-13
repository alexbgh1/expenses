import { useState, useEffect } from "react";

import ArrowSort from "../ArrowSort";
import { FilterIcon } from "@/app/icons/icons";
import CategoryMultipleSelect from "../CategoryMultipleSelect";

import { filterCategories } from "../../../utils/Category/filterCategories";
import { countEachCategory } from "../../../utils/Category/countEachCategory";

import { Category } from "@/app/types";
import { TableHeaderCategoryProps } from "./types";

const TableHeaderCategory = ({
  transactions,
  handleSort,
  setOpenCategoryFilter,
  sortOrder,
  openCategoryFilter,
  setRenderedTransactions,
}: TableHeaderCategoryProps) => {
  const [categoryFilter, setCategoryFilter] = useState<Category[] | null>(null);
  const categoryCounts = countEachCategory(transactions);

  useEffect(() => {
    handleFilter();
  }, [transactions]);

  const handleFilter = () => {
    const filteredTransactions = filterCategories({ categoryFilter, transactions });
    setRenderedTransactions(filteredTransactions);
  };

  return (
    <th className="relative h-12 px-4 py-2">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => {
            handleSort("category");
            setOpenCategoryFilter(false);
          }}
          className="flex items-center justify-between w-full"
        >
          <span className="capitalize">category</span>
          <span className="text-xs">
            <ArrowSort type="string" sortOrder={sortOrder} className="dark:fill-zinc-300" />
          </span>
        </button>
        <button
          className="px-1 py-2 dark:hover:bg-zinc-800 hover:bg-gray-200 [&>svg]:hover:fill-gray-600 dark:[&>svg]:hover:fill-zinc-300"
          onClick={() => setOpenCategoryFilter(!openCategoryFilter)}
        >
          <FilterIcon className="w-3 h-3 fill-gray-500 dark:fill-zinc-400" />
        </button>
      </div>
      <CategoryMultipleSelect
        open={openCategoryFilter}
        setOpenCategoryFilter={setOpenCategoryFilter}
        handleFilter={handleFilter}
        categoryCounts={categoryCounts}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
    </th>
  );
};

export default TableHeaderCategory;
