import { FaTruck, FaWallet, FaHeadset } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white mt-12">
    
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
        <div className="flex flex-col items-center gap-2">
          <FaTruck size={28} className="text-orange-500" />
          <p className="font-semibold">Free delivery</p>
          <p className="text-sm text-gray-300">
            Delivery happens within: 30–60 minutes
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaWallet size={28} className="text-orange-500" />
          <p className="font-semibold">Payment options</p>
          <p className="text-sm text-gray-300">
            Cash on delivery & online payment
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaHeadset size={28} className="text-orange-500" />
          <p className="font-semibold">Customer support</p>
          <p className="text-sm text-gray-300">
            pizzaheist@gmail.com
          </p>
        </div>

      </div>

     
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
         {new Date().getFullYear()} Pizza Heist. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
