import MenuHeader from "./MenuHeader";
import MenuNavigation from "./MenuNavigation";
const NavigationMain = () => {
  return (
    <aside className="hidden sm:flex min-w-52 dark:bg-zinc-950 bg-gray-100 flex-col items-center">
      <MenuHeader />
      <MenuNavigation />
    </aside>
  );
};

export default NavigationMain;
