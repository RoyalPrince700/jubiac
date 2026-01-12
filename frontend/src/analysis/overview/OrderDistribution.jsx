import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import SummaryApi from "../../common";

const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#9B5DE5"];

const OrderDistribution = () => {
	const [orderStatusData, setOrderStatusData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchOrderStatus = async () => {
			try {
				const response = await fetch(SummaryApi.assignedOrders.url, {
					method: SummaryApi.assignedOrders.method,
					credentials: "include",
				});
				const data = await response.json();

				if (data.success) {
					// Initialize counts for each status
					const statusCounts = {
						Pending: 0,
						Processing: 0,
						Shipped: 0,
						Delivered: 0,
						Cancelled: 0,
					};

					// Count orders by status
					data.data.forEach((order) => {
						if (statusCounts[order.status] !== undefined) {
							statusCounts[order.status]++;
						}
					});

					// Format data for the chart
					const formattedData = Object.entries(statusCounts).map(([name, value]) => ({
						name,
						value,
					}));

					setOrderStatusData(formattedData);
				} else {
					setError(data.message || "Failed to fetch order distribution.");
				}
			} catch (err) {
				console.error("Error fetching order distribution:", err);
				setError("Failed to fetch order distribution.");
			} finally {
				setLoading(false);
			}
		};

		fetchOrderStatus();
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
			<h2 className="text-xl font-semibold text-gray-800 mb-4">Order Status Distribution</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={orderStatusData}
							cx="50%"
							cy="50%"
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{orderStatusData.map((entry, index) => (
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

export default OrderDistribution;
