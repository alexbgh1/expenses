"use client";

import { useTransactionContext } from "../../contexts/TransactionContext";

const page = () => {
  const { transactions } = useTransactionContext();
  return <div>page</div>;
};

export default page;
