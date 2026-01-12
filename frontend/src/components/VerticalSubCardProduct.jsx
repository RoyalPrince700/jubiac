import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import fetchSubCategoryWiseProduct from '../helpers/fetchSubCategoryWiseProduct';


import displayNARCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Context from '../context';
import { AiOutlineLike } from 'react-icons/ai';
import likedProduct from '../helpers/likedProduct';

const VerticalSubCardProduct = ({ category,subCategory, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const scrollElement = useRef();
  const { fetchUserLikedProduct } = useContext(Context);

  const handleLikedProduct = async (e, id) => {
    await likedProduct(e, id);
    fetchUserLikedProduct();
  };

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    const subCategoryProduct = await fetchSubCategoryWiseProduct(subCategory);
    setLoading(false);
    setData(categoryProduct?.data);
    setData(subCategoryProduct?.data);

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
    <div className='mx-auto px-4 my-2 relative'>
      <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

      <div
        className='flex items-center gap-4 md:gap-3 overflow-x-scroll scrollbar-none transition-all'
        ref={scrollElement}
      >
        <button
          className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block'
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block'
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        {loading
          ? loadingList.map((_, index) => (
              <div
                key={index}
                className='w-full min-w-[260px] md:min-w-[280px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow'
              >
                <div
                  className='bg-slate-200 h-48 flex justify-center items-center animate-pulse rounded-t-sm'
                ></div>
                <div className='p-4 grid gap-3'>
                  <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 bg-slate-200 p-2 rounded-full animate-pulse'></h2>
                  <p className='bg-slate-200 p-2 rounded-full animate-pulse'></p>
                  <div className='flex gap-3'>
                    <p className='bg-slate-200 w-full p-2 rounded-full animate-pulse'></p>
                    <p className='bg-slate-200 w-full p-2 rounded-full animate-pulse'></p>
                  </div>
                </div>
              </div>
            ))
          : data.map((product, index) => (
              <Link
                to={'product/' + product?._id}
                key={index}
                className='w-full min-w-[200px] md:min-w-[220px] max-w-[280px] md:max-w-[280px] bg-white rounded-sm shadow'
              >
                <div className='bg-slate-100 h-48 flex justify-center items-center'>
                  <img
                    src={product?.productImage[0]}
                    alt={product?.productName}
                    className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply'
                  />
                </div>
                <div className='p-4 grid gap-2'>
                  <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>
                    {product?.productName}
                  </h2>
                  {/* <p className='capitalize text-slate-500'>{product?.category}</p> */}
                  <div className="flex items-center space-x-2">
                    {/* Conditionally render price if it exists */}
                    {product?.price > 0 && (
                      <p className="text-slate-500 line-through">
                        {displayNARCurrency(product?.price)}
                      </p>
                    )}
                    {/* Conditionally render selling price if it exists */}
                    {product?.sellingPrice > 0 && (
                      <p className="text-red-600 font-semibold text-lg">
                        {displayNARCurrency(product?.sellingPrice)}
                      </p>
                    )}
                  </div>

                 
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default VerticalSubCardProduct;
