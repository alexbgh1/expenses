import Header from "../../components/Header/Header";
import NavigationMain from "../../components/Navigation/NavigationMain";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="text-black dark:bg-zinc-90 dark:text-white flex min-h-screen">
        <NavigationMain />
        {children}
      </main>
    </>
  );
}
