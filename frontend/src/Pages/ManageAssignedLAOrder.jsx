import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import AssignLA from "../components/AssignLA";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [activeLAs, setActiveLAs] = useState([]);

  // Fetch orders
  const fetchOrders = async () => {
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
      console.error("Error fetching orders:", error.message);
      toast.error("Failed to fetch orders.");
    }
  };

  // Fetch active LAs
  const fetchActiveLAs = async () => {
    try {
      const response = await fetch(SummaryApi.getActiveLA.url, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        setActiveLAs(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching LAs:", error.message);
      toast.error("Failed to fetch active LAs.");
    }
  };

  // Handle assigning an LA
  const handleAssignOrder = async (orderId, userId) => {
    if (!userId) {
      return toast.error("Please select a Logistics Attendant.");
    }

    try {
      const response = await fetch(SummaryApi.assignLA.url, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, orderId }),
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Order successfully assigned.");
        // Remove the assigned order from the local state
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== orderId)
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error during assignment:", error);
      toast.error("Failed to assign order.");
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchActiveLAs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <div className="bg-white p-4 shadow rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Assign</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customerName}</td>
                <td className="p-2">{order.status}</td>
                <td className="p-2">
                  <AssignLA
                    orderId={order.id}
                    currentLA={order.assignedLA}
                    activeLAs={activeLAs}
                    onAssign={(userId) => handleAssignOrder(order.id, userId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
