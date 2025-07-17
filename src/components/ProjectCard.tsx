"use client";
import Image from "next/image";
import ExternalLink from "./ExternalLink";
import { ReactNode, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from "motion/react";

type ProjectCardType = {
  title: string;
  description: string;
  img?: string;
  tags: Array<string>;
  githubLink?: string;
  liveLink?: string;
  isUnderDevelopment?: boolean;
  specialMessage?: string;
  specialLink?: string;
  specialMessageType?: "success" | "warn" | "note";
  specialNode?: ReactNode;
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
  specialMessageType,
  specialNode,
}: ProjectCardType) => {
  let specialMessageStyle = "";
  (() => {
    switch (specialMessageType) {
      case "success":
        specialMessageStyle = "bg-green-500/30 border border-green-500/60";
        break;
      case "warn":
        specialMessageStyle = "bg-orange-500/30";
        break;
      default:
        specialMessageStyle = "bg-gray-500/30";
    }
  })();

  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [readMore, setReadMore] = useState(false);
  return (
    <motion.div
      initial={{
        scale: 0.97,
        // opacity: 0.6,
        y: 15,
        filter: "blur(5px)",
      }}
      whileInView={{
        scale: 1,
        // opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className={`bg-white/5 rounded-2xl shadow-xl overflow-hidden max-w-[1000px] p-2 md:p-6 transition-all hover:scale-[1.02] hover:shadow-2xl relative border-2 ${
        isUnderDevelopment ? " border-orange-400/70" : "border-white/10"
      }`}
    >
      <div className={`flex flex-col md:flex-row items-center`}>
        {img && (
          <div className="w-full md:w-1/2 relative h-48 md:h-72 p-4">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        <div className="p-4 md:p-6 text-white flex-1">
          <h2 className="text-lg md:text-2xl font-semibold mb-3">{title}</h2>
          <p className={"text-neutral-400 mb-5 text-sm"}>
            <span className={`${readMore ? "" : "line-clamp-3"}`}>
              {description}
            </span>
            <span
              className="mt-2 text-neutral-200 underline underline-offset-2"
              onClick={() => setReadMore((prev) => !prev)}
            >
              {readMore ? " read less" : " read more"}
            </span>
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/10 border border-white/10 backdrop-blur-sm text-gray-200 rounded-full px-1.5 md:px-3 py-0.5  md:py-1 text-xs md:text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {liveLink && <ExternalLink title="Live" link={liveLink} />}
            {githubLink && <ExternalLink title="GitHub" link={githubLink} />}
            {specialLink && (
              <ExternalLink
                title="Live with YouTube official API"
                link={specialLink}
              />
            )}
          </div>
        </div>
      </div>
      {(specialMessage || specialNode) && (
        <div
          className="w-full border-t border-neutral-300/20 p-2 text-sm md:text-base mt-2"
          onClick={() => {
            setShowMoreDetails((prev) => !prev);
          }}
        >
          <h3 className="flex justify-between items-center mb-2">
            <span> More details</span>{" "}
            {showMoreDetails ? <FaAngleUp /> : <FaAngleDown />}
          </h3>
          {showMoreDetails && (
            <div>
              {isUnderDevelopment && (
                <div className="bg-orange-400/80 absolute text-white text-sm font-semibold text-center top-0 left-1/2 -translate-x-1/2 rounded-b-md px-3 py-1 shadow-md backdrop-blur-sm">
                  This project is under development
                </div>
              )}

              {specialMessage && (
                <div
                  className={`mt-3 ml-4 md:ml-0  px-3 py-1.5 text-white rounded text-sm w-fit font-semibold ${specialMessageStyle}`}
                >
                  {specialMessage}
                </div>
              )}

              {specialNode && specialNode}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
