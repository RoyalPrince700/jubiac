import React, { useEffect, useState } from "react";
import { FaUserCheck, FaUserPlus, FaUsers, FaUserTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../common/Header";
import StatCard from "../common/StatCard";
import UsersTable from "../analysis/overview/UserTable";
import UserGrowthChart from "../analysis/overview/UserGrowthChart";
import UserActivityHeatmap from "../analysis/overview/UserActivityHeatmap"; 
// import UserDemographicsChart from "../components/users/UserDemographicsChart";
import SummaryApi from "../common";
import moment from "moment";

const UsersPage = () => {
  const [allUser, setAllUser] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsersToday: 0,
    verifiedUsers: 0,
    nonVerifiedUsers: 0,
  });

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      const users = dataResponse.data;
      setAllUser(users);

      // Calculate stats
      const today = moment().startOf("day");
      const newUsersToday = users.filter((user) =>
        moment(user.createdAt).isSame(today, "day")
      ).length;
      const verifiedUsers = users.filter((user) => user.isVerified).length;
      const nonVerifiedUsers = users.length - verifiedUsers;

      setStats({
        totalUsers: users.length,
        newUsersToday,
        verifiedUsers,
        nonVerifiedUsers,
      });
    } else if (dataResponse.error) {
      console.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="flex-1 h-screen overflow-y-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 min-h-screen">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={FaUsers}
            value={stats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={FaUserPlus}
            value={stats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Verified Users"
            icon={FaUserCheck}
            value={stats.verifiedUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Non-Verified Users"
            icon={FaUserTimes}
            value={stats.nonVerifiedUsers.toLocaleString()}
            color="#EF4444"
          />
        </motion.div>

         {/* USER CHARTS */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8 ">
          <UserGrowthChart />
          <UserActivityHeatmap />
        </div>
  
        <UsersTable allUser={allUser} />
  
       
      </main>
    </div>
  );
  
};

export default UsersPage;
