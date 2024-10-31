"use client";
import { BarChart, DonutChart } from "@tremor/react";

import { CATEGORIES } from "@/constants/categories";
import { useTransactionContext } from "../../contexts/TransactionContext";
import { Transaction } from "@/types";

import { transactionPriceByCategory } from "@/utils/Transaction/transaction";
import WorkingInProgress from "@/components/WorkingInProgress";

const page = () => {
  const { transactions } = useTransactionContext();
  console.log(transactions);

  const categoryTotalArray = transactionPriceByCategory(transactions);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <WorkingInProgress text={"Esta página está en construcción"} />
      <div className="lex flex-col items-center justify-center w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <BarChart data={categoryTotalArray} index="category" categories={["total"]} colors={["blue"]} />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <DonutChart data={categoryTotalArray} index="category" category="total" variant="donut" />
        </div>
      </div>
    </div>
  );
};

export default page;
