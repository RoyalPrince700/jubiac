import React, { useEffect, useState } from "react";
import { getRequest } from "../services/apiService";
import SummaryApi from "../common";

const OrderLogisticsAttendants = () => {
    const [logisticsAttendants, setLogisticsAttendants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLogisticsAttendants = async () => {
            try {
                const response = await getRequest(SummaryApi.getOrderLogisticsAttendants.url);
                setLogisticsAttendants(response.data || []);
            } catch (error) {
                console.error("Error fetching logistics attendants:", error.message);
                alert(error.message || "Failed to fetch logistics attendants.");
            } finally {
                setLoading(false);
            }
        };

        fetchLogisticsAttendants();
    }, []);

    return (
        <div>
            <h1>Logistics Attendants</h1>
            {loading ? (
                <p>Loading...</p>
            ) : logisticsAttendants.length === 0 ? (
                <p>No logistics attendants available.</p>
            ) : (
                <ul>
                    {logisticsAttendants.map((attendant) => (
                        <li key={attendant._id}>{attendant.name || "Unnamed"}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderLogisticsAttendants;
