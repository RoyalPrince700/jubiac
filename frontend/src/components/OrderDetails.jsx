import React from "react";
import { IoMdClose } from "react-icons/io";

const OrderDetails = ({ order, onClose }) => {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-40">
            <div className="mx-auto bg-white shadow-md p-4 w-full max-w-lg">
                <button className="block ml-auto" onClick={onClose}>
                    <IoMdClose />
                </button>
                <h1 className="text-lg font-medium pb-4">Order Details</h1>
                <p><strong>Customer Name:</strong> {order.userId?.name || "Unknown"}</p>
                <p><strong>Phone Number:</strong> {order.userId?.number || "N/A"}</p>
                <p><strong>Address:</strong> {order.userId?.address || "N/A"}</p>
                <p><strong>Note:</strong> {order.note || "N/A"}</p>
                <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>

                <h2 className="text-lg font-medium mt-4">Cart Items:</h2>
                <ul className="list-disc pl-4">
                    {order.cartItems.map((item, index) => (
                        <li key={index} className="my-2">
                            <p>
                                <strong>Product Name:</strong> {item.productId?.name || "Unknown"}
                            </p>
                            {item.productId?.image && (
                                <img
                                    src={item.productId.image}
                                    alt={item.productId.name}
                                    className="w-16 h-16 object-cover"
                                />
                            )}
                            <p>
                                <strong>Quantity:</strong> {item.quantity}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderDetails;
