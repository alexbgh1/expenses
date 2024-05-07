"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import NavigationMain from "./components/Navigation/NavigationMain";
import DragAndDropFile from "./components/DragAndDropFile";
import TableTransactions from "./components/Table/TableTransactions";

import readExpectedFile from "./utils/expectedFile";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]); // Almacena los datos analizados del archivo CSV

  useEffect(() => {
    const handleFile = async () => {
      if (file) {
        try {
          const transactions = await readExpectedFile(file);
          console.log(transactions);
          setTransactions(transactions);
        } catch (error) {
          console.error(error);
        }
      }
    };
    handleFile();
  }, [file]);

  return (
    <>
      <Header />
      <main className="flex min-h-screen">
        <NavigationMain />
        <div className="flex-1 p-6 h-full overflow-y-auto">
          <div>
            <DragAndDropFile acceptedTypes={["csv", "txt"]} setFile={setFile} />
          </div>
          <h1 className="pt-2 pb-4 text-lg">Transactions</h1>
          <TableTransactions transactions={transactions} />
        </div>
      </main>
    </>
  );
}
