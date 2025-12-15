
import { useContext } from "react";
import { products } from "../../data/products";
import { categoryList } from "../../data/categoryList";
import CartContext from "../../context/cartContext.js";
import { useRef , useEffect } from "react";
import toast from "react-hot-toast";




const ProductList = ({ activeCategoryId }) => {
  const categoryRefs = useRef({});
  const { addToCart } = useContext(CartContext);
  
  useEffect(() => {
    if (activeCategoryId && categoryRefs.current[activeCategoryId]) {
      categoryRefs.current[activeCategoryId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeCategoryId]);

  return (
    <div className="space-y-6">
      {categoryList.map((category) => {
        const categoryProducts = products.filter(
          (p) => p.categoryId === category.id
        );

        if (categoryProducts.length === 0) return null;

        return (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)}
          >
        
            <div className="sticky top-0 bg-white z-10 p-3 border-b">
              <h2 className="text-lg font-semibold">
                {category.name}
                <span className="ml-2 bg-blue-700 px-2 text-white rounded-md text-sm">
                  {categoryProducts.length}
                </span>
              </h2>
            </div>

         
            <div className="space-y-4 mt-3">
              {categoryProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-4 bg-white border-b border-gray-300 rounded-lg"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 object-cover rounded"
                  />

                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p>
                       {"\u20B9"}{product.price}
                      {product.originalPrice && (
                        <span className="ml-2 line-through text-gray-400">
                           {"\u20B9"}{product.originalPrice}
                        </span>
                      )}
                    </p>
                  </div>

                  {/* <button
                    onClick={() => addToCart(product)}
                    className="border border-blue-500 px-4 py-1 rounded text-blue-500"
                  >
                    ADD +
                  </button>
                   */}
                   <button
  onClick={() => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  }}
  className="border border-blue-500 px-4 py-1 rounded text-blue-500"
>
  ADD +
</button>

                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

