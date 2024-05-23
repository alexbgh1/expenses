import { Transaction } from "@/types";

type CategoryTotal = {
  [key: string]: number;
};

const transactionPriceByCategory = (transactions: Transaction[]) => {
  const categoryTotal: CategoryTotal = {};
  // [{ category: "Comida", total: 100 }, { category: "Comida", total: 200 }]
  transactions.forEach((transaction) => {
    if (!categoryTotal[transaction.category]) {
      categoryTotal[transaction.category] = 0;
    }
    categoryTotal[transaction.category] += transaction.price;
  });

  // Convert object to array
  // [{ category: "Comida", total: 300 }]
  const categoryTotalArray = Object.keys(categoryTotal).map((category) => ({
    category,
    total: categoryTotal[category],
  }));

  console.log(categoryTotalArray);

  return categoryTotalArray;
};

export { transactionPriceByCategory };
