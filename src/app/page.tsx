import FileUpload from "@/components/FileUpload";
import Header from "../components/Header/Header";
import NavigationMain from "../components/Navigation/NavigationMain";
import TableTransactions from "../components/Table/TableTransactions";

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-black dark:bg-zinc-90 dark:text-white flex min-h-screen">
        <NavigationMain />

        <div className="flex-1 p-6 h-full overflow-y-auto">
          <FileUpload />
          <h1 className="pt-2 pb-4 text-lg">Transactions</h1>
          <div className="h-full overflow-x-auto">
            <TableTransactions />
          </div>
        </div>
      </main>
    </>
  );
}
