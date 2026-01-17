import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
       <nav className="flex justify-between p-4 bg-gray-100 text-gray-500">
      <h1 className="text-xl font-bold">MobileItemApp</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/items">Items</Link>
        <Link href="/add-item">Add Item</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;