import Image from 'next/image';
import React from 'react';
import items from "@/data/items.json";
import Link from 'next/link';
const About = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full  md:w-1/2 relative h-64 md:h-80">
            <Image
              src={items[0].image}
              alt="About Us"
              fill
              className="rounded shadow object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-500 mb-4">About Mobile Hub</h2>
            <p className="mb-4 text-gray-700">
              Mobile Hub is your one-stop platform to explore, compare, and buy the latest mobile devices. We provide complete information, images, and prices to make your decision easier.
            </p>
            <Link href="/items" className="text-blue-600 font-semibold hover:underline">
              Browse Our Items &rarr;
            </Link>
          </div>
        </div>
      </section>
  );
};

export default About;