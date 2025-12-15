import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BiCategory } from "react-icons/bi";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.webp'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
 

  const navigation = (path) => {
    navigate(path);
    setMenuOpen(false); 
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 py-4 ">
      <div className="mx-auto max-w-7xl px-7">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={()=>navigate("/")}>
            <img
              src={Logo}
              alt="Pizza Heist"
              className="h-10 w-10 sm:h-14 sm:w-14 rounded-lg"
            />
            <span className="text-lg sm:text-xl font-semibold " >
              Pizza Heist
            </span>
          </div>

         <div className="hidden md:flex mx-6 w-full max-w-md">
  <input
    type="text"
    placeholder="Search for products..."
    className="w-full rounded-md border border-gray-300 bg-gray-100
               px-4 py-2 text-sm lg:text-base
               focus:outline-none focus:border-gray-500"
  />
</div>


          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base font-medium text-gray-700">
            <button className="flex items-center gap-2 px-4 py-1 rounded-2xl hover:bg-gray-200">
              <BiCategory className="text-lg" />

              <Link to="/categories" className="flex items-center gap-1">
                Categories
              </Link>
            </button>

            <button className="flex items-center gap-2 px-4 py-1 rounded-2xl hover:bg-gray-200">
              <FiShoppingCart className="text-lg" />
             <Link to="/cart">Cart</Link>
            </button>

            <button className="flex items-center gap-2 px-4 py-1 rounded-2xl hover:bg-gray-200">
              <FiUser className="text-lg" />
              Account
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        <div className="md:hidden py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm focus:outline-none"
          />
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 pb-4 text-gray-700 font-medium">
            <button className="px-4 py-2 rounded-lg hover:bg-gray-200 text-left"
             onClick={() => navigation("/categories")}
            >
              Categories
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-200 text-left"
             onClick={() => navigation("/cart")}
            >
              Cart
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-200 text-left">
              Account
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
