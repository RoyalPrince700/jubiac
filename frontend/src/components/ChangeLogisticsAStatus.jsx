import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import STATUS from '../common/lastatus';

const ChangeLogisticsAttendantStatus = ({
    name,
    email,
    status,
    userId,
    onClose,
    callFunc, // Refreshes the data after the update
}) => {
    const [logisticsStatus, setLogisticsStatus] = useState(status);

    const handleStatusChange = (e) => {
        setLogisticsStatus(e.target.value);
        console.log(e.target.value);
    };

    const updateLogisticsStatus = async () => {
        const fetchResponse = await fetch(SummaryApi.updateLogisticsAttendants.url, {
            method: SummaryApi.updateLogisticsAttendants.method,
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                status: logisticsStatus,
            }),
        });
        const responseData = await fetchResponse.json();

        if (responseData.success) {
            toast.success(responseData.message);
            onClose();
            callFunc(); // Refresh the list
        } else {
            toast.error(responseData.message);
        }

        console.log("responseData", responseData);
    };

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-800 bg-opacity-40'>
            <div className='mx-auto bg-gray-800 shadow-md p-4 w-full max-w-sm'>
                <button className='block ml-auto' onClick={onClose}>
                    <IoMdClose />
                </button>
                <h1 className='pb-4 text-lg font-medium'>Change Logistics Attendant Status</h1>

                <p>Name: {name}</p>
                <p>Email: {email}</p>

                <div className='flex items-center justify-between my-4'>
                    <p>Status</p>
                    <select
                        className='border px-4 py-1 bg-gray-800'
                        value={logisticsStatus}
                        onChange={handleStatusChange}
                    >
                        {Object.values(STATUS).map((statusOption) => (
                            <option value={statusOption} key={statusOption}>
                                {statusOption}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className='w-fit text-white hover:bg-yellow-700 cursor-pointer bg-yellow-600 mx-auto block py-1 px-3 rounded-full'
                    onClick={updateLogisticsStatus}
                >
                    Change Status
                </button>
            </div>
        </div>
    );
};

export default ChangeLogisticsAttendantStatus;
