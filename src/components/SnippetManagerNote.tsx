"use client";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

function SnippetManagerNote() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPassCopied, setIsPassCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);

    if (text == "test@email.com") {
      setIsEmailCopied(true);
      setTimeout(() => {
        setIsEmailCopied(false);
      }, 2000);
    } else {
      setIsPassCopied(true);
      setTimeout(() => {
        setIsPassCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="rounded-xl bg-green-400/10 p-4 text-gray-100 border border-green-600/30 text-sm md:text-base">
      <p className="text-green-300 font-semibold mb-2">
        Version v1 is shipped. Fixing bugs and general improvements
      </p>
      <p className="mb-1">
        You can register and use the app but
        <b className="ml-1">
          if you want to test with dummy data use below credentials
        </b>
      </p>

      <p className="mt-4 mb-2 text-sm text-gray-300">
        🔐 Login credentials for demo:
      </p>

      <div className="flex flex-wrap gap-4">
        <div
          className="flex items-center gap-2 bg-green-800 border border-gray-600/40 rounded-lg px-3 py-1 cursor-pointer hover:bg-green-700 transition"
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard("test@email.com");
          }}
        >
          <span className="text-sm">Username: testuser</span>
          {isEmailCopied ? (
            <span className="text-green-400">Copied!</span>
          ) : (
            <FaRegCopy className="text-green-400 hover:text-white" size={16} />
          )}
        </div>
        <div
          className="flex items-center gap-2 bg-green-800 border border-gray-600/40 rounded-lg px-3 py-1 cursor-pointer hover:bg-green-700 transition"
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard("test@123");
          }}
        >
          <span className="text-sm">Password: test@123</span>
          {isPassCopied ? (
            <span className="text-green-400">Copied!</span>
          ) : (
            <FaRegCopy className="text-green-400 hover:text-white" size={16} />
          )}
        </div>
      </div>
      <p className="mt-3 text-sm">
        ⚠️ You may feel lag on first start due to cold start on{" "}
        <b className="mx-1">Render </b>
        (backend deployment platform),
        <span className="text-yellow-400 ml-1">
          Just wait a minute and reload the page.
        </span>
      </p>
      <hr className="border-green-300/30 my-3" />
      <p className="flex items-center gap-3">
        <span className="block size-4 bg-green-300 rounded-full"></span>
        <b>
          Check &apos;Change Logs&apos; tab for fixes and known issues under
          settings dialogue
        </b>
      </p>
    </div>
  );
}

export default SnippetManagerNote;
