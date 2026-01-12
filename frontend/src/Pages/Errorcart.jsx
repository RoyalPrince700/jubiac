import React, { useContext, useEffect, useState } from 'react';
import SummaryApi from '../common';
import { Context } from '../context/ContextProvider';
import displayNARCurrency from '../helpers/displayCurrency';

const Car = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const loadingCart = new Array(context.cartProductCount).fill(null);
  const [cartTotal, setCartTotal] = useState(0); // Initialize cart total

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    });

    setLoading(false);
    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
      // Calculate the new cart total based on the updated data
      calculateCartTotal(responseData.data);
    }
  };

  const calculateCartTotal = (data) => {
    const total = data.reduce((acc, item) => {
      return acc + item.quantity * item.productId.sellingPrice;
    }, 0);
    setCartTotal(total);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCartProduct.url, {
      method: SummaryApi.updateCartProduct.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        quantity: qty + 1,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData(); // Re-fetch data after update
    }
  };

  return (
    <div className="container mx-auto">
      <div className="text-center text-lg my-3">
        {data.length === 0 && !loading && (
          <p className="bg-white py-5">No Data</p>
        )}
      </div>

      <div className="flex flex-col p-4 lg:flex-row gap-10 lg:justify-between">
        {/* View Product */}
        <div className="w-full max-w-3xl">
          {loading ? (
            loadingCart.map((el) => (
              <div key={el + "Add To Cart Loading"} className="w-full bg-slate-200 h-32 border border-slate-300 my-2 animate-pulse rounded">
                {/* Placeholder content */}
              </div>
            ))
          ) : (
            data.map((product, index) => (
              <div
                key={product?._id + "Add To Cart Loading"}
                className="w-full bg-white h-32 border border-slate-300 my-2 rounded grid grid-cols-[128px,1fr]"
              >
                <div className="w-32 h-32 bg bg-slate-200">
                  <img
                    src={product?.productId?.productImage[0]}
                    className="w-full h-full object-scale-down mix-blend-multiply"
                    alt={product?.productId?.productName}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">
                    {product?.productId?.productName}
                  </h2>
                  <p className="capitalize text-slate-500">{product?.productId?.category}</p>
                  <p className="text-red-600 font-medium text-lg">
                    {displayNARCurrency(product?.productId?.sellingPrice)}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <button className="flex rounded hover:bg-red-600 hover:text-white justify-center items-center border w-6 h-6 border-red-600 text-red-600">-</button>
                    <span>{product?.quantity}</span>
                    <button
                      className="flex rounded hover:bg-red-600 hover:text-white justify-center items-center border w-6 h-6 border-red-600 text-red-600"
                      onClick={() => increaseQty(product?._id, product?.quantity)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="mt-5 lg:mt-0 w-full max-w-sm">
          {loading ? (
            <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse">
              {/* Placeholder content */}
            </div>
          ) : (
            <div className="h-36 bg-slate-200">
              Total: {displayNARCurrency(cartTotal)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Car;



 