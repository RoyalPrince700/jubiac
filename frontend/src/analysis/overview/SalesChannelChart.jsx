import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, LabelList } from "recharts";
import { useEffect, useState } from "react";
import SummaryApi from "../../common"; // API configuration
import { toast } from "react-toastify";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6", "#F43F5E"];

const SalesChannelChart = () => {
	const [salesChannelData, setSalesChannelData] = useState([]);

	// Fetch sales channel data from the backend
	const fetchSalesChannelData = async () => {
		try {
			const response = await fetch(SummaryApi.salesByChannel.url, {
				method: SummaryApi.salesByChannel.method,
				headers: { "Content-Type": "application/json" },
			});

			const dataResponse = await response.json();

			if (dataResponse.success) {
				setSalesChannelData(dataResponse.data); // Assuming dataResponse.data is an array of channel objects
			} else {
				toast.error(dataResponse.message);
			}
		} catch (error) {
			console.error("Error fetching sales channel data:", error);
			toast.error("Failed to fetch sales channel data.");
		}
	};

	useEffect(() => {
		fetchSalesChannelData();
	}, []);

	return (
		<motion.div
			className="bg-white shadow-md rounded-xl p-6 lg:col-span-2 border border-gray-200"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className="text-lg font-semibold mb-4 text-gray-800">Sales by Channel</h2>

			<div className="h-80">
				<ResponsiveContainer>
					<BarChart data={salesChannelData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
						<CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
						<XAxis dataKey="name" stroke="#6B7280" />
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
						<Bar dataKey="value" fill="#8884d8">
							{salesChannelData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
							<LabelList dataKey="value" position="top" fill="#374151" />
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default SalesChannelChart;
