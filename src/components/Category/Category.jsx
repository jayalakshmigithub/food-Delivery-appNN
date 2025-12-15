
import { categoryList } from '../../data/categoryList'

const Category = ({activeCategoryId, setActiveCategoryId,onSelect}) => {
  return (
        <div className="rounded-sm  bg-white">
      <ul >
        {categoryList.map((category) => (
          <li
            key={category.id}
          onClick={() => {
            setActiveCategoryId(category.id);
            onSelect?.(); 
          }}
            className={`flex items-center justify-between px-4  font-semibold py-2 text-md cursor-pointer
              ${
                category.id === activeCategoryId
                  ? "border-l-4 border-blue-600 bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
          >
            <span>{category.name}</span>
            <span className="text-md text-gray-600">
              ({category.count})
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
