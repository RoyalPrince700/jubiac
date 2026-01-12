import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchHotDealWise from '../helpers/fetchHotDealWise';
import displayNARCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const VerticalHotDealCard = ({ hotDeal, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const scrollElement = useRef();

  const fetchData = async () => {
    setLoading(true);
    const hotDealProduct = await fetchHotDealWise(hotDeal);
    setLoading(false);
    setData(hotDealProduct?.data);
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
    <div className="mx-auto px-4 my-4 relative">
      <h2 className="text-lg sm:text-xl font-semibold py-4">{heading}</h2>

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          className="bg-white shadow-md rounded-full p-2 absolute left-0 top-1/2 transform -translate-y-1/2 text-lg hidden md:block z-10"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-md rounded-full p-2 absolute right-0 top-1/2 transform -translate-y-1/2 text-lg hidden md:block z-10"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        {/* Card List */}
        <div
          className="flex items-center gap-2 sm:gap-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          ref={scrollElement}
        >
          {/* Loading Skeleton */}
          {loading
            ? loadingList.map((_, index) => (
                <div
                  key={index}
                  className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] max-w-[200px] bg-white rounded-md shadow h-[200px] flex flex-col"
                >
                  <div className="bg-gray-200 h-[120px] animate-pulse rounded-t-md"></div>
                  <div className="p-3 flex-1">
                    <div className="h-4 bg-gray-200 rounded-full animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-full animate-pulse w-3/4"></div>
                  </div>
                </div>
              ))
            : data.map((product, index) => (
                <Link
                  to={'/product/' + product?._id}
                  key={index}
                  className="min-w-[120px] sm:min-w-[150px] md:min-w-[200px] max-w-[200px] bg-white rounded-md shadow hover:shadow-lg transition-all h-auto flex flex-col"
                >
                  {/* Product Image */}
                  <div className="bg-gray-100 h-[120px] sm:h-[150px] flex justify-center items-center">
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
                    <div className="flex flex-col mt-1">
                      {product?.price > 0 && (
                        <p className="text-xs sm:text-sm text-gray-500 line-through">
                          {displayNARCurrency(product?.price)}
                        </p>
                      )}
                      {product?.sellingPrice > 0 && (
                        <p className="text-sm sm:text-base font-bold text-gray-900">
                          {displayNARCurrency(product?.sellingPrice)}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalHotDealCard;
