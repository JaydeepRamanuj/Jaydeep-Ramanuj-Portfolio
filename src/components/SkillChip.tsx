"use client";

type SkillChipProps = {
  skill: string;
  level?: number;
  iconPath: string;
};

const SkillChip = ({ skill, level = 3, iconPath }: SkillChipProps) => {
  return (
    <span
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
    </span>
  );
};

export default SkillChip;
