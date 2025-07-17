"use client";
import { motion } from "motion/react";
type SkillChipProps = {
  skill: string;
  level?: number;
  iconPath: string;
};

const SkillChip = ({ skill, level = 3, iconPath }: SkillChipProps) => {
  return (
    <motion.span
      initial={{
        scale: 0.9,
        // opacity: 0.6,
        // filter: "blur(3px)",
        y: 10,
      }}
      whileInView={{
        scale: 1,
        // opacity: 1,
        // filter: "blur(0px)",
        y: 0,
      }}
      transition={{ duration: 0.3 }}
      className={`grow flex md:flex-col gap-2 md:gap-0 items-center justify-center text-center py-1 px-2 md:p-4 rounded-full md:rounded-xl shadow-md text-neutral-200 border hover:scale-105 transition-transform md:min-w-[100px]         
        ${level == 5 && "bg-green-500/60 border-green-500/60"}
        ${level == 4 && "bg-green-300/60 border-green-300/60"}
        ${level == 3 && "bg-yellow-300/20 border-yellow-300/20"}
        ${level == 2 && "bg-orange-400/60 border-orange-400/60"}
        ${level == 1 && "bg-red-400/30 border-red-300/30"}
      `}
    >
      <img
        src={iconPath}
        alt={skill}
        className="md:mb-2 rounded-lg h-4 md:h-14"
      />
      <span className="text-xs md:font-semibold">{skill}</span>
    </motion.span>
  );
};

export default SkillChip;
