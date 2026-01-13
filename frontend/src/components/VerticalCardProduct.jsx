import React, { useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayNARCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const VerticalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);
  const scrollElement = useRef();

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  return (
    <div className="w-full px-4 sm:px-10 lg:px-16 py-10">
      <section className="mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase text-gray-800">
          {heading || "Latest Collection"}
        </h2>
        <p className="text-gray-500 mt-2">Professional tools for your baking and decoration needs</p>
        <div className="w-16 sm:w-24 h-[2px] bg-gray-700 mx-auto mt-3"></div>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {loadingList.map((_, index) => (
            <div key={index} className="bg-white rounded-md shadow overflow-hidden">
              <div className="bg-gray-200 h-48 sm:h-56 animate-pulse"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data?.map((product, index) => (
            <Link to={`/product/${product?._id}`} key={index} className="group">
              <div className="bg-gray-100 rounded-md overflow-hidden flex items-center justify-center h-48 sm:h-56">
                <img
                  src={product?.productImage[0]}
                  alt={product?.productName}
                  className="h-full w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800 truncate">{product?.productName}</p>
              {product?.sellingPrice > 0 && (
                <div className="mt-1">
                  <span className="block text-xs sm:text-sm text-gray-500 line-through">
                    {displayNARCurrency(product?.price)}
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-gray-900">
                    {displayNARCurrency(product?.sellingPrice)}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
      </section>
    </div>
  );
};

export default VerticalCardProduct;
