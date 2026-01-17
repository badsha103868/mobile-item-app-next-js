"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavLink from "./Navlink";

const Navbar = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check cookie on client
  useEffect(() => {
    const cookie = document.cookie.split("; ").find((c) => c.startsWith("auth="));
    setIsAuth(cookie ? true : false);
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuth(false);
    toast("Log out successfully");
    router.push("/login");
  };

  return (
    <nav className="bg-gray-100 text-gray-700 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <h1 className="text-xl font-bold">MobileItemApp</h1>

  
          <div className="hidden md:flex space-x-4 items-center">
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
              <Link href="/login" className="px-3 py-1 hover:text-gray-900">Login</Link>
            )}
          </div>

         
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-2 pt-2 pb-3 space-y-1">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/items"}>Items</NavLink>
          <NavLink href={"/add-item"}>Add Item</NavLink>
          {isAuth ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="w-full text-left bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-1 hover:text-gray-900"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
