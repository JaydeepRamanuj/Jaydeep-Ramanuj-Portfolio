"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

type ExperienceCardType = {
  companyLogo: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  //   points: Array<React.ReactNode>;
  points: Array<string>;
};

const ExperienceCard = ({
  companyLogo,
  companyName,
  role,
  startDate,
  endDate,
  points,
}: ExperienceCardType) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  // const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{
        scale: 0.95,
        opacity: 0,
        y: 20,
      }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
      className="relative w-full p-6 md:p-8 rounded-xl bg-neutral-900/40 border border-white/5 border-l-2 border-l-yellow-500/80 backdrop-blur-sm shadow-lg hover:bg-neutral-900/60 transition-colors max-w-4xl mx-auto overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/5 rounded-lg">
            <Image src={companyLogo} alt={companyName} width={40} height={40} className="object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-200">{companyName}</h3>
            <p className="text-sm text-neutral-500 font-mono">{startDate} - {endDate}</p>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-gradient-gold">{role}</h2>
      </div>
      <ul className="pl-4 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex gap-3 text-neutral-300 text-sm md:text-base leading-relaxed">
            <span className="min-w-[6px] h-[6px] rounded-full bg-yellow-500/50 mt-2.5"></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
