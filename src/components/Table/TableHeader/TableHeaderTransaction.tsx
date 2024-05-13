import TableHeaderItem from "./TableHeaderItem";

import { FILE_HEADERS } from "@/app/constants/file";

import { TableHeaderTransactionProps } from "./types";
const TableHeaderTransaction = ({
  transactions,
  handleSort,
  sortOrder,
  headerSelected,
  setRenderedTransactions,
}: TableHeaderTransactionProps) => {
  return (
    <thead className="text-xs font-light hover:bg-gray-50 dark:hover:bg-zinc-900">
      <tr className="border-b transition-colors">
        {/* FILE_HEADERS +  'Actions' (extra col) */}
        {FILE_HEADERS.map((header) => (
          <TableHeaderItem
            key={header}
            header={header}
            transactions={transactions}
            handleSort={handleSort}
            sortOrder={sortOrder}
            isHeaderSelected={headerSelected === header}
            setRenderedTransactions={setRenderedTransactions}
          />
        ))}

        <th className="relative h-12 px-4 py-2">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeaderTransaction;
