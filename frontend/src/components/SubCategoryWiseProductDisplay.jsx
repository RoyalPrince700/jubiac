import React, { useContext, useEffect, useState } from 'react';
import fetchSubCategoryWiseProduct from '../helpers/fetchSubCategoryWiseProduct';
import displayNARCurrency from '../helpers/displayCurrency';
import { Link } from 'react-router-dom';
import scrollTop from '../helpers/scrollTop';
import Context from '../context';
import addToCart from '../helpers/addToCart';
import { LiaCartPlusSolid } from 'react-icons/lia';

const SubCategoryWiseProductDisplay = ({ subCategory, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    e.preventDefault(); // Prevent navigation when button is clicked
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    setLoading(true);
    const subCategoryProduct = await fetchSubCategoryWiseProduct(subCategory);
    setLoading(false);

    console.log('horizontal data', subCategoryProduct.data);
    setData(subCategoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>
      <div
        className="flex flex-wrap items-start gap-4
        overflow-x-auto transition-all"
      >
        {loading
          ? loadingList.map((_, index) => (
              <div
                key={index}
                className="flex w-full max-w-sm bg-white rounded-lg shadow overflow-hidden animate-pulse"
              >
                <div className="w-1/3 bg-slate-200 h-24"></div>
                <div className="flex-1 p-4 space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                </div>
              </div>
            ))
          : data.map((product) => (
              <div
                key={product?._id}
                className="flex w-full max-w-sm bg-white rounded-lg shadow overflow-hidden 
                hover:shadow-md transition-shadow relative h-[60px]"
              >
                <Link
                  to={`/product/${product?._id}`}
                  className="flex w-full"
                  onClick={scrollTop}
                >
                  <div className="w-1/3 bg-slate-100 p-2 flex items-center justify-center">
                    <img
                      src={product?.productImage[0]}
                      alt={product?.productName || 'Product Image'}
                      className="object-cover h-[60px] rounded"
                    />
                  </div>
                  <div className="flex-1 px-4 py-2 ">
                    <h2 className="font-medium text-[12px] text-black truncate">
                      {product?.productName}
                    </h2>
                    <p className="text-slate-500 capitalize">
                      {product?.SubCategory}
                    </p>
                   
                    <div className="flex justify-between items-center space-x-2">
                    
                      {product?.price > 0 && (
                        <p className="text-slate-500 line-through">
                          {displayNARCurrency(product?.price)}
                        </p>
                      )}
                      {product?.sellingPrice > 0 && (
                        <p className="text-black font-semibold text-md">
                          {displayNARCurrency(product?.sellingPrice)}
                        </p>
                      )}
 
                      
                                        
                      <p className="text-slate-500 text-[10px] capitalize ">
                      {product?.productStatus}
                    </p>
                      
                    
                    </div>
                  </div>
                </Link>
                <button
                  className="absolute top-2 right-2 text-sm text-yellow-600 
                  hover:bg-yellow-700 hover:shadow-sm hover:text-white transition-all p-1
                  py-0.5 rounded-full"
                  onClick={(e) => handleAddToCart(e, product?._id)}
                >
                  <LiaCartPlusSolid className="text-xl" />
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SubCategoryWiseProductDisplay;
