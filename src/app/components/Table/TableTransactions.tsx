"use client";
import { useState, useMemo } from "react";

import { MoreVerticalIcon } from "@/app/icons/icons";
import Badge from "../Badge";

import { FILE_HEADERS } from "@/app/constants/file";
import { CATEGORIES } from "@/app/constants/categories";

import { FileHeader } from "@/app/types/file";
import { Category } from "@/app/types/categories";

interface TableTransactionsProps {
  transactions: any[];
}

const TableTransactions = ({ transactions }: TableTransactionsProps) => {
  const [headerSelected, setHeaderSelected] = useState<FileHeader | null>(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState<Category[] | null>(null);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);

  const categoryCounts = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      const category = transaction.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<Category, number>);
  }, [transactions]);

  const handleSort = (key: FileHeader) => {
    if (key === "category") {
      setOpenCategoryFilter(!openCategoryFilter);
      setHeaderSelected(key);
      return;
    }
    if (key === headerSelected) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setHeaderSelected(key);
      setSortOrder("asc");
    }
    setOpenCategoryFilter(false);
  };

  return (
    <>
      <table className="min-w-full w-auto min-h-96 table-fixed text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs font-light hover:bg-gray-50">
          <tr className="border-b transition-colors">
            <th className="h-12 px-4 py-2">
              <button onClick={() => handleSort("date")} className="flex items-center justify-between w-full">
                <span className="capitalize">date</span>
                {headerSelected === "date" && <span className="text-xs">{sortOrder === "asc" ? "▲" : "▼"}</span>}
              </button>
            </th>

            <th className="h-12 px-4 py-2">
              <button onClick={() => handleSort("description")} className="flex items-center justify-between w-full">
                <span className="capitalize">description</span>
                {headerSelected === "description" && <span className="text-xs">{sortOrder === "asc" ? "▲" : "▼"}</span>}
              </button>
            </th>

            <th className="relative h-12 px-4 py-2">
              <button onClick={() => handleSort("category")} className="flex items-center justify-between w-full">
                <span className="capitalize">category</span>
              </button>
              <CategoryMultipleSelect
                open={openCategoryFilter}
                categoryCounts={categoryCounts}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              />
            </th>

            <th className="h-12 px-4 py-2">
              <button onClick={() => handleSort("price")} className="flex items-center justify-between w-full">
                <span className="capitalize">price</span>
                {headerSelected === "price" && <span className="text-xs">{sortOrder === "asc" ? "▲" : "▼"}</span>}
              </button>
            </th>

            <th className="relative h-12 px-4 py-2">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {transactions.map((transaction, index) => (
            <tr key={index} className="text-gray-700 hover:bg-gray-50 border-b transition-colors">
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">
                {transaction.description.charAt(0).toUpperCase() + transaction.description.slice(1)}
              </td>
              <td className="px-4 py-2">
                <Badge emoji={transaction.categoryEmoji} text={transaction.category} />
              </td>
              <td className="text-right px-4 py-2">{transaction.price}</td>
              <td className="px-4 py-2">
                <button className="relative hover:text-gray-800 hover:bg-gray-200 py-2 px-1">
                  <MoreVerticalIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

interface CategoryMultipleSelectProps {
  open: boolean;
  categoryCounts: Record<Category, number>;
  categoryFilter: Category[] | null;
  setCategoryFilter: (category: Category[] | null) => void;
}

const CategoryMultipleSelect = ({
  open,
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
        <button className="p-1 text-xs text-gray-400 hover:text-gray-50 hover:bg-blue-500 w-full transition-colors">
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

export default TableTransactions;
