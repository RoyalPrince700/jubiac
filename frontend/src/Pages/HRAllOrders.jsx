import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import AssignLA from "../components/AssignLA";

const HRAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [activeLAs, setActiveLAs] = useState([]);

  // Fetch all orders
  const fetchAllOrders = async () => {
    try {
      const response = await fetch(SummaryApi.allOrders.url, {
        method: SummaryApi.allOrders.method,
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
      toast.error("Failed to fetch active LAs.");
    }
  };

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
            // Re-fetch orders to ensure updated data
            fetchAllOrders(); 
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.error("Error during API call:", error);
        toast.error("Failed to assign order.");
    }
};





  useEffect(() => {
    fetchAllOrders();
    fetchActiveLAs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>
      <div className="bg-gray-900 p-4 shadow rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-white">
              <th className="p-2 text-left">Order ID</th>
              {/* <th className="p-2 text-left">Customer</th> */}
              {/* <th className="p-2 text-left">Assigned LA</th> */}
              <th className="p-2 text-left">Assign</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b text-white">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customerName}</td>
                <td className="p-2">
                  {order.assignedLA
                    ? order.assignedLA.name || order.assignedLA.email
                    : "Not Assigned"}
                </td>
                <td className="p-2">
                <AssignLA
  orderId={order.id || order._id} // Support different keys
  currentLA={order.assignedLA}
  activeLAs={activeLAs}
  onAssign={(userId) => handleAssignOrder(order.id || order._id, userId)}
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

export default HRAllOrders;
