import { MoreVerticalIcon } from "@/app/icons/icons";
import Badge from "../Badge";

import { Transaction } from "@/app/types";

interface TablebodyTransactionProps {
  currentTransactions: Transaction[];
}

const TableBodyTransaction = ({ currentTransactions }: TablebodyTransactionProps) => {
  return (
    <tbody className="[&_tr:last-child]:border-0">
      {currentTransactions.map((transaction, index) => (
        <tr
          key={index}
          className="text-gray-700 dark:text-zinc-400 dark:hover:bg-zinc-900 hover:bg-gray-50 dark:border-zinc-600 border-b transition-colors"
        >
          <td className="px-4 py-2">{transaction.date}</td>
          <td className="px-4 py-2">
            {transaction.description.charAt(0).toUpperCase() + transaction.description.slice(1)}
          </td>
          <td className="px-4 py-2">
            <Badge emoji={transaction.categoryEmoji} text={transaction.category} />
          </td>
          <td className="text-right px-4 py-2">{transaction.price}</td>
          <td className="px-4 py-2">
            <button className="relative hover:text-gray-800 dark:text-gray-300 dark:hover:bg-zinc-800 hover:bg-gray-200 py-2 px-1">
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
