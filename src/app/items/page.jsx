import React from "react";
import ItemCard from "@/components/Card/ItemCard";
import { dbConnect } from "@/lib/dbConnect";

const getItems = async () => {
  const itemsCollection = await dbConnect("items");
  const items = await itemsCollection.find().toArray();

  // 
  const plainItems = items.map((item) => ({
    ...item,
    _id: item._id.toString(),
    createdAt: item.createdAt?.toString(),
  }));

  return plainItems;
};

const Items = async () => {
  const items = await getItems();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Mobiles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Items;
