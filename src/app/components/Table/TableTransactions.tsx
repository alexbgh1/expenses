"use client";
import { useState } from "react";

import TableHeaderTransaction from "./TableHeaderTransaction";
import TableBodyTransaction from "./TableBodyTransaction";

import { Transaction, FileHeader, SortOrder } from "@/app/types";

interface TableTransactionsProps {
  transactions: Transaction[];
}

const TableTransactions = ({ transactions }: TableTransactionsProps) => {
  const [headerSelected, setHeaderSelected] = useState<FileHeader | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const [renderedTransactions, setRenderedTransactions] = useState([...transactions]);

  return (
    <>
      <table className="min-w-full w-auto min-h-96 table-fixed text-sm text-left rtl:text-right text-gray-500">
        <TableHeaderTransaction
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          headerSelected={headerSelected}
          setHeaderSelected={setHeaderSelected}
          transactions={transactions}
          setRenderedTransactions={setRenderedTransactions}
        />
        <TableBodyTransaction
          renderedTransactions={renderedTransactions}
          headerSelected={headerSelected}
          sortOrder={sortOrder}
        />
      </table>
    </>
  );
};

export default TableTransactions;
