import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  // State for toggling sections
  const [openSections, setOpenSections] = useState({
    companyInfo: false,
    customerService: false,
    help: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="bg-gray-900 text-gray-200 mt-10 py-6 px-4 lg:px-10">
      <div className="container mx-auto">
        {/* Collapsible Sections */}
        <div className="space-y-4">
          {/* Company Info */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer text-sm sm:text-base"
              onClick={() => toggleSection('companyInfo')}
            >
              <h3 className="font-semibold">Company Info</h3>
              <FaChevronDown
                className={`transition-transform ${
                  openSections.companyInfo ? 'rotate-180' : ''
                } text-gray-400`}
              />
            </div>
            {openSections.companyInfo && (
              <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                <li><a href="/about-us" className="hover:text-yellow-500">About JUBIAC</a></li>
                <li><a href="/contact-us" className="hover:text-yellow-500">Contact Us</a></li>
                {/* <li><a href="/press" className="hover:text-yellow-500">Press</a></li> */}
                {/* <li><a href="/tree-planting" className="hover:text-yellow-500">Tree Planting Program</a></li> */}
              </ul>
            )}
          </div>

          {/* Customer Service */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer text-sm sm:text-base"
              onClick={() => toggleSection('customerService')}
            >
              <h4 className="font-semibold">Customer Service</h4>
              <FaChevronDown
                className={`transition-transform ${
                  openSections.customerService ? 'rotate-180' : ''
                } text-gray-400`}
              />
            </div>
            {openSections.customerService && (
              <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                <li><a href="/support" className="hover:text-yellow-500">Support Center</a></li>
                <li><a href="/shipping" className="hover:text-yellow-500">Shipping & Delivery</a></li>
                <li><a href="/returns" className="hover:text-yellow-500">Returns & Refunds</a></li>
                <li><a href="/faq" className="hover:text-yellow-500">FAQs</a></li>
              </ul>
            )}
          </div>

          {/* Help */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer text-sm sm:text-base"
              onClick={() => toggleSection('help')}
            >
              <h4 className="font-semibold">Help</h4>
              <FaChevronDown
                className={`transition-transform ${
                  openSections.help ? 'rotate-180' : ''
                } text-gray-400`}
              />
            </div>
            {openSections.help && (
              <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-yellow-500">Terms & Conditions</a></li>
                <li><a href="/purchase-protection" className="hover:text-yellow-500">Purchase Protection</a></li>
              </ul>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">&copy; 2024 JUBIAC. All Rights Reserved.</p>
            <div className="flex space-x-4 text-lg text-gray-300">
              {/* <FaFacebook className="hover:text-yellow-500" /> */}
              <a href="https://x.com/Wifmartofficial?t=lrCWxgox2bR5yiHPktXWUw&s=09" target="_blank" rel="noopener noreferrer">
  <FaTwitter className="hover:text-yellow-500" />
</a>

<a href="https://www.instagram.com/wifmartofficial?igsh=MTY5Mnh0c21hbGxlag==" target="_blank" rel="noopener noreferrer">
  <FaInstagram className="hover:text-yellow-500" />
</a>

              {/* <FaPinterest className="hover:text-yellow-500" /> */}
            </div>
          </div>
          <div className="mt-4 text-center text-sm space-x-4 text-gray-400">
            <a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-500">Terms of Use</a>
            <a href="/help" className="hover:text-yellow-500">Help Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
