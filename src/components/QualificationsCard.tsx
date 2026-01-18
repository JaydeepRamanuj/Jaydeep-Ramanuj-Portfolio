"use client";
import React from "react";
import { motion } from "motion/react";

type QualificationsCardType = {
  collageName: string;
  passingYear: string;
  CGPA: number;
  courseName: string;
};

function QualificationsCard({
  collageName,
  passingYear,
  CGPA,
  courseName,
}: QualificationsCardType) {
  return (
    <motion.div
      initial={{
        scale: 0.95,
        opacity: 0,
        y: 10,
      }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="p-5 md:p-4 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 hover:bg-neutral-900/60 transition-colors flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-4 md:items-center text-center md:text-left text-neutral-300 shadow-sm"
    >
      <span className="font-bold text-neutral-100 md:font-medium">{collageName}</span>
      <span className="text-sm md:text-base">{courseName}</span>
      <span className="text-yellow-500/80 font-mono text-sm md:text-base">{CGPA.toFixed(2)} CGPA</span>
      <span className="text-neutral-500 text-sm md:text-right">{passingYear}</span>
    </motion.div>
  );
}

export default QualificationsCard;
