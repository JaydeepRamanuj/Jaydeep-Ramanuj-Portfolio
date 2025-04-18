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
    <div className="p-3 sm:p-6 rounded-md bg-slate-700 flex flex-col items-center max-w-[750px] shadow-2xl text-gray-300">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <div className="flex flex-col items-center">
          <Image src={companyLogo} alt={companyName} width={50} height={50} />
          <span>{companyName}</span>
        </div>
        <h2 className="text-xl font-semibold">{role}</h2>
        <h3>
          {startDate} - {endDate}
        </h3>
      </div>
      <ul className="mt-6 w-[70%] mx-auto">
        {points.map((point, index) => (
          <li key={index} className="list-disc">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
