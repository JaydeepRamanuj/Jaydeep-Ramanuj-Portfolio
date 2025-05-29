import Image from "next/image";
import ExternalLink from "./ExternalLink";

type ProjectCardType = {
  title: string;
  description: string;
  img?: string;
  tags: Array<string>;
  githubLink: string;
  liveLink?: string;
  isUnderDevelopment?: boolean;
  specialMessage?: string;
  specialLink?: string;
};

const ProjectCard = ({
  title,
  description,
  img,
  tags,
  githubLink,
  liveLink,
  isUnderDevelopment = false,
  specialMessage,
  specialLink,
}: ProjectCardType) => {
  return (
    <div
      className={`bg-white/5 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden max-w-[1000px] p-4 md:p-6 transition-all hover:scale-[1.02] hover:shadow-2xl relative border-2 ${
        isUnderDevelopment ? " border-orange-400/70" : "border-white/10"
      }`}
    >
      <div className={` flex flex-col md:flex-row items-center`}>
        {img && (
          <div className="w-full md:w-1/2 relative h-72 p-4">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        <div className="p-4 md:p-6 text-white flex-1">
          <h2 className="text-2xl font-semibold mb-3">{title}</h2>
          <p className="text-gray-300 mb-5">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/10 border border-white/10 backdrop-blur-sm text-gray-200 rounded-full px-3 py-1 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {liveLink && <ExternalLink title="Live" link={liveLink} />}
            <ExternalLink title="GitHub" link={githubLink} />
            {specialLink && (
              <ExternalLink
                title="Live with YouTube official API"
                link={specialLink}
              />
            )}
          </div>
        </div>

        {isUnderDevelopment && (
          <div className="bg-orange-400/80 absolute text-white text-sm font-semibold text-center top-0 left-1/2 -translate-x-1/2 rounded-b-md px-3 py-1 shadow-md backdrop-blur-sm">
            This project is under development
          </div>
        )}
      </div>
      {specialMessage && (
        <div className="px-3 py-1.5 bg-orange-500/30 text-white rounded text-sm">
          {specialMessage}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
