"use client";
import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { toast } from "../components/ui/use-toast";
import { Transaction } from "@/types/transaction";
import readExpectedFile from "../utils/File/expectedFile";
import useLocalStorage from "../hooks/useLocalStorage";

interface TransactionContextProps {
  file: File | null;
  setFile: (file: File | null) => void;
  transactions: Transaction[];
}

const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransactionContext must be used within a TransactionProvider");
  }
  return context;
};

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [file, setFile] = useState<File | null>(null);
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>("transactions", []);

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

  return <TransactionContext.Provider value={{ file, setFile, transactions }}>{children}</TransactionContext.Provider>;
};
