import { MoreVerticalIcon } from "@/app/icons/icons";
import Badge from "../Badge";

interface TableTransactionsProps {
  transactions: any[];
}

const TableTransactions = ({ transactions }: TableTransactionsProps) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs font-light hover:bg-gray-50">
        <tr className="border-b transition-colors">
          <th className="h-12 px-4 py-2">Date</th>
          <th className="h-12 px-4 py-2">Description</th>
          <th className="h-12 px-4 py-2">Category</th>
          <th className="text-right h-12 px-4 py-2">Price</th>
          <th className="h-12 px-4 py-2">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="[&_tr:last-child]:border-0">
        {transactions.map((transaction, index) => (
          <tr key={index} className="text-gray-700 hover:bg-gray-50 border-b transition-colors">
            <td className="px-4 py-2">{transaction.date}</td>
            <td className="px-4 py-2">{transaction.description}</td>
            <td className="px-4 py-2">
              <Badge emoji={transaction.categoryEmoji} text={transaction.category} />
            </td>
            <td className="text-right px-4 py-2">{transaction.price}</td>
            <td className="px-4 py-2">
              <button className="hover:text-gray-800 hover:bg-gray-200 py-2 px-1">
                <MoreVerticalIcon className="w-4 h-4" />
                <span className="sr-only">Edit</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableTransactions;
