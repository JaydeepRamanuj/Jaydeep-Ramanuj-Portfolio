import React from "react";
import { LuExternalLink } from "react-icons/lu";

type ExternalLinkType = {
  title: string;
  link: string;
};

function ExternalLink({ title, link }: ExternalLinkType) {
  const isGitHub = title.toLowerCase().includes("github");

  return (
    <a
      href={link}
      target="_blank"
      className={`flex items-center text-xs md:text-sm gap-2 px-3 py-1.5 rounded-full font-medium transition-all backdrop-blur-sm shadow-sm group border
        ${isGitHub
          ? "bg-neutral-800/80 border-white/5 text-neutral-300 hover:bg-neutral-700/80 hover:text-white hover:border-white/10"
          : "bg-yellow-500/10 border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20 hover:border-yellow-500/40 hover:scale-105"
        }`}
    >
      <span>{title}</span>
      <LuExternalLink className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default ExternalLink;
