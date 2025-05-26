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
      className="flex items-center gap-2 px-3 py-1.5 rounded-md font-medium bg-blue-500/40 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm shadow-sm group"
    >
      <span>{title}</span>
      <LuExternalLink className="text-lg transition-all  group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default ExternalLink;
