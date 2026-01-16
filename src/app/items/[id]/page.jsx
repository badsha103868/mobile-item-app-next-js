import React from 'react';
import items from "@/data/items.json";
const ItemDetails =async ({ params }) => {
  const { id }  = await params
   const item = items.find((i)=> i.id === id)
   if(!item){
    return  <p className="p-6 text-center">Item not found</p>;
   }
    
  return (
   <div className="max-w-3xl mx-auto p-6">
      <img
        src={item.image}
        alt={item.name}
        className="rounded mb-6 w-full h-64 object-cover"
      />

      <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
      <p className="text-gray-500 mb-4">{item.category}</p>
      <p className="mb-4 font-semibold">{item.price}</p>
      <p className="mb-6">{item.description}</p>
    </div>
  );
};

export default ItemDetails;