import React from 'react';

const AboutUs = () => {
  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-5xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-slate-800">About Jubiac</h1>
        <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Empowering bakers and creators with the finest tools and decorations to bring their artistic visions to life.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              At Jubiac, our mission is to provide a fast, clean shopping experience from discovery to checkout. 
              We are committed to delivering high-quality baking and decoration equipment with exceptional customer service, 
              ensuring that every baker—from home enthusiasts to professional pastry chefs—has access to the best supplies in the industry.
            </p>
          </section>

          <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed">
              Jubiac is a specialized e-commerce platform dedicated to baking and decoration equipment. We curate an extensive 
              collection of high-quality baking tools, exquisite decorating supplies, professional kitchen equipment, and premium accessories.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our platform is designed for the creative minds who find joy in baking. We believe that the right tools are 
              essential for perfection, which is why we only source products that meet our rigorous standards of quality and durability.
            </p>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What We Offer</h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Premium baking pans and professional-grade equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Exquisite decorating tools, piping tips, and fondant supplies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Secure and seamless checkout process with multiple payment options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Reliable order tracking and dedicated customer support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Fast delivery across the region to keep your kitchen running</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-6 opacity-80">Have questions about our products or need help with an order? We're here for you.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Phone:</span>
                <span>09075799282</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Email:</span>
                <span>contact@jubiac.com</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
