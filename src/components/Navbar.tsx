"use client";
import { navItems } from "@/app/data";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence } from "motion/react";
import SideBar from "./SideBar";
const Navbar = () => {
  const [isSideBarVisible, setSideBar] = useState(false);
  const [showResume, setShowResume] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show resume button when scrolled down > 400px
      if (window.scrollY > 400) {
        setShowResume(true);
      } else {
        setShowResume(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/5 dark:bg-black/20 backdrop-blur-xl border-b border-white/5 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link
              href="/"
              className="text-lg md:text-xl font-bold text-white hover:text-gray-200 transition-colors"
            >
              Jaydeep Ramanuj
            </Link>

            {/* Animated Resume Button */}
            <a
              href="/Jaydeep_Ramanuj_Frontend.pdf"
              download="Jaydeep_Ramanuj_Frontend.pdf"
              className={`hidden md:flex items-center gap-2 px-4 py-1.5 bg-yellow-500 text-neutral-900 text-sm font-bold rounded-full transition-all duration-300 transform ${showResume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
            >
              <span>Download CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Resume Button (Icon only) */}
            <a
              href="/Jaydeep_Ramanuj_Frontend.pdf"
              download="Jaydeep_Ramanuj_Frontend.pdf"
              className={`flex items-center justify-center w-8 h-8 bg-yellow-500 text-neutral-900 rounded-full transition-all duration-300 ${showResume ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>

            <div
              className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-md cursor-pointer active:scale-95"
              onClick={() => setSideBar(!isSideBarVisible)}
            >
              <IoMenu className="text-lg text-white" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isSideBarVisible && (
          <SideBar
            setSideBar={setSideBar}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
