import Link from "next/link";

import React from 'react';

const ItemCard = ({ item }) => {
  return (
     <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={item.image}
        alt={item.name}
        className="rounded mb-3 h-40 object-cover"
      />

      <h2 className="text-xl font-bold mb-1">{item.name}</h2>
      <p className="text-sm text-gray-500">{item.category}</p>
      <p className="mt-2 font-semibold">{item.price}</p>

      <p className="mt-2 text-sm line-clamp-3">{item.description}</p>

      <Link
        href={`/items/${item.id}`}
        className="mt-auto inline-block text-center bg-black text-white py-2 rounded mt-4 hover:bg-gray-800"
      >
        View Details
      </Link>
    </div>
  );
};

export default ItemCard;