"use client";
import { navItems } from "@/app/data";
import React, { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
type SideBarType = {
  isSideBarVisible: boolean;
  setSideBar: Dispatch<SetStateAction<boolean>>;
};

function SideBar({ isSideBarVisible, setSideBar }: SideBarType) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linksVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, duration: 0.3 },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`fixed top-0 left-0 w-full h-screen bg-black/80  backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-300 border-4 border-yellow-400/20   ${
        isSideBarVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {navItems.map((item) => (
        <motion.a
          variants={linksVariants}
          key={item.name}
          href={item.href}
          className="inline-block text-white text-lg font-medium hover:text-indigo-300 transition-colors"
          onClick={() => setSideBar(false)}
        >
          {item.name}
        </motion.a>
      ))}

      <div
        className="absolute top-1/2 -translate-y-52 right-8 p-2 bg-white/10 border border-white/20 rounded-md cursor-pointer active:scale-95 backdrop-blur-md"
        onClick={() => setSideBar(false)}
      >
        <IoClose className="text-2xl text-white" />
      </div>
    </motion.div>
  );
}

export default SideBar;
