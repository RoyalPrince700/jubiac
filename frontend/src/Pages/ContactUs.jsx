import React from 'react';

const ContactUs = () => {
  return (
<div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-4xl">
      
      <header className="text-black">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <p className="text-center mt-2 text-lg">We'd love to hear from you!</p>
      </header>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-yellow-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-gray-700">Need urgent assistance? Call us at:</p>
          <p className="text-yellow-600 font-semibold text-lg">09075799282</p>
          <p className="text-gray-700">Or email us at:</p>
          <p className="text-yellow-600 font-semibold text-lg">contact@jubiac.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
