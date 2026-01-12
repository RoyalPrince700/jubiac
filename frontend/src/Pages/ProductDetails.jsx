import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SummaryApi from '../common';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import displayNARCurrency from '../helpers/displayCurrency';
import SubCategoryWiseProductDisplay from '../components/SubCategoryWiseProductDisplay';
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay';
import addToCart from '../helpers/addToCart';
import Context from '../context';

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: '',
    brandName: '',
    category: '',
    subCategory: '',
    productImage: [],
    description: '',
    price: '',
    sellingPrice: '',
  });

  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const [zoomImage, setZoomImage] = useState(false);
  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({ x: 0, y: 0 });

  const { fetchUserAddToCart } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ productId: params?.id }),
    });
    setLoading(false);
    const dataResponse = await response.json();
    setData(dataResponse?.data);
    setActiveImage(dataResponse?.data.productImage[0]);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params]); // Re-fetch data when the product ID changes

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
    navigate('/cart');
  };

  const handleNavigateToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className=" mt-20 lg:mt-24 mx-auto px-4">
      <div className="min-h-[200px] flex flex-col lg:flex-row gap-4">
        {/* Product Image */}
        <div className="h-96 flex flex-col lg:flex-row-reverse gap-4">
          {/* Main Image with Zoom */}
          <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2">
            <img
              src={activeImage}
              alt="Product"
              className="h-full w-full object-scale-down mix-blend-multiply"
              onMouseMove={(e) => {
                const { left, top, width, height } = e.target.getBoundingClientRect();
                setZoomImage(true);
                setZoomImageCoordinate({
                  x: (e.clientX - left) / width,
                  y: (e.clientY - top) / height,
                });
              }}
              onMouseLeave={() => setZoomImage(false)}
            />
            {zoomImage && (
              <div className="hidden lg:block absolute overflow-hidden min-w-[400px] min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0">
                <div
                  className="w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-125"
                  style={{
                    backgroundImage: `url(${activeImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}%`,
                  }}
                ></div>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
            {data?.productImage?.map((imageURL, index) => (
              <div className="h-20 w-20 bg-slate-200 rounded p-1" key={imageURL}>
                <img
                  src={imageURL}
                  className="w-full h-full object-scale-down mix-blend-multiply cursor-pointer"
                  onMouseEnter={() => setActiveImage(imageURL)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-1">
          <p className="bg-gray-200 text-gray-600 px-2 rounded-md inline-block w-fit">
            {data?.brandName}
          </p>
          <h2 className="text-2xl lg:text-4xl font-medium">{data?.productName}</h2>
          <p className="capitalize text-slate-900">{data?.category}</p>
          <div className="text-gray-900 flex items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <div className="flex items-center space-x-2">
            {data?.price > 0 && <p className="text-black line-through">{displayNARCurrency(data?.price)}</p>}
            {data?.sellingPrice > 0 && <p className="text-black font-semibold text-lg">{displayNARCurrency(data?.sellingPrice)}</p>}
          </div>
          <div className="flex items-center my-2 gap-3">
  <button
    className="border-2 text-white font-medium rounded-lg px-4 py-2 min-w-[140px] border-black 
    bg-black hover:bg-gray-900 hover:text-[#F5F5DC] transition-all duration-300 ease-in-out"
    onClick={(e) => handleBuyProduct(e, data?._id)}
  >
    Buy Now
  </button>
  <button
    className="border-2 text-black font-medium rounded-lg px-4 py-2 min-w-[140px] border-black
    bg-gray-100 hover:bg-gray-900 hover:text-[#F5F5DC] transition-all duration-300 ease-in-out"
    onClick={(e) => handleAddToCart(e, data?._id)}
  >
    Add to Cart
  </button>
</div>


          <div>
            <p className="text-slate-600 font-medium my-1">Description :</p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>

      {/* Recommended SubProducts */}
      

      {/* Recommended Products */}
      {data.category && (
        <CategoryWiseProductDisplay
          category={data?.category}
          heading="Recommended Product"
          onProductClick={handleNavigateToProduct} // Pass handler for navigation
        />
      )}
    </div>
  );
};

export default ProductDetails;
