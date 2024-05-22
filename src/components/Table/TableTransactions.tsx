"use client";
import { useEffect, useState } from "react";
import { useOrder } from "../../hooks/useOrder";
import { usePagination } from "@/hooks/usePagination";

import { useTransactionContext } from "../../contexts/TransactionContext";

import TableHeaderTransaction from "./TableHeader/TableHeaderTransaction";
import TableBodyTransaction from "./TableBodyTransaction";

import { Transaction } from "@/types";

const TableTransactions = () => {
  const { sortOrder, headerSelected, handleSort, handleSortTransactions } = useOrder();
  const { transactions } = useTransactionContext();

  const [renderedTransactions, setRenderedTransactions] = useState([...transactions.sort(handleSortTransactions)]);
  const [currentTransactions, setCurrentTransactions] = useState<Transaction[]>([]);

  const { currentPage, goToNextPage, goToPrevPage, indexOfLastItem } = usePagination({
    items: renderedTransactions,
    itemsPerPage: 10,
  });

  useEffect(() => {
    // Sort and then slice the transactions
    let currentItems = renderedTransactions.sort(handleSortTransactions);
    currentItems = renderedTransactions.slice(indexOfLastItem - 10, indexOfLastItem);
    setCurrentTransactions(currentItems);
  }, [currentPage, renderedTransactions, sortOrder, headerSelected]);

  return (
    <>
      <div className="flex justify-end items-center space-x-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={indexOfLastItem >= renderedTransactions.length}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
      <table className="min-w-full w-auto min-h-96 table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-zinc-300">
        <TableHeaderTransaction
          sortOrder={sortOrder}
          handleSort={handleSort}
          headerSelected={headerSelected}
          transactions={transactions}
          setRenderedTransactions={setRenderedTransactions}
        />
        <TableBodyTransaction currentTransactions={currentTransactions} />
      </table>
    </>
  );
};

export default TableTransactions;
