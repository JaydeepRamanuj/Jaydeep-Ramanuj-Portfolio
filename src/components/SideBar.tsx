"use client";
import { navItems } from "@/app/data";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { IoClose } from "react-icons/io5";

type SideBarType = {
  isSideBarVisible: boolean;
  setSideBar: Dispatch<SetStateAction<boolean>>;
};

function SideBar({ isSideBarVisible, setSideBar }: SideBarType) {
  useEffect(() => {}, [isSideBarVisible]);
  return (
    <div
      className={`absolute w-full h-screen bg-slate-600  flex-col justify-center items-center md:hidden top-0 transition-all flex ${
        isSideBarVisible ? "left-0" : "left-full "
      } z-10`}
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md font-medium text-lg"
          onClick={() => {
            setSideBar(() => !isSideBarVisible);
          }}
        >
          {item.name}
        </a>
      ))}

      <div
        className="p-1 bg-slate-500/20 rounded-md cursor-pointer active:scale-95 absolute top-1/2 -translate-y-40 right-8"
        onClick={() => {
          setSideBar(() => !isSideBarVisible);
        }}
      >
        <IoClose className="text-2xl" />
      </div>
    </div>
  );
}

export default SideBar;
