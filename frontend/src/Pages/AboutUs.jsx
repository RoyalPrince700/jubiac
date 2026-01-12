import React from 'react';

const AboutUs = () => {
  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-4xl">
      <header className=" text-black ">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <p className="text-center mt-2 text-lg">Learn more about Jubiac and our mission.</p>
      </header>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            At Jubiac, our mission is to provide a fast, clean shopping experience from discovery to checkout. 
            We are committed to delivering high-quality fashion products with exceptional customer service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Jubiac is an e-commerce web app focused on baking and decoration equipment. We sell high-quality baking tools, 
            tailored suits, native wears, and related accessories.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Our platform is designed to provide a seamless shopping experience for fashion enthusiasts who appreciate 
            quality, customization, and style.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800">Our Features</h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 leading-relaxed">
            <li>Browse fashion categories and sub-categories</li>
            <li>Product search and filtering capabilities</li>
            <li>Detailed product pages with images and variants</li>
            <li>Shopping cart and secure checkout process</li>
            <li>Order history and status tracking</li>
            <li>Notifications and user account management</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 leading-relaxed">
            <li>Customized fashion products tailored to your style</li>
            <li>High-quality materials and craftsmanship</li>
            <li>Secure payment options including Flutterwave integration</li>
            <li>Fast and reliable delivery services</li>
            <li>Outstanding customer support available anytime</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
          <p className="mt-3 text-gray-700">Need assistance or have questions? Reach out to us:</p>
          <p className="text-yellow-600 font-semibold mt-2">Phone: 09075799282</p>
          <p className="text-yellow-600 font-semibold">Email: contact@jubiac.com</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
