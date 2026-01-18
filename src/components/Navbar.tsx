"use client";
import { navItems } from "@/app/data";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence } from "motion/react";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isSideBarVisible, setSideBar] = useState(false);

  return (
    <nav className="fixed w-[100vw] z-50 bg-white/10 dark:bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg md:text-xl font-bold text-white hover:text-gray-200 transition-colors"
            >
              Jaydeep Ramanuj
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-md cursor-pointer active:scale-95 md:hidden"
            onClick={() => setSideBar(!isSideBarVisible)}
          >
            <IoMenu className="text-lg md:text-2xl text-white" />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isSideBarVisible && (
          <SideBar
            isSideBarVisible={isSideBarVisible}
            setSideBar={setSideBar}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
