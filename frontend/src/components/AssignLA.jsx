import React, { useState } from "react";

const AssignLA = ({ orderId, currentLA, activeLAs, onAssign }) => {
  // Initialize the state for the selected Logistics Associate (LA)
  const [selectedLA, setSelectedLA] = useState(currentLA?._id || "");

  const handleAssign = () => {
    console.log("Selected LA (userId):", selectedLA); // Debugging log

    // Validate if an LA is selected
    if (!selectedLA) {
      alert("Please select a Logistics Attendant");
      return;
    }

    // Trigger the callback function with the selected LA's userId
    onAssign(selectedLA);
  };

  // Helper function to extract the email prefix
  const extractEmailPrefix = (email) => {
    return email ? email.split("@")[0] : ""; // Safely handle null or undefined emails
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
      {activeLAs?.length > 0 ? (
        <>
          {/* Dropdown for selecting Logistics Associates */}
          <select
            value={selectedLA}
            onChange={(e) => setSelectedLA(e.target.value)}
            className="border bg-gray-800 p-2 rounded w-full sm:w-auto max-w-[200px] text-sm"
          >
            <option value="">Select Logistics Attendant</option>
            {activeLAs.map((la) => (
              <option key={la._id} value={la._id}>
                {extractEmailPrefix(la.email)} {/* Display email prefix */}
              </option>
            ))}
          </select>

          {/* Assign button */}
          <button
            onClick={handleAssign}
            className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600"
          >
            Assign
          </button>
        </>
      ) : (
        // Message for no available LAs
        <p className="text-gray-500 text-sm">
          No active Logistics Associates available.
        </p>
      )}
    </div>
  );
};

export default AssignLA;
