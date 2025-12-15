import { useState, useEffect } from "react";
import banner1 from "../assets/Banners/banner1.webp";
import banner2 from "../assets/Banners/banner2.webp";
import banner3 from "../assets/Banners/banner3.webp";
import Category from "../components/Category/Category";
import { categoryList } from "../data/categoryList";
import ProductList from "../components/Products/ProductsList";
import Cart from "../components/Cart/Cart";
import { BiCategory } from "react-icons/bi";

const Home = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(categoryList[0].id);
  const [showCategories, setShowCategories] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  });

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="w-full">
      <section className="w-full border-b border-gray-200">
  <div className="mx-auto max-w-7xl px-8 py-3">

   
    <div
      className="
        flex gap-4 overflow-x-auto scrollbar-hide
        sm:grid sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {[banner1, banner2, banner3].map((banner, index) => (
        <div
          key={index}
          className="
            min-w-[85%] sm:min-w-0
            aspect-[16/7]
            flex items-center justify-center
          "
        >
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      ))}
    </div>

  </div>
</section>

      <div className="max-w-7xl mx-auto mt-6 h-full px-4">
        <div className="grid grid-cols-12 gap-6 h-full">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <Category
                activeCategoryId={activeCategoryId}
                setActiveCategoryId={setActiveCategoryId}
              />
            </div>
          </aside>
          <section
            className="col-span-12 lg:col-span-6 overflow-y-auto h-full pr-2"
          >
            <ProductList
              activeCategoryId={activeCategoryId}
              addToCart={addToCart}
            />
          </section>

          <aside className=" hidden lg:block lg:col-span-3 bg-white rounded-lg p-2">
            <div className="sticky top-24 bg-white rounded-lg">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
          </aside>
        </div>
      </div>

      <button
        onClick={() => setShowCategories(true)}
        className="lg:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-50
                   bg-white border shadow-lg rounded-xl p-3"
      >
        <BiCategory className="text-lg" />
      </button>

      {showCategories && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4 max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold">Categories</h3>
              <button
                onClick={() => setShowCategories(false)}
                className="font-bold py-2"
              >
                ✕
              </button>
            </div>

            <Category
              activeCategoryId={activeCategoryId}
              setActiveCategoryId={setActiveCategoryId}
              onSelect={() => setShowCategories(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
