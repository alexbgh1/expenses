import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "../providers/theme-provider";
import { TransactionProvider } from "@/contexts/TransactionContext";
import NavLayout from "@/components/layouts/NavLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
