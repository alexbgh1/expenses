import { useCallback } from "react";

import { MoreVerticalIcon } from "@/app/icons/icons";
import Badge from "../Badge";

import { Transaction, FileHeader, SortOrder } from "@/app/types";

interface TablebodyTransactionProps {
  renderedTransactions: Transaction[];
  headerSelected: FileHeader | null;
  sortOrder: SortOrder;
}

const TableBodyTransaction = ({ renderedTransactions, headerSelected, sortOrder }: TablebodyTransactionProps) => {
  const handleSortTransactions = useCallback(
    (a: any, b: any) => {
      if (headerSelected) {
        // key: "category" -> no sort
        if (headerSelected === "category") {
          return 0;
        }
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

  return (
    <tbody className="[&_tr:last-child]:border-0">
      {renderedTransactions.sort(handleSortTransactions).map((transaction, index) => (
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
  );
};

export default TableBodyTransaction;
