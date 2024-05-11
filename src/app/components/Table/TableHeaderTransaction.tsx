import { useEffect, useState, useMemo } from "react";

import CategoryMultipleSelect from "./CategoryMultipleSelect";
import ArrowSort from "./ArrowSort";
import { FilterIcon } from "@/app/icons/icons";

import { Transaction, Category, FileHeader, SortOrder } from "@/app/types";

interface TableHeaderTransactionProps {
  transactions: Transaction[];
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  headerSelected: FileHeader | null;
  setHeaderSelected: (header: FileHeader) => void;
  setRenderedTransactions: (transactions: Transaction[]) => void;
}
const TableHeaderTransaction = ({
  transactions,
  sortOrder,
  setSortOrder,
  headerSelected,
  setHeaderSelected,
  setRenderedTransactions,
}: TableHeaderTransactionProps) => {
  const [categoryFilter, setCategoryFilter] = useState<Category[] | null>(null);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);

  useEffect(() => {
    handleFilter();
  }, [transactions]);

  const handleFilter = () => {
    let filteredTransactions = transactions;
    if (categoryFilter?.length !== 0) {
      // not empty
      filteredTransactions = transactions.filter((transaction: Transaction) =>
        categoryFilter?.includes(transaction.category)
      );
    }

    if (filteredTransactions.length === 0) {
      filteredTransactions = transactions;
    }
    setRenderedTransactions(filteredTransactions);
  };

  const categoryCounts = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      const category = transaction.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<Category, number>);
  }, [transactions]);

  const handleSort = (key: FileHeader) => {
    // Sort transactions
    if (key === headerSelected) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setHeaderSelected(key);
      setSortOrder("asc");
    }
    setOpenCategoryFilter(false);
  };

  //TODO: Refactor and try to improve redundancy
  return (
    <thead className="text-xs font-light hover:bg-gray-50 dark:hover:bg-zinc-900">
      <tr className="border-b transition-colors">
        <th className="h-12 px-4 py-2">
          <button onClick={() => handleSort("date")} className="flex items-center justify-between w-full">
            <span className="capitalize">date</span>
            {headerSelected === "date" && (
              <span className="text-xs">
                <ArrowSort type="string" sortOrder={sortOrder} className="dark:fill-zinc-300" />
              </span>
            )}
          </button>
        </th>

        <th className="h-12 px-4 py-2">
          <button onClick={() => handleSort("description")} className="flex items-center justify-between w-full">
            <span className="capitalize">description</span>
            {headerSelected === "description" && (
              <span className="text-xs">
                <ArrowSort type="string" sortOrder={sortOrder} className="dark:fill-zinc-300" />
              </span>
            )}
          </button>
        </th>

        <th className="relative h-12 px-4 py-2">
          <div className="flex items-center justify-between w-full">
            <button onClick={() => handleSort("category")} className="flex items-center justify-between w-full">
              <span className="capitalize">category</span>
              {headerSelected === "category" && (
                <span className="text-xs">
                  <ArrowSort type="string" sortOrder={sortOrder} className="dark:fill-zinc-300" />
                </span>
              )}
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

        <th className="h-12 px-4 py-2">
          <button onClick={() => handleSort("price")} className="flex items-center justify-between w-full">
            <span className="capitalize">price</span>
            {headerSelected === "price" && (
              <span className="text-xs">
                <ArrowSort type="number" sortOrder={sortOrder} className="dark:fill-zinc-300" />
              </span>
            )}
          </button>
        </th>

        <th className="relative h-12 px-4 py-2">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeaderTransaction;
