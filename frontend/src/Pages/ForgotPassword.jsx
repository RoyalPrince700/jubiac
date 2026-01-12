import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import LogoImg from '../assets/wifmartlogo.png';
import { motion } from 'framer-motion';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(SummaryApi.forgotPassword.url, {
        method: SummaryApi.forgotPassword.method,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
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
    <section id="forgot-password">
  <div
    className="mx-auto h-[100vh] flex items-center justify-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white"
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
      <p className="text-center text-gray-300 mb-6">Forgot your password? Enter your email to reset it.</p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleChange}
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
          {isSubmitting ? "Submitting..." : "Submit"}
        </motion.button>
      </form>

      <p className="mt-5 text-center">
        Remembered your password?{" "}
        <Link
          to="/login"
          className="text-yellow-500 hover:underline hover:text-yellow-400"
        >
          Login
        </Link>
      </p>
    </motion.div>
  </div>
</section>

  );
};

export default ForgotPassword;
