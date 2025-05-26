import Image from "next/image";

type SkillChipProps = {
  skill: string;
  level?: number;
  iconPath: string;
};

const SkillChip = ({ skill, level = 3, iconPath }: SkillChipProps) => {
  return (
    <span
      className={`grow flex flex-col items-center justify-center text-center p-4 rounded-xl shadow-md text-white border backdrop-blur-md hover:scale-105 transition-transform  min-w-[100px]         
        ${level == 5 && "bg-green-500/60 border-green-500/60"}
        ${level == 4 && "bg-green-300/60 border-green-300/60"}
        ${level == 3 && "bg-yellow-300/20 border-yellow-300/20"}
        ${level == 2 && "bg-orange-400/60 border-orange-400/60"}
        ${level == 1 && "bg-red-400/30 border-red-300/30"}
      `}
    >
      <Image
        src={iconPath}
        alt={skill}
        width={60}
        height={60}
        className="mb-2 rounded-lg"
      />
      <span className="text-sm font-semibold">{skill}</span>
    </span>
  );
};

export default SkillChip;
