import MenuMobileHeader from "./MenuMobileHeader";
import MenuMobileNavigation from "./MenuMobileNavigation";

interface MenuMobileProps {
  isOpen: boolean;
  handleOpen: () => void;
}
const MenuMobile = ({ isOpen, handleOpen }: MenuMobileProps) => {
  return (
    <aside
      style={{ transform: `translateX(${isOpen ? "0%" : "-100%"})` }}
      className="w-56 transition-transform duration-500 text-gray-800 bg-gray-100 h-screen fixed top-0 left-0 z-50"
    >
      <MenuMobileHeader handleOpen={handleOpen} />
      <MenuMobileNavigation />
    </aside>
  );
};

export default MenuMobile;
