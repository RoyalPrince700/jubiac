import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import SummaryApi from "../../common";

const DailyOrders = () => {
	const [dailyOrdersData, setDailyOrdersData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDailyOrders = async () => {
			try {
				const response = await fetch(SummaryApi.assignedOrders.url, {
					method: SummaryApi.assignedOrders.method,
					credentials: "include",
				});
				const data = await response.json();

				if (data.success) {
					// Generate daily orders count
					const orders = data.data;
					const dailyCounts = {};

					orders.forEach((order) => {
						const date = new Date(order.createdAt).toLocaleDateString("en-US", {
							month: "2-digit",
							day: "2-digit",
						});
						dailyCounts[date] = (dailyCounts[date] || 0) + 1;
					});

					// Convert dailyCounts into chart data format
					const formattedData = Object.keys(dailyCounts).map((date) => ({
						date,
						orders: dailyCounts[date],
					}));

					setDailyOrdersData(formattedData);
				} else {
					setError(data.message || "Failed to fetch daily orders.");
				}
			} catch (err) {
				console.error("Error fetching daily orders:", err);
				setError("Failed to fetch daily orders.");
			} finally {
				setLoading(false);
			}
		};

		fetchDailyOrders();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<motion.div
			className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Orders</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={dailyOrdersData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
						<XAxis dataKey="date" stroke="#6B7280" />
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
						<Line type="monotone" dataKey="orders" stroke="#8B5CF6" strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default DailyOrders;
