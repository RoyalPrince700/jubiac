import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import SummaryApi from "../../common";
import displayNARCurrency from "../../helpers/displayCurrency";
import ChangeOrderStatus from "../../components/ChangeOrderStatus";
import { useSocket } from "../../context/SocketContext";

const OrdersTable = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [openChangeStatus, setOpenChangeStatus] = useState(false);
  const [currentOrderDetails, setCurrentOrderDetails] = useState({
    orderId: "",
    currentStatus: "",
  });
  const { socket } = useSocket();

  // Fetch all orders
  const fetchAllOrders = async () => {
    try {
      const response = await fetch(SummaryApi.allOrders.url, {
        method: SummaryApi.allOrders.method,
        credentials: "include",
      });

      const dataResponse = await response.json();

      if (dataResponse.success) {
        setAllOrders(dataResponse.data);
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("Failed to fetch orders.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  // Join admin room for real-time updates
  useEffect(() => {
    if (!socket) return;

    // Join admin room
    socket.emit('join-admin-room');
    console.log('Admin joined admin room');

    const handleAdminOrderStatusChange = (updateData) => {
      console.log('Admin received order status change:', updateData);

      // Update the local orders state
      setAllOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === updateData.orderId
            ? { ...order, status: updateData.newStatus }
            : order
        )
      );

      // Show a toast notification
      toast.info(`Order #${updateData.orderId.slice(-6)} status updated to ${updateData.newStatus}`, {
        position: "top-right",
        autoClose: 5000,
      });
    };

    socket.on('admin-order-status-changed', handleAdminOrderStatusChange);

    // Cleanup listener on unmount
    return () => {
      socket.off('admin-order-status-changed', handleAdminOrderStatusChange);
    };
  }, [socket]);

  // Update order status
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
      console.error("Update Error:", error);
      toast.error("Failed to update order status.");
    }
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-800 border-b border-gray-200">
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Order ID</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Order Date</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {allOrders.map((order, index) => (
            <React.Fragment key={order._id || index}>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">
                  <div className="relative group">
                    <span
                      className="truncate w-16 inline-block overflow-hidden whitespace-nowrap cursor-help"
                      title={order._id}
                    >
                      {order._id.slice(0, 3)}...
                    </span>
                    <div className="absolute hidden group-hover:block bg-white border border-gray-200 shadow-lg text-gray-800 text-sm rounded p-2 z-10">
                      {order._id}
                    </div>
                  </div>
                </td>
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
                <td className="px-4 py-3 flex space-x-2">
                  <button
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors text-sm"
                    onClick={() =>
                      setExpandedOrderId(
                        expandedOrderId === order._id ? null : order._id
                      )
                    }
                  >
                    {expandedOrderId === order._id ? "Hide" : "Details"}
                  </button>
                  <button
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-600 hover:text-white transition-colors text-sm"
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
                  <td colSpan={5}>
                    <div className="bg-gray-50 p-6 rounded-lg m-2 border border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="mb-2">
                            <strong className="text-gray-900">Customer Name:</strong> {order.name || "Unknown"}
                          </p>
                          <p className="mb-2">
                            <strong className="text-gray-900">Phone Number:</strong> {order.number || "N/A"}
                          </p>
                          <p className="mb-2">
                            <strong className="text-gray-900">Address:</strong> {order.address || "N/A"}
                          </p>
                        </div>
                        <div>
                          <p className="mb-2">
                            <strong className="text-gray-900">Note:</strong> {order.note || "N/A"}
                          </p>
                          <p className="mb-2">
                            <strong className="text-gray-900">Total Price:</strong>{" "}
                            {displayNARCurrency(order.totalPrice.toFixed(2))}
                          </p>
                        </div>
                      </div>
                      
                      <h4 className="font-bold mt-6 mb-4 text-gray-900 border-b pb-2">Cart Items:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {order.cartItems.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-gray-100">
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
        <p className="text-center text-gray-500 py-10">No orders found.</p>
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

export default OrdersTable;
