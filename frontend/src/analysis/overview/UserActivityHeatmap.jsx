import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import SummaryApi from "../../common"; // Replace with your actual API configuration
import { toast } from "react-toastify";

const UserActivityHeatmap = () => {
  const [userActivityData, setUserActivityData] = useState([]);

  const fetchUserActivityData = async () => {
    try {
      const response = await fetch(SummaryApi.allUserActivity.url, {
        method: SummaryApi.allUserActivity.method,
        credentials: "include",
      });
      const dataResponse = await response.json();

      if (dataResponse.success) {
        setUserActivityData(dataResponse.data); // Ensure backend data is in the required format
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      console.error("Error fetching user activity data:", error);
      toast.error("Failed to load user activity data.");
    }
  };

  useEffect(() => {
    fetchUserActivityData();
  }, []);

  return (
    <motion.div
      className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Activity Heatmap</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={userActivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="day" stroke="#6B7280" />
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
            <Bar dataKey="0-4" stackId="a" fill="#6366F1" />
            <Bar dataKey="4-8" stackId="a" fill="#8B5CF6" />
            <Bar dataKey="8-12" stackId="a" fill="#EC4899" />
            <Bar dataKey="12-16" stackId="a" fill="#10B981" />
            <Bar dataKey="16-20" stackId="a" fill="#F59E0B" />
            <Bar dataKey="20-24" stackId="a" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserActivityHeatmap;
