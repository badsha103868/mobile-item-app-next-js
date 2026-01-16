import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col bg-white">
      <div className="relative w-full h-52 mb-4 overflow-hidden rounded">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-xl font-bold mb-1">{item.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{item.category}</p>
      <p className="font-semibold mb-2">{item.price}</p>

      <p className="mt-2 text-sm line-clamp-3 text-gray-700">{item.description}</p>

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
