"use client";
import { useState } from "react";
import ArrowSort from "../ArrowSort";
import TableHeaderCategory from "./TableHeaderCategory";

import { HEADER_TYPES } from "@/app/constants/file";
import { TableHeaderItemProps } from "./types";

const TableHeaderItem = ({
  header,
  handleSort,
  transactions,
  sortOrder,
  isHeaderSelected,
  setRenderedTransactions,
}: TableHeaderItemProps) => {
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);

  // Category is a special case
  if (header === "category") {
    return (
      <TableHeaderCategory
        transactions={transactions}
        setRenderedTransactions={setRenderedTransactions}
        handleSort={handleSort}
        setOpenCategoryFilter={setOpenCategoryFilter}
        sortOrder={sortOrder}
        openCategoryFilter={openCategoryFilter}
        isHeaderSelected={isHeaderSelected}
      />
    );
  }

  return (
    <th>
      <button
        onClick={() => {
          handleSort(header);
          setOpenCategoryFilter(false);
        }}
        className="h-12 px-4 py-2 flex items-center justify-between w-full"
      >
        <span className="capitalize">{header}</span>
        {isHeaderSelected && (
          <span className="text-xs">
            <ArrowSort type={HEADER_TYPES[header]} sortOrder={sortOrder} className="dark:fill-zinc-300" />
          </span>
        )}
      </button>
    </th>
  );
};

export default TableHeaderItem;
