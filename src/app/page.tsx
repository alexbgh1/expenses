"use client";
import { useEffect, useState } from "react";

import { toast } from "./components/ui/use-toast";

import Header from "./components/Header/Header";
import NavigationMain from "./components/Navigation/NavigationMain";
import DragAndDropFile from "./components/DragAndDropFile";
import TableTransactions from "./components/Table/TableTransactions";

import { Transaction } from "./types/transaction";

import readExpectedFile from "./utils/File/expectedFile";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Almacena los datos analizados del archivo CSV

  useEffect(() => {
    const handleFile = async () => {
      if (file) {
        try {
          const transactions = await readExpectedFile(file);
          setTransactions(transactions);
          toast({
            title: "Archivo cargado",
            variant: "success",
            description: "El archivo se cargó correctamente.",
            duration: 3500,
          });
        } catch (error) {
          if (error instanceof Error) {
            toast({
              title: "Error",
              variant: "destructive",
              description: error.message,
              duration: 3500,
            });
          } else {
            console.error("Error desconocido:", error);
            toast({
              title: "Error",
              variant: "destructive",
              description: "Ocurrió un error desconocido. Por favor, inténtalo de nuevo.",
              duration: 3500,
            });
          }
        }
      }
    };
    handleFile();
  }, [file]);

  return (
    <>
      <Header />
      <main className="text-black dark:bg-zinc-90 dark:text-white flex min-h-screen">
        <NavigationMain />

        <div className="flex-1 p-6 h-full overflow-y-auto">
          <DragAndDropFile acceptedTypes={["csv", "txt"]} setFile={setFile} />
          <h1 className="pt-2 pb-4 text-lg">Transactions</h1>
          <div className="h-full overflow-x-auto">
            <TableTransactions transactions={transactions} />
          </div>
        </div>
      </main>
    </>
  );
}
