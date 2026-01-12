import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SummaryApi from "../common"; // Adjust path

const AssignedOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAssignedOrders = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(SummaryApi.assignedOrders.url, {
                    method: SummaryApi.assignedOrders.method,
                    headers: { "Content-Type": "application/json" },
                });

                const data = await response.json();

                if (data.success) {
                    setOrders(data.data); // Only assigned orders will be fetched
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                console.error("Error fetching assigned orders:", error);
                toast.error("Failed to fetch assigned orders.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchAssignedOrders();
    }, []);

    return (
        <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-100 mb-4">Assigned Orders</h2>
            <div className="overflow-x-auto">
                {isLoading ? (
                    <div className="text-center py-4 text-gray-100">Loading...</div>
                ) : (
                    <table className="min-w-full table-auto border-collapse">
                        <thead className="bg-gray-700 text-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">Order ID</th>
                                <th className="px-4 py-2 text-left">Assigned To</th>
                                <th className="px-4 py-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id} className="border-t border-gray-700">
                                    <td className="px-4 py-2">{order.orderId}</td>
                                    <td className="px-4 py-2">
                {order.assignedTo?.email ? order.assignedTo.email.replace("@gmail.com", "") : "Unassigned"}</td>

                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 rounded text-sm ${
                                                order.status === "Completed"
                                                    ? "bg-green-500 text-gray-100"
                                                    : order.status === "Pending"
                                                    ? "bg-yellow-500 text-gray-900"
                                                    : "bg-red-500 text-gray-100"
                                            }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AssignedOrders;
