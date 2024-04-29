import Header from "./components/Header/Header";
import NavigationMain from "./components/Header/Navigation/NavigationMain";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen">
        <NavigationMain />
        {/* <table>
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">2021-01-01</td>
            <td className="border px-4 py-2">Rent</td>
            <td className="border px-4 py-2">Housing</td>
            <td className="border px-4 py-2">$1000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2021-01-02</td>
            <td className="border px-4 py-2">Groceries</td>
            <td className="border px-4 py-2">Groceries</td>
            <td className="border px-4 py-2">$100</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2021-01-03</td>
            <td className="border px-4 py-2">Gas</td>
            <td className="border px-4 py-2">Transportation</td>
            <td className="border px-4 py-2">$50</td>
          </tr>
        </tbody>
      </table> */}
      </main>
    </>
  );
}
