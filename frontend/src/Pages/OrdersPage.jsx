import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaClock, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import Header from "../common/Header";
import StatCard from "../common/StatCard";
import DailyOrders from "../analysis/overview/DailyOrders";
import OrderDistribution from "../analysis/overview/OrderDistribution";
import OrdersTable from "../analysis/overview/OrdersTable";
import SummaryApi from "../common";

const OrdersPage = () => {
    const [orderStats, setOrderStats] = useState({
        totalOrders: "0",
        pendingOrders: "0",
        completedOrders: "0",
        totalRevenue: "₦0.00",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatCurrency = (value) => {
        return `₦${new Intl.NumberFormat("en-NG").format(value.toFixed(2))}`;
    };

    useEffect(() => {
        const fetchOrderStats = async () => {
            try {
                // Fetch all orders
                const response = await fetch(SummaryApi.allOrders.url, {
                    method: SummaryApi.allOrders.method,
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                });
                const data = await response.json();

                if (data.success) {
                    const orders = data.data;

                    // Total Orders
                    const totalOrders = orders.length;

                    // Pending Orders
                    const pendingOrders = orders.filter(order => order.status === "Pending").length;

                    // Completed Orders
                    const completedOrders = orders.filter(order => order.status === "Delivered").length;

                    // Total Revenue
                    const totalRevenue = orders
                        .filter(order => order.status === "Delivered")
                        .reduce((sum, order) => sum + (order.totalPrice || 0), 0);

                    setOrderStats({
                        totalOrders: totalOrders.toString(),
                        pendingOrders: pendingOrders.toString(),
                        completedOrders: completedOrders.toString(),
                        totalRevenue: formatCurrency(totalRevenue),
                    });
                } else {
                    setError(data.message || "Failed to fetch order stats.");
                }
            } catch (err) {
                console.error("Error fetching order stats:", err);
                setError("Failed to fetch order stats.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrderStats();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex-1 relative z-10 overflow-y-auto h-screen">
            <Header title="Orders" />
    
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* ORDER STATS */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard
                        name="Total Orders"
                        icon={FaShoppingCart}
                        value={orderStats.totalOrders}
                        color="#6366F1"
                    />
                    <StatCard
                        name="Pending Orders"
                        icon={FaClock}
                        value={orderStats.pendingOrders}
                        color="#F59E0B"
                    />
                    <StatCard
                        name="Completed Orders"
                        icon={FaCheckCircle}
                        value={orderStats.completedOrders}
                        color="#10B981"
                    />
                    <StatCard
                        name="Total Revenue"
                        icon={FaMoneyBillWave}
                        value={orderStats.totalRevenue}
                        color="#EF4444"
                    />
                </motion.div>
    
                {/* CHARTS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <DailyOrders />
                    <OrderDistribution />
                </div>
    
                {/* ORDERS TABLE */}
                <OrdersTable />
            </main>
        </div>
    );
};

export default OrdersPage;
