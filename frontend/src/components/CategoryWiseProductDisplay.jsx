import React, { useEffect, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayNARCurrency from '../helpers/displayCurrency';
import { Link } from 'react-router-dom';
import scrollTop from '../helpers/scrollTop';

const CategoryWiseProductDisplay = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-lg sm:text-xl font-semibold py-4">{heading}</h2>
      <div className="flex items-center gap-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {loading
          ? loadingList.map((_, index) => (
              <div
                key={index}
                className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] max-w-[200px] bg-white rounded-md shadow h-[200px] flex flex-col"
              >
                <div className="bg-gray-200 h-[120px] animate-pulse rounded-t-md"></div>
                <div className="p-3 flex-1">
                  <div className="h-4 bg-gray-200 animate-pulse rounded-full mb-2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse w-3/4"></div>
                </div>
              </div>
            ))
          : data.map((product, index) => (
              <Link
                to={`/product/${product?._id}`}
                key={index}
                className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] max-w-[200px] bg-white rounded-md shadow hover:shadow-lg transition-all h-auto flex flex-col"
                onClick={scrollTop}
              >
                {/* Product Image */}
                <div className="bg-gray-100 h-[120px] sm:h-[150px] flex justify-center items-center rounded-t-md">
                  <img
                    src={product?.productImage[0]}
                    alt={product?.productName}
                    className="object-contain h-full hover:scale-110 transition-transform mix-blend-multiply"
                  />
                </div>
                {/* Product Details */}
                <div className="p-2 flex-1 flex flex-col">
                  <p className="text-sm sm:text-base font-medium text-gray-800 truncate">
                    {product?.productName}
                  </p>
                  <p className="capitalize text-gray-500">{product?.category}</p>
                  <div className="flex flex-col mt-1">
                    {product?.price > 0 && (
                      <p className="text-xs sm:text-sm text-gray-500 line-through">
                        {displayNARCurrency(product?.price)}
                      </p>
                    )}
                    <p className="text-sm sm:text-base font-bold text-gray-900">
                      {displayNARCurrency(product?.sellingPrice)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default CategoryWiseProductDisplay;
