import React, { useState, useEffect } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import Header from "../common/Header";
import StatCard from "../common/StatCard";
import SummaryApi from "../common";
import SalesOverviewChart from "../analysis/overview/SalesOverViewChart";
import CategoryDistributionChart from "../analysis/overview/CategoryDistributionChart";

const OverviewPage = () => {
    const [stats, setStats] = useState({
        totalSales: 0,
        totalUsers: 0,
        totalProducts: 0,
        conversionRate: "0%",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch assigned orders
                const assignedOrdersResponse = await fetch(SummaryApi.assignedOrders.url, {
                    method: SummaryApi.assignedOrders.method,
                    headers: { "Content-Type": "application/json" },
                });
                const assignedOrdersData = await assignedOrdersResponse.json();

                let totalSales = 0;
                if (assignedOrdersData.success) {
                    totalSales = assignedOrdersData.data.reduce(
                        (sum, order) => sum + (order.totalPrice || 0) * (order.totalQuantity || 1),
                        0
                    );
                }

                // Fetch all users
                const usersResponse = await fetch(SummaryApi.allUser.url, {
                    method: SummaryApi.allUser.method,
                    credentials: "include",
                });
                const usersData = await usersResponse.json();

                let totalUsers = 0;
                if (usersData.success) {
                    totalUsers = usersData.data.length;
                }

                // Fetch all products
                const productsResponse = await fetch(SummaryApi.allProduct.url, {
                    method: "GET",
                });
                const productsData = await productsResponse.json();

                let totalProducts = 0;
                if (productsData?.data) {
                    totalProducts = productsData.data.length;
                }

                // Update stats
                setStats(prev => ({
                    ...prev,
                    totalSales,
                    totalUsers,
                    totalProducts,
                }));
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Overview" />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* STATS */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard
                        name="Total Sales"
                        icon={TbCurrencyNaira}
                        value={`₦${stats.totalSales.toFixed(2)}`}
                        color="#6366F1"
                    />
                    <StatCard
                        name="Total Users"
                        icon={CgProfile}
                        value={stats.totalUsers}
                        color="#8B5CF6"
                    />
                    <StatCard
                        name="Total Products"
                        icon={IoCartOutline}
                        value={stats.totalProducts}
                        color="#EC4899"
                    />
                    <StatCard
                        name="Conversion Rate"
                        icon={MdOutlineBarChart}
                        value={stats.conversionRate}
                        color="#10B981"
                    />
                </motion.div>
            </main>

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SalesOverviewChart />
                <CategoryDistributionChart />
            </div>
        </div>
    );
};

export default OverviewPage;
