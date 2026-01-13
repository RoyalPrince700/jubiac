import React, { useState } from 'react';

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, select the product, add it to your cart, and proceed to checkout. You will receive a confirmation call to finalize your order.',
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Yes, you can cancel your order during the order confirmation call.',
    },
    {
      question: 'What payment methods are available?',
      answer: 'We only accept online payment methods.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery is within 14 days.',
    },
    {
      question: 'What should I do if I have an issue with my order?',
      answer: 'Contact us at 09075799282 or email us at contact@jubiac.com, and we’ll assist you promptly.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">Support Page</h1>

      <div className="mb-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <button
              className="w-full text-left font-medium text-lg flex justify-between items-center focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-slate-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <footer className="bg-yellow-100 p-4 rounded-md mt-8">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-1">Phone: <a href="tel:09075799282" className="text-yellow-600">09075799282</a></p>
        <p>Email: <a href="mailto:contact@jubiac.com" className="text-yellow-600">contact@jubiac.com</a></p>
      </footer>
    </div>
  );
};

export default Support;
