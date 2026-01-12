import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import SummaryApi from "../common";
import ORDER_STATUS from "../common/orderStatus";
import { useSocket } from "../context/SocketContext";

const ChangeOrderStatus = ({ orderId, currentStatus, onClose, callFunc }) => {
    const [orderStatus, setOrderStatus] = useState(currentStatus);
    const { socket } = useSocket();

    const handleStatusChange = (e) => {
        setOrderStatus(e.target.value);
    };

    const updateOrderStatus = async () => {
        try {
            const response = await fetch(SummaryApi.updateOrder.url, {
                method: SummaryApi.updateOrder.method,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ orderId, status: orderStatus }),
            });

            const responseData = await response.json();

            if (responseData.success) {
                toast.success(responseData.message);

                // Emit real-time update event
                if (socket) {
                    socket.emit('order-status-updated', {
                        orderId,
                        newStatus: orderStatus,
                        message: `Order #${orderId} status changed to ${orderStatus}`
                    });
                }

                onClose();
                callFunc(); // Refresh the orders list
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            toast.error("Failed to update order status.");
        }
    };

    return (
        <div className="fixed inset-0 w-full h-full z-10 flex justify-center items-center bg-black bg-opacity-60">
            <div className="mx-auto bg-gray-800 text-white shadow-md p-6 w-full max-w-sm rounded-lg">
                <button className="block ml-auto text-white hover:text-red-500" onClick={onClose}>
                    <IoMdClose size={24} />
                </button>
                <h1 className="pb-4 text-xl font-semibold text-yellow-500">Change Order Status</h1>
                <p className="text-gray-300 mb-4">Order ID: <span className="text-white">{orderId}</span></p>

                <div className="flex items-center justify-between my-4">
                    <p className="text-gray-300">Status</p>
                    <select
                        className="border border-gray-600 bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                        value={orderStatus}
                        onChange={handleStatusChange}
                    >
                        {Object.values(ORDER_STATUS).map((status) => (
                            <option value={status} key={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className="w-full text-white bg-yellow-600 hover:bg-yellow-700 py-2 px-4 rounded-md mt-4"
                    onClick={updateOrderStatus}
                >
                    Change Status
                </button>
            </div>
        </div>
    );
};

export default ChangeOrderStatus;
