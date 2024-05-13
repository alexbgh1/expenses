"use client";
import { useState, useCallback } from "react";
import { FileHeader, SortOrder } from "@/types";

const useOrder = () => {
  const [headerSelected, setHeaderSelected] = useState<FileHeader | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const handleSort = (key: FileHeader) => {
    // Sort transactions
    if (key === headerSelected) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setHeaderSelected(key);
      setSortOrder("asc");
    }
  };

  const handleSortTransactions = useCallback(
    (a: any, b: any) => {
      if (headerSelected) {
        if (sortOrder === "asc") {
          return a[headerSelected] > b[headerSelected] ? 1 : -1;
        } else {
          return a[headerSelected] < b[headerSelected] ? 1 : -1;
        }
      }
      return 0;
    },
    [headerSelected, sortOrder]
  );

  return {
    sortOrder,
    handleSort,
    headerSelected,
    handleSortTransactions,
  };
};

export { useOrder };
