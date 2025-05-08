import Image from "next/image";
import ExternalLink from "./ExternalLink";

type ProjectCardType = {
  title: string;
  description: string;
  img?: string;
  tags: Array<string>;
  githubLink: string;
  liveLink?: string;
};

const ProjectCard = ({
  title,
  description,
  img,
  tags,
  githubLink,
  liveLink,
}: ProjectCardType) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden max-w-[1000px] p-2 md:p-6 hover:scale-[1.015] transition-all hover:shadow-2xl">
      {img && (
        <div className="w-full md:w-1/2 relative h-72 p-8">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover rounded hover:scale-[1.03] transition-all duration-500"
          />
        </div>
      )}

      <div className="p-3 md:p-8 text-white flex-1">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {liveLink && <ExternalLink title="Live" link={liveLink} />}
          <ExternalLink title="Github" link={githubLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
