import { Transaction, Category } from "../../types";

interface HandleFilterProps {
  categoryFilter: Category[] | null;
  transactions: Transaction[];
}
const filterCategories = ({ categoryFilter, transactions }: HandleFilterProps) => {
  /*
   Filter transactions by category
   e.g. given a 
      categoryFilter of ["food", "transport"] 
      transactions of [{ category: "food" }, { category: "transport" }, { category: "food" }]
   
   The function should return [{ category: "food" }, { category: "food" }]
*/
  let filteredTransactions = transactions;
  if (categoryFilter?.length !== 0) {
    // not empty
    filteredTransactions = transactions.filter((transaction: Transaction) =>
      categoryFilter?.includes(transaction.category)
    );
  }

  if (filteredTransactions.length === 0) {
    filteredTransactions = transactions;
  }

  return filteredTransactions;
};

export { filterCategories };
