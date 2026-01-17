
import React from "react";
import Image from "next/image";
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const ItemDetails = async ({ params }) => {

  const { id } = await params; 

  const itemsCollection = await dbConnect("items");

  const item = await itemsCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!item) {
    return <p className="p-6 text-center">Item not found</p>;
  }

  const plainItem = {
    ...item,
    _id: item._id.toString(),
    createdAt: item.createdAt?.toString(),
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <div className="relative w-full h-72 mb-6 overflow-hidden rounded-lg">
        <Image
          src={plainItem.image}
          alt={plainItem.name}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl text-gray-500 font-bold mb-2">{plainItem.name}</h1>
      <p className="text-gray-500 mb-4">{plainItem.category}</p>
      <p className="mb-4 text-gray-500 font-semibold">{plainItem.price}</p>
      <p className="mb-6 text-gray-700">{plainItem.description}</p>
    </div>
  );
};

export default ItemDetails;
