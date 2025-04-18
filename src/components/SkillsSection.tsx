import React from "react";
import SkillChip from "./SkillChip";
import { SkillType } from "@/app/data";

type SkillsSectionType = {
  title: string;
  data: SkillType[];
};

const SkillsSection = ({ title, data }: SkillsSectionType) => {
  return (
    <div>
      <span className="text-xl font-bold">{title}</span>
      <div className="w-fit flex flex-wrap gap-3 mt-6 bg-slate-600/50 p-3 rounded shadow-2xl">
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
