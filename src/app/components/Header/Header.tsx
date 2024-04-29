import NavigationMobile from "./Navigation/NavigationMobile";

const Header = () => {
  return (
    <header className="bg-blue-500 px-6 text-white w-full h-22 flex items-center justify-start">
      {/* Navigation Burger */}
      <NavigationMobile />
      <h1 className="text-4xl font-bold text-center p-6">Expenses</h1>
    </header>
  );
};

export default Header;
