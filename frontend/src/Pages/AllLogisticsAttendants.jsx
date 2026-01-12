import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import moment from 'moment';
import ChangeLogisticsAttendantStatus from '../components/ChangeLogisticsAStatus';
import ChangeLogisticsAttendantLocation from '../components/ChangeLALocation';

const AllLogistics = () => {
    const [allLogistics, setAllLogistics] = useState([]);
    const [selectedLogistics, setSelectedLogistics] = useState(null); // Selected logistics for view more
    const [openUpdateStatus, setOpenUpdateStatus] = useState(false);
    const [openUpdateLocation, setOpenUpdateLocation] = useState(false);

    const fetchAllLogistics = async () => {
        try {
            const response = await fetch(SummaryApi.allLogistics.url, {
                method: SummaryApi.allLogistics.method,
                credentials: 'include',
            });

            const dataResponse = await response.json();

            if (dataResponse.success) {
                setAllLogistics(dataResponse.data);
            } else {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            toast.error("Failed to fetch logistics attendants");
        }
    };

    useEffect(() => {
        fetchAllLogistics();
    }, []);

    return (
        <div className="pb-4 bg-gray-800 mt-[110px]">
            {/* Mobile View */}
            <div className="md:hidden">
                {allLogistics.map((el, index) => (
                    <div key={el._id} className="border-b p-2">
                        <p><strong>Sr:</strong> {index + 1}</p>
                        <p><strong>Email:</strong> {el.email}</p>
                        <button
                            className="text-gray-500 underline mt-2"
                            onClick={() => setSelectedLogistics(el)}
                        >
                            View More
                        </button>
                    </div>
                ))}
            </div>

            {/* Desktop Table */}
            <table className="w-full userTable hidden md:table">
                <thead>
                    <tr className="bg-gray-900 text-white">
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-800'>
                    {allLogistics.map((el, index) => (
                        <tr key={el._id}>
                            <td>{index + 1}</td>
                            <td>{el?.name}</td>
                            <td>{el?.email}</td>
                            <td>{el?.status}</td>
                            <td>{el?.location}</td>
                            <td>{moment(el?.createdAt).format('ll')}</td>
                            <td className="flex space-x-2">
                                <button
                                    className="bg-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-500 hover:text-white"
                                    onClick={() => {
                                        setSelectedLogistics(el);
                                        setOpenUpdateStatus(true);
                                    }}
                                >
                                    Edit Status
                                </button>
                                <button
                                    className="bg-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-500 hover:text-white"
                                    onClick={() => {
                                        setSelectedLogistics(el);
                                        setOpenUpdateLocation(true);
                                    }}
                                >
                                    Edit Location
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Full-Screen Modal for Mobile */}
            {selectedLogistics && (
                <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-gray-700 w-full max-w-md p-4">
                        <h2 className="text-lg font-semibold">Logistics Details</h2>
                        <p><strong>Name:</strong> {selectedLogistics.name}</p>
                        <p><strong>Email:</strong> {selectedLogistics.email}</p>
                        <p><strong>Status:</strong> {selectedLogistics.status}</p>
                        <p><strong>Location:</strong> {selectedLogistics.location}</p>
                        <p><strong>Created Date:</strong> {moment(selectedLogistics.createdAt).format('ll')}</p>
                        <div className="mt-4 space-y-2">
                            <button
                                className="block w-full bg-gray-500 text-white py-2 rounded"
                                onClick={() => setOpenUpdateLocation(true)}
                            >
                                Edit Location
                            </button>
                            <button
                                className="block w-full bg-gray-500 text-white py-2 rounded"
                                onClick={() => setOpenUpdateStatus(true)}
                            >
                                Edit Status
                            </button>
                            <button
                                className="block w-full bg-gray-300 py-2 rounded"
                                onClick={() => setSelectedLogistics(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modals for Editing */}
            {openUpdateStatus && (
                <ChangeLogisticsAttendantStatus
                    onClose={() => setOpenUpdateStatus(false)}
                    name={selectedLogistics.name}
                    email={selectedLogistics.email}
                    status={selectedLogistics.status}
                    userId={selectedLogistics._id}
                    callFunc={fetchAllLogistics}
                />
            )}
            {openUpdateLocation && (
                <ChangeLogisticsAttendantLocation
                    onClose={() => setOpenUpdateLocation(false)}
                    name={selectedLogistics.name}
                    email={selectedLogistics.email}
                    location={selectedLogistics.location}
                    userId={selectedLogistics._id}
                    callFunc={fetchAllLogistics}
                />
            )}
        </div>
    );
};

export default AllLogistics;
