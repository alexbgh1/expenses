import { Transaction, Category } from "@/app/types";
import { useMemo } from "react";

const countEachCategory = (transactions: Transaction[]) =>
  /*
  Count each category and return an object with the category as key and the number of transactions as value
  e.g. { "food": 2, "transport": 1 }
  */
  useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      const category = transaction.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<Category, number>);
  }, [transactions]);

export { countEachCategory };
