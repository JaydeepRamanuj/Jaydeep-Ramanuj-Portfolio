"use client";
import { navItems } from "@/app/data";
import React, { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

type SideBarType = {
  isSideBarVisible: boolean;
  setSideBar: Dispatch<SetStateAction<boolean>>;
};

function SideBar({ isSideBarVisible, setSideBar }: SideBarType) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black/80  backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-300 border-4 border-yellow-400/20   ${
        isSideBarVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-white text-lg font-medium hover:text-indigo-300 transition-colors"
          onClick={() => setSideBar(false)}
        >
          {item.name}
        </a>
      ))}

      <div
        className="absolute top-1/2 -translate-y-52 right-8 p-2 bg-white/10 border border-white/20 rounded-md cursor-pointer active:scale-95 backdrop-blur-md"
        onClick={() => setSideBar(false)}
      >
        <IoClose className="text-2xl text-white" />
      </div>
    </div>
  );
}

export default SideBar;
