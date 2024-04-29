import Header from "./components/Header/Header";
import NavigationMain from "./components/Navigation/NavigationMain";
import TableTransactions from "./components/Table/TableTransactions";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen">
        <NavigationMain />
        <div className="flex-1 p-6 h-full overflow-y-auto">
          <h1 className="pt-2 pb-4 text-lg">Transactions</h1>
          <TableTransactions />
        </div>
      </main>
    </>
  );
}
