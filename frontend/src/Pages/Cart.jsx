import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import Context from '../context';
import displayNARCurrency from '../helpers/displayCurrency';
import { MdDelete } from 'react-icons/md';

const Cart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const context = useContext(Context); // data of cart is coming from here
    const loadingCart = new Array(context.cartProductCount).fill(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await fetch(SummaryApi.addToCartProductView.url, {
            method: SummaryApi.addToCartProductView.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
        });

        const responseData = await response.json();

        if (responseData.success) {
            setData(responseData.data);
        }
    };

    const handleLoading = async () => {
        await fetchData();
    };

    useEffect(() => {
        setLoading(true);
        handleLoading();
        setLoading(false);
    }, []);

    const increaseQty = async (id, qty) => {
        const response = await fetch(SummaryApi.updateCartProduct.url, {
            method: SummaryApi.updateCartProduct.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                _id: id, // Send the product's _id
                quantity: qty + 1, // Increase the quantity
            }),
        });

        const responseData = await response.json();
        if (responseData.success) {
            fetchData();
        }
    };

    const decreaseQty = async (id, qty) => {
        if (qty >= 2) {
            const response = await fetch(SummaryApi.updateCartProduct.url, {
                method: SummaryApi.updateCartProduct.method,
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    _id: id, // Send the product's _id
                    quantity: qty - 1, // Decrease the quantity
                }),
            });

            const responseData = await response.json();
            if (responseData.success) {
                fetchData();
            }
        }
    };

    const deleteCartProduct = async (id) => {
        try {
            const response = await fetch(SummaryApi.deleteCartProduct.url, {
                method: SummaryApi.deleteCartProduct.method,
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    _id: id, // Send the product's _id
                }),
            });

            const responseData = await response.json();
            if (responseData.success) {
                fetchData();
                context.fetchUserAddToCart();
            }
        } catch (error) {
            console.error('Error deleting product from cart:', error);
        }
    };

    const totalQty = data.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        0
    );
    const totalPrice = data.reduce(
        (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
        0
    );
    
    const handleCheckout = () => {
        if (data.length > 0) {
            navigate('/checkout', {
                state: {
                    cartItems: data,
                    totalPrice: totalPrice,
                },
            });
        } else {
            alert('No items in the cart. Please add items to proceed.');
        }
    };
    

    return (
        <div className="container mx-auto px-4 mt-4">
        <h1 className="text-2xl font-bold mb-5">My Cart</h1>
      
        <div className="text-center text-lg">
          {data.length === 0 && !loading && (
            <p className="bg-white py-5 text-gray-500">No items in your cart.</p>
          )}
        </div>
      
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-between">
          {/* Cart Items */}
          <div className="w-full max-w-3xl">
            {loading
              ? loadingCart.map((_, index) => (
                  <div
                    key={index}
                    className="w-full bg-slate-200 h-32 border border-slate-300 my-2 animate-pulse rounded"
                  ></div>
                ))
              : data.map((product) => (
                  <div
                    key={product?._id}
                    className="w-full bg-white shadow-lg rounded-lg border border-gray-200 my-4 p-4 grid grid-cols-[128px,1fr] relative"
                  >
                    {/* Product Image */}
                    <div className="w-32 h-32 bg-gray-50 rounded-lg">
                      <img
                        src={product?.productId?.productImage[0]}
                        alt={product?.productId?.productName}
                        className="w-full h-full object-contain"
                      />
                    </div>
      
                    {/* Product Details */}
                    <div className="px-4">
                      <h2 className="text-sm lg:text-base font-medium text-gray-800 line-clamp-2">
                        {product?.productId?.productName}
                      </h2>
                      <p className="capitalize text-sm text-gray-500">
                        {product?.productId?.category}
                      </p>
                      <div className="my-2">
                        <p className="text-sm font-medium text-gray-700">
                          {displayNARCurrency(product?.productId?.sellingPrice)}
                        </p>
                        <p className="text-sm font-semibold text-gray-500 mt-1">
                          {displayNARCurrency(
                            product?.productId?.sellingPrice * product?.quantity
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          className="flex items-center justify-center w-6 h-6 border border-black text-black rounded hover:bg-black hover:text-white"
                          onClick={() => decreaseQty(product?._id, product?.quantity)}
                        >
                          -
                        </button>
                        <span className="text-gray-700">{product?.quantity}</span>
                        <button
                          className="flex items-center justify-center w-6 h-6 border border-black text-black rounded hover:bg-black hover:text-white"
                          onClick={() => increaseQty(product?._id, product?.quantity)}
                        >
                          +
                        </button>
                      </div>
                    </div>
      
                    {/* Delete Button */}
                    <button
                      className="absolute bottom-2 right-0 text-red-600 hover:bg-red-600
                       hover:text-white p-2 rounded-full"
                      onClick={() => deleteCartProduct(product?._id)}
                    >
                      <MdDelete size={24} />
                    </button>
                  </div>
                ))}
          </div>
      
          {/* Cart Summary */}
          {data[0] && (
            <div className="mt-5 lg:mt-0 w-full max-w-sm">
              {loading ? (
                <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse rounded-lg"></div>
              ) : (
                <div className="bg-yellow-50 shadow-lg rounded-lg p-4">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">Summary</h2>
                  <div className="flex justify-between items-center text-gray-600 mb-2">
                    <p>Quantity</p>
                    <p className="font-medium">{totalQty}</p>
                  </div>
                  <div className="flex justify-between items-center text-gray-600 mb-4">
                    <p>Total Price</p>
                    <p className="font-medium">{displayNARCurrency(totalPrice)}</p>
                  </div>
                  <button
                    className="w-full bg-black text-white py-2 rounded-lg shadow-md
                     hover:bg-gray-900"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      
    );
};

export default Cart;
