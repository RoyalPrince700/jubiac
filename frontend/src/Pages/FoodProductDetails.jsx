import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SummaryApi from '../common';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import displayNARCurrency from '../helpers/displayCurrency';
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay';
import addToCart from '../helpers/addToCart';
import Context from '../context';

const FoodProductDetails = () => {
  const [data, setData] = useState({
    productName: '',
    brandName: '',
    category: '',
    productImage: [],
    description: '',
    price: '',
    sellingPrice: '',
    customizations: [] // Add customizations for food items
  });

  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const { fetchUserAddToCart } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const [selectedCustomizations, setSelectedCustomizations] = useState([]);

  // Fetch product details
  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ productId: params?.id })
    });

    setLoading(false);
    const dataResponse = await response.json();
    setData(dataResponse?.data);
    setActiveImage(dataResponse?.data.productImage[0]);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params]);

  const handleMouseEnterProduct = (imageURL) => setActiveImage(imageURL);

  const handleAddToCart = async (e, id) => {
    const cartPayload = {
      id,
      customizations: data.category === 'Food' ? selectedCustomizations : []
    };
    await addToCart(e, cartPayload);
    fetchUserAddToCart();
  };

  const handleBuyProduct = async (e, id) => {
    await handleAddToCart(e, id);
    navigate('/cart');
  };

  const handleCustomizationChange = (customization, checked) => {
    setSelectedCustomizations((prev) => {
      if (checked) return [...prev, customization];
      return prev.filter((item) => item !== customization);
    });
  };

  return (
    <div className="container mt-16 lg:mt-0 mx-auto p-4">
      <div className="min-h-[200px] flex flex-col lg:flex-row gap-4">
        {/* Product Image */}
        <div className="h-96 flex flex-col lg:flex-row-reverse gap-4">
          <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2">
            <img
              src={activeImage}
              className="h-full w-full object-scale-down mix-blend-multiply"
            />
          </div>

          <div className="h-full">
            {loading ? (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {[...Array(4)].map((_, index) => (
                  <div
                    className="h-20 w-20 bg-slate-200 rounded animate-pulse"
                    key={index}
                  ></div>
                ))}
              </div>
            ) : (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {data?.productImage?.map((imageURL, index) => (
                  <div
                    className="h-20 w-20 bg-slate-200 rounded p-1"
                    key={imageURL}
                  >
                    <img
                      src={imageURL}
                      className="w-full p-1 h-full object-scale-down mix-blend-multiply cursor-pointer"
                      onMouseEnter={() => handleMouseEnterProduct(imageURL)}
                      onClick={() => handleMouseEnterProduct(imageURL)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        {loading ? (
          <div className="grid w-full gap-1">
            {/* Loading Skeleton */}
            {/* Add skeleton placeholders */}
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <p className="bg-yellow-200 text-yellow-600 px-2 rounded-full inline-block w-fit">
              {data?.brandName}
            </p>
            <h2 className="text-2xl lg:text-4xl font-medium">
              {data?.productName}
            </h2>
            <p className="capitalize text-slate-400">{data?.category}</p>

            {/* Display customizations if category is 'Food' */}
            {data.category === 'Food' && (
              <div className="my-4">
                <p className="font-medium text-slate-600">Customizations:</p>
                {data?.customizations?.map((custom, index) => (
                  <label
                    key={index}
                    className="block my-1 text-sm text-slate-800"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) =>
                        handleCustomizationChange(custom, e.target.checked)
                      }
                    />
                    {custom}
                  </label>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-2">
              <p className="text-yellow-600">
                {displayNARCurrency(data.sellingPrice)}
              </p>
              <p className="text-slate-400 line-through">
                {displayNARCurrency(data.price)}
              </p>
            </div>

            <div className="flex items-center my-2 gap-3">
              <button
                className="border-2 text-yellow-600 font-medium px-3 py-1 min-w-[120px] border-yellow-600 hover:bg-yellow-600 hover:text-white"
                onClick={(e) => handleBuyProduct(e, data?._id)}
              >
                Buy
              </button>
              <button
                className="border-2 font-medium text-white bg-yellow-600 px-3 py-1 min-w-[120px] border-yellow-600 hover:text-yellow-600 hover:bg-white"
                onClick={(e) => handleAddToCart(e, data?._id)}
              >
                Add To Cart
              </button>
            </div>

            <div>
              <p className="text-slate-600 font-medium my-1">Description:</p>
              <p>{data.description}</p>
            </div>
          </div>
        )}
      </div>

      {data.category && (
        <CategoryWiseProductDisplay
          category={data?.category}
          heading="Recommended Products"
        />
      )}
    </div>
  );
};

export default FoodProductDetails;
