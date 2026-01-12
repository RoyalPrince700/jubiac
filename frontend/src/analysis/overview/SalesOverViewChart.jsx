import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import SummaryApi from "../../common";


const SalesOverviewChart = () => {
  const [weeklySalesData, setWeeklySalesData] = useState([
    { name: "Sunday", sales: 0 },
    { name: "Monday", sales: 0 },
    { name: "Tuesday", sales: 0 },
    { name: "Wednesday", sales: 0 },
    { name: "Thursday", sales: 0 },
    { name: "Friday", sales: 0 },
    { name: "Saturday", sales: 0 },
  ]);

  const fetchWeeklySales = async () => {
    try {
      const response = await fetch(SummaryApi.assignedOrders.url, {
        method: SummaryApi.assignedOrders.method,
        credentials: "include",
      });
      const dataResponse = await response.json();

      if (dataResponse.success) {
        const orders = dataResponse.data;
        const updatedSalesData = [...weeklySalesData];

        // Process orders to calculate sales per day
        orders.forEach((order) => {
          if (order.status === "Delivered") {
            const orderDate = new Date(order.createdAt);
            const dayOfWeek = orderDate.getDay(); // 0 (Sunday) to 6 (Saturday)

            updatedSalesData[dayOfWeek].sales += order.totalPrice;
          }
        });

        setWeeklySalesData(updatedSalesData);
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchWeeklySales();
  }, []);

  return (
    <motion.div
      className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Sales Overview</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={weeklySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey={"name"} stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E5E7EB",
                color: "#111827"
              }}
              itemStyle={{ color: "#374151" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
