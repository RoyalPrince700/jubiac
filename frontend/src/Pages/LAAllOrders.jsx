import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import displayNARCurrency from "../helpers/displayCurrency";
import ChangeOrderStatus from "../components/ChangeOrderStatus";

const LAAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [openChangeStatus, setOpenChangeStatus] = useState(false);
  const [currentOrderDetails, setCurrentOrderDetails] = useState({
    orderId: "",
    currentStatus: "",
  });

  const fetchAssignedOrders = async () => {
    try {
      const response = await fetch(SummaryApi.getOrderLogisticsAttendants.url, {
        method: SummaryApi.getOrderLogisticsAttendants.method,
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        setOrders(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    fetchAssignedOrders();
  }, []);

  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-4">My Assigned Orders</h1>
      <div className="bg-gray-800 p-4 shadow rounded overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Sr.</th>
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Order Date</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <React.Fragment key={order._id}>
                <tr className="border-b">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2" title={order._id}>{order._id.slice(0, 3)}...</td>
                  <td className="p-2">{order.status}</td>
                  <td className="p-2">{moment(order.createdAt).format("LL")}</td>
                  <td className="p-2 flex flex-wrap gap-2">
                    <button
                      className="bg-red-600 px-2 py-1 rounded-full text-sm hover:bg-red-500
                       hover:text-white"
                      onClick={() =>
                        setExpandedOrderId(
                          expandedOrderId === order._id ? null : order._id
                        )
                      }
                    >
                      {expandedOrderId === order._id ? "Hide" : "View"}
                    </button>
                    <button
                      className="bg-gray-700 px-2 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white"
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
      <div className="p-4 bg-gray-800 flex flex-col space-y-2">
        <h3 className="font-bold text-lg mb-2">Order Details</h3>
        <p>
          <strong>Order Id:</strong> {order._id || "Unknown"}
        </p>
        <p>
          <strong>Customer Name:</strong> {order.name || "Unknown"}
        </p>
        <p>
          <strong>Phone Number:</strong> {order.number || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {order.address || "N/A"}
        </p>
        <p>
          <strong>Note:</strong> {order.note || "N/A"}
        </p>
        <p>
          <strong>Total Price:</strong>{" "}
          {displayNARCurrency(order.totalPrice.toFixed(2))}
        </p>

        <h3 className="font-bold text-lg mt-4">Cart Items</h3>
        <ul className="list-disc pl-4">
          {order.cartItems.map((item, idx) => (
            <li key={idx} className="space-y-1">
             
              <p>
                <strong>Product Name:</strong>{" "}
                {item.productId?.productName || "Unknown"}
              </p>
              {item.productId?.productImage?.[0] && (
                <img
                  src={item.productId.productImage[0]}
                  alt={item.productId.productName}
                  className="w-16 h-16 object-cover"
                />
              )}
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Seller Name:</strong>{" "}
                {item.productId?.sellerName || "N/A"}
              </p>
              <p>
                <strong>Seller Brand Name:</strong>{" "}
                {item.productId?.sellerBrandName || "N/A"}
              </p>
              <p>
                <strong>Seller Phone Number:</strong>{" "}
                {item.productId?.sellerPhoneNumber || "N/A"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </td>
  </tr>
)}

              </React.Fragment>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No orders assigned to you.
          </p>
        )}
      </div>
      {openChangeStatus && (
        <ChangeOrderStatus
          orderId={currentOrderDetails.orderId}
          currentStatus={currentOrderDetails.currentStatus}
          onClose={() => setOpenChangeStatus(false)}
          callFunc={fetchAssignedOrders}
        />
      )}
    </div>
  );
};

export default LAAllOrders;
