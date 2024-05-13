"use client";
import { useState } from "react";
import { useOrder } from "../../hooks/useOrder";

import TableHeaderTransaction from "./TableHeader/TableHeaderTransaction";
import TableBodyTransaction from "./TableBodyTransaction";

import { Transaction } from "@/app/types";

interface TableTransactionsProps {
  transactions: Transaction[];
}

const TableTransactions = ({ transactions }: TableTransactionsProps) => {
  const { sortOrder, headerSelected, handleSort, handleSortTransactions } = useOrder();
  const [renderedTransactions, setRenderedTransactions] = useState([...transactions]);

  return (
    <>
      <table className="min-w-full w-auto min-h-96 table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-zinc-300">
        <TableHeaderTransaction
          sortOrder={sortOrder}
          handleSort={handleSort}
          headerSelected={headerSelected}
          transactions={transactions}
          setRenderedTransactions={setRenderedTransactions}
        />
        <TableBodyTransaction
          renderedTransactions={renderedTransactions}
          handleSortTransactions={handleSortTransactions}
        />
      </table>
    </>
  );
};

export default TableTransactions;
