import React, { useEffect, useState } from "react";
import { getRequest } from "../services/apiService";
import SummaryApi from "../common";

const AssignLA = ({ currentLA, activeLAs, onAssign }) => {
    const [selectedLA, setSelectedLA] = useState(currentLA?.id || "");

    const handleAssign = () => {
        if (!selectedLA) return alert("Please select a Logistics Attendant");
        onAssign(selectedLA); // Pass only userId
    };

    return (
        <div>
            {activeLAs.length > 0 ? (
                <div className="flex items-center space-x-2">
                    <select
                        value={selectedLA}
                        onChange={(e) => setSelectedLA(e.target.value)}
                        className="border p-2 rounded"
                    >
                        <option value="">Select LA</option>
                        {activeLAs.map((la) => (
                            <option key={la.id} value={la.id}>
                                {la.name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleAssign}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Assign
                    </button>
                </div>
            ) : (
                <p className="text-gray-500">No active LAs available</p>
            )}
        </div>
    );
};

export default AssignLA;
