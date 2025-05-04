"use client";
import { navItems } from "@/app/data";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isSideBarVisible, setSideBar] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Your Name
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div
            className="p-1 bg-slate-500/20 rounded-md cursor-pointer active:scale-95"
            onClick={() => {
              setSideBar(() => !isSideBarVisible);
            }}
          >
            <IoMenu className="text-2xl" />
          </div>
        </div>
      </div>
      <SideBar isSideBarVisible={isSideBarVisible} setSideBar={setSideBar} />
    </nav>
  );
};

export default Navbar;
