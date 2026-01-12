import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaShoppingCart, FaChartLine, FaArrowUp } from "react-icons/fa";
import Header from "../common/Header";
import StatCard from "../common/StatCard";
import SalesOverviewChart from "../analysis/overview/SalesOverViewChart";
import CategoryDistributionChart from "../analysis/overview/CategoryDistributionChart";
import DailySalesTrend from "../analysis/overview/DailySalesTrend";
import SummaryApi from "../common";

const SalesPage = () => {
    const [salesStats, setSalesStats] = useState({
        totalRevenue: "₦0.00",
        averageOrderValue: "₦0.00",
        conversionRate: "0%",
        salesGrowth: "0%",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatCurrency = (value) => {
        return `₦${new Intl.NumberFormat("en-NG").format(value.toFixed(2))}`;
    };

    const calculateSalesGrowth = (salesYesterday, salesTwoDaysAgo) => {
        if (salesTwoDaysAgo === 0) return "N/A"; // Avoid division by zero
        const growth = ((salesYesterday - salesTwoDaysAgo) / salesTwoDaysAgo) * 100;
        return `${growth.toFixed(2)}%`;
    };

    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await fetch(SummaryApi.assignedOrders.url, {
                    method: SummaryApi.assignedOrders.method,
                    headers: { "Content-Type": "application/json" },
                });
                const data = await response.json();
        
                if (data.success) {
                    const assignedOrders = data.data;
        
                    // Filter delivered and pending orders
                    const deliveredOrders = assignedOrders.filter(order => order.status === "Delivered");
                    const pendingOrders = assignedOrders.filter(order => order.status === "Pending"); // Define pendingOrders
        
                    // Calculate Total Revenue
                    const totalRevenue = deliveredOrders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);
        
                    // Calculate Average Order Value
                    const averageOrderValue = deliveredOrders.length
                        ? totalRevenue / deliveredOrders.length
                        : 0;
        
                    // Calculate Conversion Rate
                    const conversionRate = deliveredOrders.length
                        ? (pendingOrders.length / deliveredOrders.length) * 100
                        : 0;
        
                    // Mock Sales Data for the Last Two Days
                    const salesYesterday = deliveredOrders
                        .filter(order => new Date(order.date).toDateString() === new Date().toDateString())
                        .reduce((sum, order) => sum + (order.totalPrice || 0), 0);
        
                    const salesTwoDaysAgo = deliveredOrders
                        .filter(order => 
                            new Date(order.date).toDateString() === 
                            new Date(new Date().setDate(new Date().getDate() - 1)).toDateString()
                        )
                        .reduce((sum, order) => sum + (order.totalPrice || 0), 0);
        
                    // Calculate Sales Growth
                    const salesGrowth = calculateSalesGrowth(salesYesterday, salesTwoDaysAgo);
        
                    // Update state
                    setSalesStats({
                        totalRevenue: formatCurrency(totalRevenue),
                        averageOrderValue: formatCurrency(averageOrderValue),
                        conversionRate: `${conversionRate.toFixed(2)}%`,
                        salesGrowth,
                    });
                } else {
                    setError(data.message || "Failed to fetch sales data.");
                }
            } catch (error) {
                console.error("Error fetching sales data:", error);
                setError("Failed to fetch sales data.");
            } finally {
                setLoading(false);
            }
        };
        

        fetchSalesData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="h-full flex flex-col">
            <Header title="Sales Dashboard" />
            <div className="flex-1 overflow-y-auto">
                <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                    {/* SALES STATS */}
                    <motion.div
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <StatCard
                            name="Total Revenue"
                            icon={TbCurrencyNaira}
                            value={salesStats.totalRevenue}
                            color="#6366F1"
                        />
                        <StatCard
                            name="Avg. Order Value"
                            icon={TbCurrencyNaira}
                            value={salesStats.averageOrderValue}
                            color="#10B981"
                        />
                        <StatCard
                            name="Conversion Rate"
                            icon={FaChartLine}
                            value={salesStats.conversionRate}
                            color="#F59E0B"
                        />
                        <StatCard
                            name="Sales Growth"
                            icon={FaArrowUp}
                            value={salesStats.salesGrowth}
                            color="#EF4444"
                        />
                    </motion.div>

                    <SalesOverviewChart />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                        <CategoryDistributionChart />
                        <DailySalesTrend />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SalesPage;
