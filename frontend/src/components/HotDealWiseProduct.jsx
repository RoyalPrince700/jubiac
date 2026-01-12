import React, { useEffect, useState } from 'react';
import fetchHotDealWiseProduct from '../helpers/fetchHotDealWise';
import displayNARCurrency from '../helpers/displayCurrency';
import { Link } from 'react-router-dom';
import scrollTop from '../helpers/scrollTop';

const HotDealWiseDisplay = ({ hotDeal, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(6).fill(null);

  const fetchData = async () => {
    setLoading(true);
    const hotDealProduct = await fetchHotDealWiseProduct(hotDeal);
    setLoading(false);
    setData(hotDealProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 my-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black py-4">{heading}</h2>

      {/* Product List */}
      <div className="flex items-stretch gap-6 overflow-x-scroll no-scrollbar">
        {loading
          ? loadingList.map((_, index) => (
              <div
                key={index}
                className="w-full min-w-[250px] bg-white rounded-lg shadow-md animate-pulse"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center rounded-t-lg"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            ))
          : data.map((product) => (
              <Link
                key={product?._id}
                to={`/product/${product?._id}`}
                className="w-full min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={scrollTop}
              >
                {/* Image */}
                <div className="bg-gray-100 h-48 flex items-center justify-center rounded-t-lg">
                  <img
                    src={product?.productImage[0]}
                    alt={product?.productName}
                    loading="lazy"
                    className="object-contain h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <p className="font-semibold text-lg text-black truncate">
                    {product?.productName}
                  </p>
                  <p className="text-gray-500 capitalize mt-1">
                    {product?.hotDeal}
                  </p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500 line-through">
                      {displayNARCurrency(product?.price)}
                    </p>
                    <p className="text-lg font-bold text-black">
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

export default HotDealWiseDisplay;
