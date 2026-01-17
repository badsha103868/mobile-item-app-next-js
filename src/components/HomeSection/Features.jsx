import Image from 'next/image';
import React from 'react';
import items from "@/data/items.json";
const Features = () => {
  return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white p-6 rounded shadow text-center">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-semibold text-xl text-gray-500 mb-2">{item.name}</h3>
                <p className="text-gray-500 mb-2">{item.category}</p>
                <p className="font-semibold text-gray-700">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Features;