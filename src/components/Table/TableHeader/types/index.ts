import { FileHeader, SortOrder, Transaction } from "@/app/types";

interface TableHeaderTransactionProps {
  transactions: Transaction[];
  sortOrder: SortOrder;
  handleSort: (key: FileHeader) => void;
  headerSelected: FileHeader | null;
  setRenderedTransactions: (transactions: Transaction[]) => void;
}

interface TableHeaderItemProps {
  header: FileHeader;
  transactions: Transaction[];
  handleSort: (key: FileHeader) => void;
  sortOrder: SortOrder;
  isHeaderSelected: boolean;
  setRenderedTransactions: (transactions: Transaction[]) => void;
}

interface TableHeaderCategoryProps {
  transactions: Transaction[];
  handleSort: (key: FileHeader) => void;
  setOpenCategoryFilter: (open: boolean) => void;
  sortOrder: SortOrder;
  isHeaderSelected: boolean;
  openCategoryFilter: boolean;
  setRenderedTransactions: (transactions: Transaction[]) => void;
}

export type { TableHeaderTransactionProps, TableHeaderItemProps, TableHeaderCategoryProps };
