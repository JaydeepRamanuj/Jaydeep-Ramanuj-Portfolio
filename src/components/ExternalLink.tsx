import React from "react";
import { LuExternalLink } from "react-icons/lu";

type ExternalLinkType = {
  title: string;
  link: string;
};

function ExternalLink({ title, link }: ExternalLinkType) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center text-xs md:text-base gap-2 px-1.5 py-1 md:px-3 md:py-1.5 rounded-md font-medium bg-blue-500/40 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm shadow-sm group"
    >
      <span>{title}</span>
      <LuExternalLink className="text-sm md:text-lg transition-all  group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default ExternalLink;
