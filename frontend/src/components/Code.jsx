import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import displayNARCurrency from '../helpers/displayCurrency';
import ChangeOrderStatus from "../components/ChangeOrderStatus";

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [openChangeStatus, setOpenChangeStatus] = useState(false);
    const [currentOrderDetails, setCurrentOrderDetails] = useState({
        orderId: "",
        currentStatus: "",
    });

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

    return (
        <div className="pb-4 bg-white mt-[120px]">
            <h2 className="text-lg font-bold py-2 px-4">All Orders</h2>
            <table className="w-full orderTable">
                <thead>
                    <tr className="bg-black text-white">
                        <th>Sr.</th>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Order Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map((order, index) => (
                        <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order._id}</td>
                            <td>{order.status}</td>
                            <td>{moment(order.createdAt).format("LL")}</td>
                            <td>
                                <button
                                    className="bg-red-100 p-2 rounded-full cursor-pointer hover:bg-red-500 hover:text-white"
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

