import React from "react";
import SkillChip from "./SkillChip";
import { SkillType } from "@/app/data";

type SkillsSectionType = {
  title: string;
  data: SkillType[];
};

const SkillsSection = ({ title, data }: SkillsSectionType) => {
  return (
    <div className=" md:mb-10">
      <h3 className="md:text-2xl font-bold text-neutral-300 mb-2 md:mb-4">
        {title}
      </h3>
      <div className="w-fit flex flex-wrap gap-4 p-4 bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10">
        {data.map((skill, index) => (
          <SkillChip
            skill={skill.name}
            level={skill.level}
            iconPath={skill.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
