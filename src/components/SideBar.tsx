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
  const sidebarVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 w-full h-screen bg-black/90 backdrop-blur-2xl z-50 flex flex-col items-center justify-center space-y-8 border-l-2 border-yellow-500/20"
    >
      <div
        className="absolute top-6 right-6 p-2 bg-white/10 border border-white/20 rounded-full cursor-pointer hover:bg-white/20 active:scale-95 transition-all"
        onClick={() => setSideBar(false)}
      >
        <IoClose className="text-2xl text-white" />
      </div>

      {navItems.map((item) => (
        <motion.a
          variants={linkVariants}
          key={item.name}
          href={item.href}
          className="text-2xl font-bold text-neutral-300 hover:text-yellow-400 transition-colors tracking-wide"
          onClick={() => setSideBar(false)}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default SideBar;
