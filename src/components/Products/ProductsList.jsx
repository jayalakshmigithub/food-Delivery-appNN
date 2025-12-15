// import React from "react";
// import { products } from "../../data/products";
// import { categoryList } from "../../data/categoryList";

// const ProductList = ({ activeCategoryId, addToCart }) => {
//   const filteredProducts = products.filter(
//     (product) => product.categoryId === activeCategoryId
//   );
//   const activeCategory = categoryList.find(
//     (cat) => cat.id === activeCategoryId
//   );

//   return (
//     <div className="space-y-4 border-r border-r-gray-300 border-l border-l-gray-300">
//       <div className="sticky top-0 bg-white z-10 p-3 border-b ">
//         <h2 className="text-lg font-semibold">
//           {activeCategory?.name} -{" "}
//           <span className="bg-blue-700 px-2 text-white rounded-md">
//             {filteredProducts.length}{" "}
//           </span>
//         </h2>
//       </div>

//       {filteredProducts.length === 0 ? (
//         <p className="text-gray-500">No products found</p>
//       ) : (
//         filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4
//                        bg-white rounded-lg border-b border-b-gray-300"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="h-16 w-16 sm:h-20 sm:w-20 rounded-md object-cover flex-shrink-0"
//             />

//             <div className="flex-1">
//               <h3 className="text-sm sm:text-base font-medium">
//                 {product.name}
//               </h3>

//               <div className="flex items-center gap-2 mt-1">
//                 <span className="font-semibold text-sm sm:text-base">
//                   {"\u20B9"}
//                   {product.price}
//                 </span>

//                 {product.originalPrice && (
//                   <span className="text-xs sm:text-sm text-gray-400 line-through">
//                     {"\u20B9"}
//                     {product.originalPrice}
//                   </span>
//                 )}
//               </div>
//             </div>

//             <button
//               onClick={() => addToCart(product)}
//               className="self-center rounded border border-blue-500
//              px-3 sm:px-4 py-1 text-xs sm:text-sm
//              text-blue-500 hover:bg-blue-50 whitespace-nowrap"
//             >
//               ADD +
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ProductList;







import React, { useContext } from "react";
import { products } from "../../data/products";
import { categoryList } from "../../data/categoryList";
import CartContext from "../../context/cartContext.js";
import { useRef , useEffect } from "react";

// const ProductList = ({ activeCategoryId }) => {
//   const { addToCart } = useContext(CartContext);

//   const filteredProducts = products.filter(
//     (product) => product.categoryId === activeCategoryId
//   );

//   const activeCategory = categoryList.find(
//     (cat) => cat.id === activeCategoryId
//   );

//   return (
//     <div className="space-y-4">
//       <div className="sticky top-0 bg-white z-10 p-3">
//         <h2 className="text-lg font-semibold">
//           {activeCategory?.name}
//           <span className="ml-2 bg-blue-700 px-2 text-white rounded-md text-sm ">
//             {filteredProducts.length}
//           </span>
//         </h2>
//       </div>

//       {filteredProducts.map((product) => (
//         <div
//           key={product.id}
//           className="flex items-center gap-4 p-4 bg-white border-b border-b-gray-300 rounded-lg"
//         >
//           <img
//             src={product.image}
//             className="h-20 w-20 object-cover rounded"
//           />

//           <div className="flex-1">
//             <p className="font-medium">{product.name}</p>
//             <p>
//               {"\u20B9"}{product.price}
//               {product.originalPrice && (
//                 <span className="ml-2 line-through text-gray-400">
//                   {"\u20B9"}{product.originalPrice}
//                 </span>
//               )}
//             </p>
//           </div>

//           <button
//             onClick={() => addToCart(product)}
//             className="border border-blue-500 px-4 py-1 rounded text-blue-500"
//           >
//             ADD +
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

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

                  <button
                    onClick={() => addToCart(product)}
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

