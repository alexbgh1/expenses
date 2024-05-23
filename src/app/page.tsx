import FileUpload from "@/components/FileUpload";
import TableTransactions from "../components/Table/TableTransactions";

export default function Home() {
  return (
    <>
      <div className="flex-1 p-6 h-full overflow-y-auto">
        <FileUpload />
        <h1 className="pt-2 pb-4 text-lg">Transactions</h1>
        <div className="h-full overflow-x-auto">
          <TableTransactions />
        </div>
      </div>
    </>
  );
}
