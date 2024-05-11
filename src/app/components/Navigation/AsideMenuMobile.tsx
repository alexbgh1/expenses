import MenuHeader from "./MenuHeader";
import MenuNavigation from "./MenuNavigation";

interface AsideMenuMobileProps {
  isOpen?: boolean;
  handleOpen?: () => void;
}
const AsideMenuMobile = ({ isOpen, handleOpen }: AsideMenuMobileProps) => {
  return (
    <aside
      style={{ transform: `translateX(${isOpen ? "0%" : "-100%"})` }}
      className="w-56 transition-transform duration-[350ms] dark:bg-zinc-950 dark:text-gray-200 text-gray-800 bg-gray-100 h-screen fixed top-0 left-0 z-50"
    >
      <MenuHeader handleOpen={handleOpen} />
      <MenuNavigation />
    </aside>
  );
};

export default AsideMenuMobile;
