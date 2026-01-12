import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import Context from '../context';
import LogoImg from '../assets/wifmartlogo.png';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { fetchUserDetails, fetchUserAddToCart, signInWithGoogle } = useContext(Context);

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'confirmPassword' || name === 'password') {
      setPasswordMismatch(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      setPasswordMismatch(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(SummaryApi.signUp.url, {
        method: SummaryApi.signUp.method,
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        navigate('/token-verification');
        fetchUserDetails();
        fetchUserAddToCart();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
    id="signup"
   
  >
    <div
      className="mx-auto h-[100vh] flex items-center justify-center pt-24 px-4 bg-white text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto p-6 w-full max-w-md rounded-lg shadow-xl bg-white"
      >
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={LogoImg} alt="Jubiac" className="w-[120px] h-[20px] object-contain select-none" draggable={false} />
          </Link>
        </div>
        <h2 className="text-center text-2xl font-bold mb-4 text-black">
          Sign Up
        </h2>
        <p className="text-center text-black mb-6">
          Create your account using Google
        </p>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-md shadow-md border border-gray-300 transition-all"
          >
            <FcGoogle className="text-2xl" />
            Sign up with Google
          </motion.button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Sign up restricted to Google</span>
            </div>
          </div>

          {/* Manual signup commented out as requested */}
          {/*
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium">Email:</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
    
            <div>
              <label className="block mb-2 text-sm font-medium">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <div
                  className="absolute top-3 right-3 cursor-pointer text-xl text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
    
            <div>
              <label className="block mb-2 text-sm font-medium">
                Confirm Password:
              </label>
              <div
                className={`relative ${
                  passwordMismatch ? "ring-2 ring-red-500 rounded-md" : ""
                }`}
              >
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <div
                  className="absolute top-3 right-3 cursor-pointer text-xl text-gray-500"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              {passwordMismatch && (
                <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
              )}
            </div>
    
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 disabled:opacity-50"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </motion.button>
          </form>
          */}
        </div>
  
        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black hover:underline hover:text-black"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  </motion.section>
  
  );
};

export default SignUp;

