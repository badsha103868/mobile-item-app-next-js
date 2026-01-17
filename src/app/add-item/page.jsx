 "use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AddItem = () => {
   const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
     
    toast("Item added successfully")
    router.push("/items");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl text-center font-bold mb-4">Add New Item</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {["name", "price", "category", "image"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            className="border w-full p-2"
            onChange={handleChange}
          />
        ))}

        <textarea
          name="description"
          placeholder="Description"
          className="border w-full p-2"
          rows={4}
          onChange={handleChange}
        />

        <button className="bg-black text-white w-full text-center px-4 py-2">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;