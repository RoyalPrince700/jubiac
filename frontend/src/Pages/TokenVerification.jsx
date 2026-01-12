import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import SummaryApi from "../common";
import LogoImg from "../assets/wifmartlogo.png";

const TokenVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Allow only numeric input
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input field if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, 6); // Only take up to 6 digits
    if (/^\d{1,6}$/.test(pasteData)) {
      const newCode = pasteData.split("");
      setCode(newCode);
      newCode.forEach((digit, idx) => {
        if (inputRefs.current[idx]) {
          inputRefs.current[idx].value = digit;
        }
      });
      // Focus on the last field
      inputRefs.current[Math.min(newCode.length - 1, 5)].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");

    if (!/^[0-9]{6}$/.test(verificationCode)) {
      toast.error("Please enter a valid 6-digit token.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(SummaryApi.verifyEmail.url, {
        method: SummaryApi.verifyEmail.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ code: verificationCode }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Verification successful. Redirecting to home.");
        if (result.user) {
          localStorage.setItem("user", JSON.stringify(result.user));
        }
        navigate("/");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendCode = async () => {
    try {
      const response = await fetch(SummaryApi.resendCode.url, {
        method: SummaryApi.resendCode.method,
        headers: {
          "content-type": "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        toast.success("A new verification code has been sent to your email.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Unable to resend code. Please try again.");
    }
  };

  return (
    <section id="token-verification">
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
          <img src={LogoImg} alt="Jubiac" className="w-[120px] h-[20px] object-contain select-none" draggable={false} />
        </div>
  
        <h2 className="text-2xl font-bold mb-6 text-center">Verify Your Token</h2>
        <p className="text-center text-gray-300 mb-6">
          Enter the 6-digit code sent to your email. If you didn’t receive a code,{" "}
          <span
            className="text-yellow-500 hover:underline hover:text-yellow-400 cursor-pointer"
            onClick={resendCode}
          >
            click here to resend.
          </span>
        </p>
  
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between gap-1 sm:gap-2 flex-wrap">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-10 sm:w-12 h-10 sm:h-12 text-center text-xl font-bold bg-gray-800/60 text-white 
                           border border-gray-600 rounded-lg focus:border-yellow-500 focus:outline-none"
                required
              />
            ))}
          </div>
  
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting || code.some((digit) => !digit)}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-md shadow-lg 
                       focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 disabled:opacity-50"
          >
            {isSubmitting ? "Verifying..." : "Verify Token"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  </section>
  
  );
};

export default TokenVerificationPage;
