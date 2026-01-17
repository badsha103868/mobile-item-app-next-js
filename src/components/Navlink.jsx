"use client"; 
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded ${isActive ? "bg-green-600 text-white" : "text-gray-500"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
