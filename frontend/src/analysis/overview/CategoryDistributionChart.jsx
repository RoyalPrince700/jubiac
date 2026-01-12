import { toast } from "react-toastify";
import SummaryApi from "../../common";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const CategoryDistributionChart = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const response = await fetch(SummaryApi.categoryProduct.url);

      const { data } = await response.json();
      if (data) {
        const transformedData = data.map((item) => ({
          name: item.category,
          value: item.value || 1, // Ensure value is numeric
        }));
        setCategoryData(transformedData);
      }
    } catch (err) {
      console.error("Error fetching category data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  if (loading) {
    return <p>Loading Category Distribution...</p>;
  }

  if (!categoryData.length) {
    return <p>No data available for the chart.</p>;
  }

	return (
		<motion.div
			className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className="text-lg font-semibold mb-4 text-gray-800">Category Distribution</h2>
			<div className="h-80">
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{categoryData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "#FFFFFF",
								borderColor: "#E5E7EB",
								color: "#111827"
							}}
							itemStyle={{ color: "#374151" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default CategoryDistributionChart;
