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
      <div className="flex flex-wrap gap-3">
        {data.map((skill, index) => (
          <SkillChip
            skill={skill.name}
            iconPath={skill.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
