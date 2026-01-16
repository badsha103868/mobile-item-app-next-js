import React from 'react';

const Services = () => {
  return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="font-semibold text-xl mb-2">Latest Models</h3>
              <p>Get the newest mobiles as soon as they are released.</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="font-semibold text-xl mb-2">Price Comparison</h3>
              <p>Compare prices from multiple stores in one place.</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="font-semibold text-xl mb-2">Trusted Reviews</h3>
              <p>Read authentic user reviews to make informed choices.</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Services;