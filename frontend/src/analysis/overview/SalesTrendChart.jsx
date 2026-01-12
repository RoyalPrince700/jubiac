import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import SummaryApi from "../common"; // Assuming API endpoints are defined here

const SalesTrendChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSalesData = async () => {
    try {
      const response = await fetch(SummaryApi.salesTrend.url, {
        method: SummaryApi.salesTrend.method,
        credentials: "include",
      });
      const dataResponse = await response.json();

      if (dataResponse.success) {
        const formattedData = dataResponse.data.map((entry) => ({
          month: entry.month,
          sales: entry.sales,
        }));
        setSalesData(formattedData);
      } else {
        setError("Failed to fetch sales data.");
      }
    } catch (err) {
      console.error("Error fetching sales trend data:", err);
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <motion.div
      className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Trend</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E5E7EB",
                color: "#111827"
              }}
              itemStyle={{ color: "#374151" }}
            />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8B5CF6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesTrendChart;
