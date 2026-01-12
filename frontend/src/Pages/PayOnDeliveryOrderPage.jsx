import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import moment from 'moment';
import displayNARCurrency from '../helpers/displayCurrency';

const PayOnDeliveryOrders = () => {
  const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    try {
      console.log('Fetching order details...');
      const response = await fetch(SummaryApi.payondeliveryorder.url, {
        method: SummaryApi.payondeliveryorder.method,
        credentials: 'include',
      });

      const responseData = await response.json();
      console.log('API Response:', responseData);

      if (responseData.success) {
        setData(responseData.data);
      } else {
        console.error('Failed to fetch orders:', responseData.message);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div className="container mx-auto mt-4 px-4">
    <h1 className="text-2xl font-bold mb-5">My Orders</h1>
    {!data.length ? (
      <p className="text-center text-lg text-gray-500">No orders available.</p>
    ) : (
      <div className="space-y-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            {/* Order Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
              <div>
             
              <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium text-gray-700">Order Id:</span>{" "}
                  {(item._id)}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium text-gray-700">Order Placed:</span>{" "}
                  {moment(item.createdAt).format("LL")}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Status:</span>{" "}
                  <span
                    className={`font-semibold ${
                      item.status === "Delivered"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                Total: {displayNARCurrency(item.totalPrice)}
              </p>
            </div>
  
            {/* Order Items */}
            <div className="grid gap-4 mb-6">
              {item.cartItems.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <img
                    src={product.productId.productImage[0]}
                    alt={product.productId.productName}
                    className="w-20 sm:w-20 sm:h-20 h-20 object-contain border rounded-lg"
                  />
                  <div className="w-full">
                    <p className="text-sm lg:text-base font-medium text-gray-800 line-clamp-2">
                      {product.productId.productName}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Price:{" "}
                      {displayNARCurrency(product.productId.sellingPrice)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Shipping Details */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-sm font-semibold mb-2 text-gray-700">
                Shipping Address
              </h3>
              <p className="text-sm text-gray-600">{item.address}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  

  );
};

export default PayOnDeliveryOrders;
