import React, { useState } from 'react'


import { MdOutlineBarChart } from "react-icons/md";
import { IoCartOutline, IoArrowBackOutline } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AiFillProduct } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { SiGoogleanalytics } from "react-icons/si";
import { IoMdMenu } from "react-icons/io";


import { motion,AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';




const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: MdOutlineBarChart,
		color: "#6366f1",
		href: "/admin-overview/overview",
	},
    { name: "Orders", icon: IoCartOutline, color: "#F59E0B", href: "/admin-overview/order-page" },
	{ name: "Products", icon: AiFillProduct, color: "#8B5CF6", href: "/admin-overview/all-products" },
	{ name: "Users", icon: CgProfile, color: "#EC4899", href: "/admin-overview/user-page" },
	{ name: "Sales", icon: TbCurrencyNaira, color: "#10B981", href: "/admin-overview/sale-page" },
    { name: "Back to Website", icon: IoArrowBackOutline, color: "#3B82F6", href: "/" },
	// { name: "Analytics", icon: SiGoogleanalytics, color: "#3B82F6", href: "/analytics" },
	// { name: "Settings", icon: CiSettings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
    return (
      <motion.div
        className={`h-screen pt-4 bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
      >
        <div className="h-full flex flex-col p-4">
          {/* Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors max-w-fit"
          >
            <IoMdMenu size={24} />
          </motion.button>
  
          {/* Sidebar Links */}
          <nav className="mt-8 flex-grow">
            {SIDEBAR_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}>
                <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors mb-2">
                  <item.icon
                    size={20}
                    style={{ color: item.color, minWidth: "20px" }}
                  />
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>
    );
  };
  
  
export default Sidebar