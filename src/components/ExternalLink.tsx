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
      className="w-fit mt-6  bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md focus:outline-none focus:shadow-outline px-4 py-2 flex items-center"
    >
      <span className="mr-2">{title}</span>
      <LuExternalLink />
    </a>
  );
}

export default ExternalLink;
