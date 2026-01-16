import Image from 'next/image';
import React from 'react';
import items from "@/data/items.json";
import Link from 'next/link';
const PopularItems = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg transition text-center">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1">{item.name}</h3>
                <p className="text-gray-500 mb-2">{item.category}</p>
                <p className="font-semibold">{item.price}</p>
                <Link href={`/items/${item.id}`} className="mt-2 inline-block text-blue-600 font-semibold hover:underline">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default PopularItems;