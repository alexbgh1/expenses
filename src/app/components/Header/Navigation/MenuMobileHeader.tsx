import { XIcon } from "@/app/icons/icons";

interface MenuMobileHeaderProps {
  handleOpen: () => void;
}
const MenuMobileHeader = ({ handleOpen }: MenuMobileHeaderProps) => {
  return (
    <section className="relative flex pl-6 pr-10 py-8 pb-4">
      <div className="flex items-center gap-2">
        <button className="absolute right-0 pr-4" onClick={handleOpen}>
          <XIcon className="w-6 h-6 " />
        </button>
        <div className="h-8 w-8 bg-gray-300 rounded-sm"></div>
        <h2 className="text-xl font-semibold">Alex</h2>
      </div>
    </section>
  );
};

export default MenuMobileHeader;
