import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import ROLE from '../common/role';
import SummaryApi from '../common';

const LADashboard = () => {
    const user = useSelector(state => state?.user?.user);
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [stats, setStats] = useState({
        delivered: 0,
        pending: 0,
        canceled: 0,
    });

    useEffect(() => {
        if (!user || user?.role !== ROLE.LOGISTICS_ASSOCIATE) {
            navigate("/");
        }
    }, [user, navigate]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const fetchOrdersForLogisticsAssociate = async () => {
        try {
            const response = await fetch(SummaryApi.getOrderLogisticsAttendants.url, {
                method: SummaryApi.getOrderLogisticsAttendants.method,
                credentials: 'include',
            });
            const data = await response.json();
            if (data.success) {
                setOrders(data.data.orders);
                setStats(data.data.stats);
            }
        } catch (error) {
            console.error("Error fetching orders:", error.message);
        }
    };

    useEffect(() => {
        fetchOrdersForLogisticsAssociate();
    }, []);

    return (
        <div className="min-h-[100vh] w-full mt-[90px] flex flex-col md:flex-row bg-gray-900
         text-gray-100">
            {/* Mobile Header */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 shadow md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <AiOutlineMenu className="text-2xl text-gray-100" />
                </button>
                <div className="flex items-center space-x-2">
                    {user?.profilePic ? (
                        <img
                            src={user?.profilePic}
                            className="w-8 h-8 rounded-full"
                            alt={user?.name}
                        />
                    ) : (
                        <FaRegCircleUser className="text-xl text-gray-100" />
                    )}
                    <span className="text-sm font-semibold capitalize">{user?.name}</span>
                </div>
            </div>

            {/* Sidebar */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black mt-[90px] bg-opacity-50 z-20" onClick={closeMobileMenu}>
                    <div
                        className="absolute left-0 top-0 bg-gray-800 text-gray-100 w-60 h-full p-4 shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="h-32 flex flex-col justify-center items-center">
                            <FaRegCircleUser className="text-5xl" />
                            <p className="capitalize text-lg font-semibold">{user?.name}</p>
                            <p className="text-sm">{user?.role}</p>
                        </div>

                        <nav className="grid pl-8 gap-4">
                            <Link
                                to={"la-all-orders"}
                                className="px-2 py-1 rounded-lg hover:bg-gray-700"
                                onClick={closeMobileMenu}
                            >
                                All Orders
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <div className="hidden md:block  bg-gray-800 text-gray-100 w-60 h-full p-4 shadow-lg">
                <div className="h-32 flex flex-col justify-center items-center">
                    <FaRegCircleUser className="text-5xl" />
                    <p className="capitalize text-lg font-semibold">{user?.name}</p>
                    <p className="text-sm">{user?.role}</p>
                </div>

                <nav className="grid gap-4">
                    <Link
                        to={"la-all-orders"}
                        className="px-2 py-1 rounded-lg hover:bg-gray-700"
                    >
                        All Orders
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <main
                className={`flex-1 w-full h-full p-4 bg-gray-900 ${
                    isMobileMenuOpen ? "opacity-50 pointer-events-none" : "opacity-100"
                }`}
                onClick={closeMobileMenu}
            >
                <div className="flex flex-col gap-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default LADashboard;
