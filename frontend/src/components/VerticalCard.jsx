import React, { useContext } from 'react';
import scrollTop from '../helpers/scrollTop';
import displayNARCurrency from '../helpers/displayCurrency';
import Context from '../context';
import addToCart from '../helpers/addToCart';
import { Link } from 'react-router-dom';
import likedProduct from '../helpers/likedProduct';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { AiOutlineLike } from 'react-icons/ai';

const VerticalCard = ({ loading, data = [] }) => {
  const loadingList = new Array(13).fill(null);

  const { fetchUserAddToCart, fetchUserLikedProduct } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const handleLikedProduct = async (e, id) => {
    await likedProduct(e, id);
    fetchUserLikedProduct();
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 justify-center">
      {loading
        ? loadingList.map((_, index) => (
            <div
              key={index}
              className="min-w-[120px] sm:min-w-[150px] md:min-w-[200px] max-w-[200px] bg-white rounded-md shadow h-[200px] flex flex-col"
            >
              <div className="bg-gray-200 h-[120px] animate-pulse rounded-t-md"></div>
              <div className="p-3 flex-1">
                <div className="h-4 bg-gray-200 animate-pulse rounded-full mb-2"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-3/4"></div>
              </div>
            </div>
          ))
        : data.map((product) => (
            <Link
              to={`/product/${product?._id}`}
              key={product?._id}
              className="bg-white rounded-md shadow hover:shadow-lg transition-all h-auto flex flex-col"
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
  );
};



export default VerticalCard;
