import Image from "next/image";

type SkillChipProps = {
  skill: string;
  level?: number;
  iconPath: string;
};

const SkillChip = ({ skill, level = 3, iconPath }: SkillChipProps) => {
  console.log(iconPath);

  return (
    <span
      className={`p-3 flex-1  bg-gray-100  text-gray-800 dark:text-gray-200 rounded-md text-sm flex flex-col items-center text-center justify-center shadow-2xl hover:scale-105 
        ${level == 5 && "bg-green-800"}
        ${level == 4 && "bg-green-400/60"}
        ${level == 3 && "bg-yellow-300/40"}
        ${level == 2 && "bg-orange-400/60"}
        ${level == 1 && "bg-red-500/60"}
      `}
    >
      <Image src={iconPath} alt={iconPath} width={80} height={80} />
      <span className="mt-2 font-semibold">{skill}</span>
    </span>
  );
};

export default SkillChip;
