import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const ChangeLogisticsAttendantLocation = ({
    name,
    email,
    location,
    userId,
    onClose,
    callFunc, // Call API to refresh data after update
}) => {
    const [attendantLocation, setAttendantLocation] = useState(location || '');

    const handleUpdateLocation = async () => {
        try {
            const payload = {
                userId, // Ensure this is defined
                location: attendantLocation,
            };
            console.log('Payload Sent:', payload); // Debugging: Check what is being sent
    
            const fetchResponse = await fetch(SummaryApi.updateLogisticsAttendants.url, {
                method: SummaryApi.updateLogisticsAttendants.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            const responseData = await fetchResponse.json();
    
            if (responseData.success) {
                toast.success(responseData.message);
                onClose();
                callFunc(); // Refresh data after update
            } else {
                toast.error(responseData.message);
            }
        } catch (error) {
            toast.error('Failed to update logistics attendant location.');
        }
    };
    

    return (
        <div
            className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-700 bg-opacity-40"
        >
            <div className="mx-auto bg-gray-800 shadow-md p-4 w-full max-w-sm">
                <button className="block ml-auto" onClick={onClose}>
                    <IoMdClose />
                </button>
                <h1 className="pb-4 text-lg font-medium">Update Location</h1>
                <p>Name: {name}</p>
                <p>Email: {email}</p>

                <div className="flex items-center justify-between my-4 ">
                    <p>Location</p>
                    <input
                        type="text"
                        className="border px-4 py-1 w-full bg-slate-800"
                        value={attendantLocation}
                        onChange={(e) => setAttendantLocation(e.target.value)}
                        placeholder="Enter Location"
                    />
                </div>

                <button
                    className="w-fit text-white hover:bg-yellow-700 cursor-pointer bg-yellow-600 mx-auto block py-1 px-3 rounded-full"
                    onClick={handleUpdateLocation}
                >
                    Update Location
                </button>
            </div>
        </div>
    );
};

export default ChangeLogisticsAttendantLocation;
