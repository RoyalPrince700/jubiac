import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role !== ROLE.ADMIN) {
            navigate("/");
        }
    }, [user]);

    return (
        <div className='min-h-[calc(100vh-120px)] flex pt-[90px]'> 
            <aside className='bg-white min-h-full w-full max-w-60 customShadow'>
                <div className='h-32 flex flex-col justify-center items-center'>
                    <div className='text-5xl cursor-pointer flex justify-center'>
                        {user?.profilePic ? (
                            <img src={user?.profilePic} 
                                className='w-20 h-20 rounded-full' 
                                alt={user?.name} />
                        ) : (
                            <FaRegCircleUser />
                        )}
                    </div>
                    <p className='capitalize text-lg font-semibold'>{user?.name}</p>
                    <p className='text-sm'>{user?.role}</p>
                </div>

                {/** Navigation */}
                <div>
                    <nav className='grid p-4'>
                        <Link to={"admin-overview/overview"} className='px-2 py-1 hover:bg-slate-100'>Overview</Link>
                        <Link to={"admin-overview/all-products"} className='px-2 py-1 hover:bg-slate-100'>Products</Link>
                        <Link to={"admin-overview/user-page"} className='px-2 py-1 hover:bg-slate-100'>Users</Link>
                        <Link to={"admin-overview/sale-page"} className='px-2 py-1 hover:bg-slate-100'>Sales</Link>
                        <Link to={"admin-overview/order-page"} className='px-2 py-1 hover:bg-slate-100'>Orders</Link>
                        <Link to={"/"} className='px-2 py-1 hover:bg-slate-100 text-blue-600 font-medium'>← Back to Website</Link>
                    </nav>
                </div>
            </aside>

            <main className='w-full h-full p-2'>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminPanel;
