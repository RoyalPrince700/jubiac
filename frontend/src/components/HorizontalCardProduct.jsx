import React, { useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayNARCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HorizontalCardProduct = ({ category, heading }) => {
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
    <div className="container mx-auto px-4 my-2 w-full relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>

      <div
        className="flex items-center gap-4 md:gap-3 overflow-scroll scrollbar-none transition-all"
        ref={scrollElement}
      >
        <button
          className="bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        {loading
          ? loadingList.map((_, index) => (
              <div
                key={index}
                className="w-full min-w-[400px] md:min-w-[400px] h-44 max-w-[400px] md:max-w-[420px] rounded-sm shadow flex bg-white animate-pulse overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] rounded-sm"></div>

                {/* Content placeholder */}
                <div className="p-4 grid w-full gap-3">
                  <div className="h-5 bg-slate-200 rounded-full"></div> {/* Product name placeholder */}
                  <div className="h-4 bg-slate-200 rounded-full w-1/2"></div> {/* Category placeholder */}

                  <div className="flex gap-3">
                    <div className="h-5 bg-slate-200 rounded-full w-1/3"></div> {/* Selling price placeholder */}
                    <div className="h-5 bg-slate-200 rounded-full w-1/4"></div> {/* Original price placeholder */}
                  </div>

                  <div className="h-8 bg-slate-200 rounded-full w-3/4"></div> {/* Button placeholder */}
                </div>
              </div>
            ))
          : data.map((product, index) => (
              <Link
                key={index}
                to={"product/" + product?._id}
                className="w-full min-w-[400px] md:min-w-[400px] h-44 max-w-[400px] md:max-w-[420px] rounded-sm shadow flex bg-white overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="bg-slate-100 h-full p-4 min-w-[120px] md:min-w-[145px] max-w-[200px]">
                  <img
                    src={product?.productImage[0]}
                    className="object-scale-down h-full hover:scale-110 transition-all"
                    alt={product?.productName}
                  />
                </div>

                <div className="p-4 grid w-full">
                  <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                    {product?.productName}
                  </h2>
                  {/* <p className="capitalize text-slate-500">{product?.category}</p> */}
                  <div className="flex flex-col">
                    <p className="text-slate-500 line-through">
                      {displayNARCurrency(product?.price)}
                    </p>
                    <p className="text-black font-medium text-xl">
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

export default HorizontalCardProduct;
