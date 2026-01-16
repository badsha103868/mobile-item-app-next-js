import React from 'react';

const Testimonials = () => {
  return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded shadow">
              <p className="mb-4 text-gray-700">"Mobile Hub helped me find my favorite phone at the best price. Super easy and fast!"</p>
              <p className="font-semibold">— Alice</p>
            </div>
            <div className="p-6 border rounded shadow">
              <p className="mb-4 text-gray-700">"The images and full specs made my buying decision so easy. Highly recommend!"</p>
              <p className="font-semibold">— Bob</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;