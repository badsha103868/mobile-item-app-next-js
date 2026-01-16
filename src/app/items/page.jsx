import React from 'react';
import items from "@/data/items.json";
import ItemCard from '@/components/Card/ItemCard';
const Items = () => {
  return (
     <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Mobiles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Items;