"use client";
import { useEffect, useState } from "react";
import { useOrder } from "../../hooks/useOrder";

import TableHeaderTransaction from "./TableHeader/TableHeaderTransaction";
import TableBodyTransaction from "./TableBodyTransaction";

import { Transaction } from "@/app/types";

interface TableTransactionsProps {
  transactions: Transaction[];
}

const TableTransactions = ({ transactions }: TableTransactionsProps) => {
  const { sortOrder, headerSelected, handleSort, handleSortTransactions } = useOrder();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [renderedTransactions, setRenderedTransactions] = useState([...transactions.sort(handleSortTransactions)]);
  const currentTransactions = renderedTransactions.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="flex justify-end items-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={renderedTransactions.length < itemsPerPage}
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
