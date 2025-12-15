import { categoryList } from "../data/categoryList";
import { products } from "../data/products";

const AllCategories = () => {
  const getCategoryImage = (categoryId) => {
    const product = products.find((item) => item.categoryId === categoryId);
    return product ? product.image : "";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-6">All categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer group"
          >
            <img
              src={getCategoryImage(category.id)}
              alt={category.name}
              className="w-full h-[150px] object-cover group-hover:scale-105 transition"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end">
              <p className="text-white font-medium p-3 text-sm">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
