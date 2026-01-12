import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminOverview = () => {
  return (
    <div className="flex h-screen bg-white text-gray-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-grow h-full overflow-auto p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminOverview;
