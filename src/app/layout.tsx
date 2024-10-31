import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "../providers/theme-provider";
import { TransactionProvider } from "@/contexts/TransactionContext";
import NavLayout from "@/components/layouts/NavLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expenses",
  description: "Upload your expenses and see them organized by date, description, category, and price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <TransactionProvider>
            <NavLayout>{children}</NavLayout>
            <Toaster />
          </TransactionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
