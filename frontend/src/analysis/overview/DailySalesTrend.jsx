import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import SummaryApi from "../../common";
import { toast } from "react-toastify";

const DailySalesTrend = () => {
	const [dailySalesData, setDailySalesData] = useState([]);

	const fetchDailySalesData = async () => {
		try {
			const response = await fetch(SummaryApi.dailySales.url, {
				method: SummaryApi.dailySales.method,
				credentials: "include",
			});
			const dataResponse = await response.json();

			if (dataResponse.success) {
				setDailySalesData(dataResponse.data);
			} else {
				toast.error(dataResponse.message || "Failed to fetch daily sales data.");
			}
		} catch (error) {
			console.error("Error fetching daily sales data:", error);
			toast.error("An error occurred while fetching daily sales data.");
		}
	};

	useEffect(() => {
		fetchDailySalesData();
	}, []);

	return (
		<motion.div
			className='bg-white shadow-md rounded-xl p-6 border border-gray-200'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-800 mb-4'>Daily Sales Trend</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={dailySalesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#E5E7EB' />
						<XAxis dataKey='name' stroke='#6B7280' />
						<YAxis stroke='#6B7280' />
						<Tooltip
							contentStyle={{
								backgroundColor: "#FFFFFF",
								borderColor: "#E5E7EB",
								color: "#111827"
							}}
							itemStyle={{ color: "#374151" }}
						/>
						<Bar dataKey='sales' fill='#10B981' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default DailySalesTrend;
