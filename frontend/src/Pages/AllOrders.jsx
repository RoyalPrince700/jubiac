import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import displayNARCurrency from '../helpers/displayCurrency';
import ChangeOrderStatus from "../components/ChangeOrderStatus";



const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const [statuses, setStatuses] = useState({}); // Track statuses for inline edits
        const [openChangeStatus, setOpenChangeStatus] = useState(false);
    
      const [currentOrderDetails, setCurrentOrderDetails] = useState({
            orderId: "",
            currentStatus: "",
        });

    // Fetch all orders from the backend
    const fetchAllOrders = async () => {
        try {
            const response = await fetch(SummaryApi.allOrders.url, {
                method: SummaryApi.allOrders.method,
                credentials: "include",
            });

            const dataResponse = await response.json();

            if (dataResponse.success) {
                console.log("Fetched Orders:", dataResponse.data); // Debugging log
                setAllOrders(dataResponse.data);
            } else {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            console.error("Fetch Error:", error); // Debugging log
            toast.error("Failed to fetch orders.");
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    // Handle status change submission
    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            const response = await fetch(SummaryApi.updateOrder.url, {
                method: SummaryApi.updateOrder.method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ orderId, status: newStatus }),
            });

            const dataResponse = await response.json();

            if (dataResponse.success) {
                toast.success("Order status updated successfully.");
                fetchAllOrders(); // Refresh the orders list
            } else {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            console.error("Update Error:", error); // Debugging log
            toast.error("Failed to update order status.");
        }
    };

    return (
        <div className="pb-4 bg-white mt-[120px]">
            <h2 className="text-lg font-bold py-2 px-4">All Orders</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-gray-800 border-b border-gray-200">
                        <th className="px-4 py-3 text-left">Sr.</th>
                        <th className="px-4 py-3 text-left">Order ID</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Order Date</th>
                        <th className="px-4 py-3 text-left" colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {allOrders.map((order, index) => (
                        <React.Fragment key={order._id || index}>
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">{order._id}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                        order.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                        'bg-blue-100 text-blue-800'
                                    }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">{moment(order.createdAt).format("LL")}</td>
                                <td className="px-4 py-3">
                                    <button
                                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium"
                                        onClick={() =>
                                            setExpandedOrderId(
                                                expandedOrderId === order._id ? null : order._id
                                            )
                                        }
                                    >
                                        {expandedOrderId === order._id ? "Hide" : "View"}
                                    </button>
                                </td>
                                <td className="px-4 py-3">
                                    <button
                                        className="bg-orange-50 text-orange-600 px-3 py-1 rounded hover:bg-orange-600 hover:text-white transition-colors text-sm font-medium"
                                        onClick={() => {
                                            setCurrentOrderDetails({
                                                orderId: order._id,
                                                currentStatus: order.status,
                                            });
                                            setOpenChangeStatus(true);
                                        }}
                                    >
                                        Change Status
                                    </button>
                                </td>
                            </tr>
                            {expandedOrderId === order._id && (
                                <tr>
                                    <td colSpan={6}>
                                        <div className="p-6 bg-gray-50 rounded-lg m-2 border border-gray-100">
                                            <h3 className="font-bold text-gray-900 text-lg mb-4 border-b pb-2">Order Details</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <p className="mb-1"><strong className="text-gray-800">Customer Name:</strong> {order.name || "Unknown"}</p>
                                                    <p className="mb-1"><strong className="text-gray-800">Phone Number:</strong> {order.number || "N/A"}</p>
                                                    <p className="mb-1"><strong className="text-gray-800">Address:</strong> {order.address || "N/A"}</p>
                                                </div>
                                                <div>
                                                    <p className="mb-1"><strong className="text-gray-800">Note:</strong> {order.note || "N/A"}</p>
                                                    <p className="mb-1"><strong className="text-gray-800">Total Price:</strong> {displayNARCurrency(order.totalPrice.toFixed(2))}</p>
                                                </div>
                                            </div>

                                            <h3 className="font-bold text-gray-900 text-lg mt-6 mb-4 border-b pb-2">Cart Items</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {order.cartItems.map((item, idx) => (
                                                    <div key={idx} className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                                        {item.productId?.productImage?.[0] && (
                                                            <img
                                                                src={item.productId.productImage[0]}
                                                                alt={item.productId.productName}
                                                                className="w-16 h-16 object-cover rounded-md"
                                                            />
                                                        )}
                                                        <div>
                                                            <p className="font-medium text-gray-800 text-sm">
                                                                {item.productId?.productName || "Unknown"}
                                                            </p>
                                                            <p className="text-xs text-gray-500 font-semibold">Quantity: {item.quantity}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            {allOrders.length === 0 && (
                <p className="text-center text-gray-500 py-4">No orders available.</p>        
            )}
              {openChangeStatus && (
                <ChangeOrderStatus
                    orderId={currentOrderDetails.orderId}
                    currentStatus={currentOrderDetails.currentStatus}
                    onClose={() => setOpenChangeStatus(false)}
                    callFunc={fetchAllOrders}
                />
            )}
        </div>
    );
};

export default AllOrders;
