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
        scale: 0.98,
        y: 20,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group bg-neutral-900/40 rounded-xl overflow-hidden max-w-5xl w-full transition-all hover:bg-neutral-900/60 border border-white/5 ${isUnderDevelopment ? "border-orange-500/30" : "hover:border-yellow-500/20"
        }`}
    >
      <div className={`flex flex-col md:flex-row gap-6 p-4 md:p-6`}>
        {img && (
          <div className="w-full md:w-[45%] relative aspect-video md:aspect-auto md:h-64 rounded-lg overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-bold text-neutral-100 group-hover:text-yellow-200 transition-colors">{title}</h2>
              <div className="flex gap-3">
                {liveLink && <ExternalLink title="Live" link={liveLink} />}
                {githubLink && <ExternalLink title="GitHub" link={githubLink} />}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-neutral-800/80 border border-white/5 text-neutral-400 px-3 py-1 rounded-md text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className={"text-neutral-400 text-sm leading-relaxed mb-4"}>
              <span className={`${readMore ? "" : "line-clamp-3"}`}>
                {description}
              </span>
              <button
                className="ml-1 text-yellow-500/80 hover:text-yellow-400 text-xs font-medium uppercase tracking-wider"
                onClick={() => setReadMore((prev) => !prev)}
              >
                {readMore ? "Show less" : "Read more"}
              </button>
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap mt-auto pt-4 border-t border-white/5">
            {specialLink && (
              <ExternalLink
                title="YouTube API Demo"
                link={specialLink}
              />
            )}

            {/* Collapsible Details Trigger */}
            {(specialMessage || specialNode) && (
              <button
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors ml-auto"
                onClick={() => {
                  setShowMoreDetails((prev) => !prev);
                }}
              >
                <span>Dev Details</span>
                {showMoreDetails ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {(specialMessage || specialNode) && showMoreDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-neutral-950/30 border-t border-white/5 p-4 md:p-6"
        >
          {isUnderDevelopment && (
            <div className="inline-block px-3 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-semibold mb-3">
              ⚠️ Under Development
            </div>
          )}

          {specialMessage && (
            <div
              className={`px-4 py-2 rounded-md text-sm ${specialMessageStyle}`}
            >
              {specialMessage}
            </div>
          )}

          {specialNode && <div className="mt-4">{specialNode}</div>}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
