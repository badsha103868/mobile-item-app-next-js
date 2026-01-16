import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
     <section className="h-96 bg-gradient-to-r from-green-500 to-indigo-400 text-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mobile Hub</h1>
        <p className="text-xl mb-6">Explore the latest mobiles, compare prices, and shop easily.</p>
        <Link href="/items" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
          Browse Items
        </Link>
      </section>
  );
};

export default Hero;