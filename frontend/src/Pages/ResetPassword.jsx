import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import SummaryApi from "../common";
import LogoImg from "../assets/wifmartlogo.png";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useParams(); // Retrieve token from URL params
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${SummaryApi.resetPassword.url}/${token}`, {
        method: SummaryApi.resetPassword.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success(result.message);
        navigate("/login");
      } else {
        toast.error(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
    id="reset-password"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div
      className="mx-auto  h-[100vh] flex items-center justify-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md bg-gray-700/50 mx-auto p-6 w-full max-w-md rounded-lg shadow-xl"
      >
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={LogoImg} alt="Jubiac" className="w-[120px] h-[20px] object-contain select-none" draggable={false} />
          </Link>
        </div>
        <h1 className="text-center text-xl font-semibold text-gray-300 mb-6">
          Reset Your Password
        </h1>
  
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium">New Password:</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium">Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800/60 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
  
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 disabled:opacity-50"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  </motion.section>
  
  );
};

export default ResetPassword;
