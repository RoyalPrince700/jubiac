import React, { useEffect, useState } from 'react';
import UploadProduct from '../components/UploadProduct';
import SummaryApi from '../common';
import AdminProductCard from '../components/AdminProductCard';

const ProductsPage = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

    setAllProduct(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div className="bg-gray-900 h-screen text-gray-200">
      <div className="bg-gray-800 py-4 px-6 flex justify-between items-center shadow-md">
        <h2 className="font-bold text-xl">All Products</h2>
        <button
          className="border-2 hover:text-gray-900 transition-all 
          hover:bg-yellow-500 border-yellow-500 
          text-yellow-500 py-2 px-4 rounded-full"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>

      {/* All products */}
      <div className="flex items-center flex-wrap gap-6 p-6 overflow-y-scroll h-[calc(100vh-112px)]">
        {allProduct.map((product, index) => (
          <AdminProductCard
            data={product}
            key={index + 'allProduct'}
            fetchdata={fetchAllProduct}
          />
        ))}
      </div>

      {/* Upload product component */}
      {openUploadProduct && (
        <UploadProduct
          onClose={() => setOpenUploadProduct(false)}
          fetchData={fetchAllProduct}
        />
      )}
    </div>
  );
};

export default ProductsPage;
