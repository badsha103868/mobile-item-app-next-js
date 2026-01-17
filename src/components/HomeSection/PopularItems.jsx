import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { dbConnect } from '@/lib/dbConnect';

const getItems = async () => {
  const itemsCollection = await dbConnect("items");
  const items = await itemsCollection.find().toArray();

  const plainItems = items.map((item) => ({
    ...item,
    _id: item._id.toString(),
    createdAt: item.createdAt?.toString(),
  }));

  return plainItems;
};

const PopularItems = async () => {
  const items = await getItems();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Popular Items
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col bg-white"
            >
              <div className="relative w-full h-52 mb-4 overflow-hidden rounded">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-xl text-gray-500 font-bold mb-1">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{item.category}</p>
              <p className="font-semibold text-gray-500 mb-2">{item.price}</p>

              <p className="mt-2 text-sm line-clamp-3 text-gray-700">
                {item.description || "No description available."}
              </p>

              <Link
                 href={`/items/${item._id.toString()}`} 
                className="mt-auto inline-block text-center bg-black text-white py-2 rounded mt-4 hover:bg-gray-800"
              >
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
