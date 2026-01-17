"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavLink from "./Navlink";

const Navbar = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  // Check cookie on client
  useEffect(() => {
    const cookie = document.cookie.split("; ").find((c) => c.startsWith("auth="));
    setIsAuth(cookie ? true : false);
  }, []);

  const handleLogout = () => {
    // delete cookie
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuth(false);
    toast("Log out successfully")
    router.push("/login"); 
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-100 text-gray-500">
      <h1 className="text-xl font-bold">MobileItemApp</h1>
      <div className="space-x-4">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/items"}>Items</NavLink>
        <NavLink href={"/add-item"}>Add Item</NavLink>
       
        

        {isAuth ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
