import Header from "./components/Header/Header";
import NavigationMain from "./components/Navigation/NavigationMain";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen">
        <NavigationMain />
        <Table />
      </main>
    </>
  );
}
