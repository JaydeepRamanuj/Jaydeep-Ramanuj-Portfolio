"use client";
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
  return (
    <motion.div
      initial={{
        scale: 0.9,
        opacity: 0.6,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-3 sm:p-6 rounded-2xl bg-white/5 flex flex-col items-center lg:max-w-[750px] shadow-2xl text-gray-300 backdrop-blur-lg"
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-1 md:gap-3 sm:gap-0">
        <div className="flex flex-col items-center">
          <Image src={companyLogo} alt={companyName} width={50} height={50} />
          <span className="text-sm md:text-base">{companyName}</span>
        </div>
        <h2 className="text-sm md:text-xl font-semibold">{role}</h2>
        <h3 className="text-xs md:text-base">
          {startDate} - {endDate}
        </h3>
      </div>
      <ul className="mt-6 px-3 lg:w-[70%] mx-auto text-neutral-400 text-sm md:text-base">
        {points.map((point, index) => (
          <li key={index} className="list-disc mt-2">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
