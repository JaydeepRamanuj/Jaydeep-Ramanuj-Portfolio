"use client";
import { motion } from "motion/react";
type SkillChipProps = {
  skill: string;
  level?: number;
  iconPath: string;
};

const SkillChip = ({ skill, iconPath }: SkillChipProps) => {
  return (
    <motion.span
      initial={{
        scale: 0.9,
        y: 10,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="grow flex md:flex-col gap-2 md:gap-0 items-center justify-center text-center py-2 px-3 md:p-4 rounded-full md:rounded-xl shadow-sm border border-white/5 bg-neutral-800/20 hover:bg-neutral-800/40 hover:border-white/20 hover:scale-105 transition-all md:min-w-[100px]"
    >
      <img
        src={iconPath}
        alt={skill}
        className="md:mb-2 rounded-lg h-5 md:h-12 w-auto object-contain p-0.5"
      />
      <span className="text-xs md:text-sm font-medium text-neutral-300">{skill}</span>
    </motion.span>
  );
};

export default SkillChip;
