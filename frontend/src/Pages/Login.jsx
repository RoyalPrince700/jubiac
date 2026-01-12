import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import SummaryApi from '../common';
import Context from '../context';
import LogoImg from '../assets/wifmartlogo.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart, signInWithGoogle } = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button on submit
  
    try {
      const response = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
  
      if (response.ok && result.success) {
        toast.success(result.message);
        fetchUserDetails();
        fetchUserAddToCart();
        navigate("/"); // Redirect to homepage
      } else if (result.redirect) {
        // Redirect for unverified email
        toast.warning(result.message || "Redirecting to verification...");
        navigate("/token-verification"); // Redirect to the token page
      } else {
        toast.error(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };
  
  

  return (
    <section id="login">
    <div
      className="mx-auto h-[100vh] flex items-center justify-center p-4 bg-gradient-to-br from-white to-gray-50 text-black"
    >
    
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md bg-white/80 mx-auto p-6 w-full max-w-md rounded-lg shadow-xl border border-gray-200"
      >
         <div className="flex justify-center mb-8">
        <Link to="/">
          <img src={LogoImg} alt="Jubiac" className="w-[120px] h-[20px] object-contain select-none" draggable={false} />
        </Link>
      </div>
        <p className="text-center text-gray-600 mb-6">Access your account</p>
  
        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-md shadow-md border border-gray-300 transition-all"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </motion.button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Sign in restricted to Google</span>
            </div>
          </div>

          {/* Manual login commented out as requested */}
          {/* 
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">Email:</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-300"
                required
              />
            </div>
    
            <div>
              <label className="block mb-2 text-sm font-medium text-black">Password:</label>
              <div className="flex items-center bg-gray-100 p-3 rounded-md border border-gray-300">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-transparent text-black focus:outline-none"
                  required
                />
                <div
                  className="cursor-pointer text-xl ml-3 text-gray-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="block mt-2 text-sm text-black hover:underline hover:text-black text-right"
              >
                Forgot Password?
              </Link>
            </div>
    
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </motion.button>
          </form>
          */}
        </div>
  
        <p className="mt-5 text-center text-black">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-black hover:underline hover:text-black"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  </section>
  
  );
};

export default Login;

