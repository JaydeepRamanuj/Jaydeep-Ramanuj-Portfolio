"use client";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

function EmployeePortalNote() {
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
    <div className="rounded-xl bg-yellow-400/10 p-4 text-gray-100 border border-yellow-600/30">
      <p className="text-yellow-300 font-semibold mb-2">⚠️ Demo Notice</p>
      <p className="mb-1">
        This is a <span className="font-medium">demo deployment</span> with
        dummy data.
      </p>
      <p className="mb-1">
        The source code is private since this project is intended for client
        use. However, feel free to reach out for code snippets or feature
        walkthroughs.
      </p>
      <p className="mt-4 mb-2 text-sm text-gray-300">
        🔐 Login credentials for demo (center and role are fixed as of now):
      </p>

      <div className="flex flex-wrap gap-4">
        <div
          className="flex items-center gap-2 bg-yellow-800 border border-gray-600/40 rounded-lg px-3 py-1 cursor-pointer hover:bg-yellow-700 transition"
          onClick={() => copyToClipboard("test@email.com")}
        >
          <span className="text-sm">Email: test@email.com</span>
          {isEmailCopied ? (
            <span className="text-yellow-400">Copied!</span>
          ) : (
            <FaRegCopy className="text-yellow-400 hover:text-white" size={16} />
          )}
        </div>
        <div
          className="flex items-center gap-2 bg-yellow-800 border border-gray-600/40 rounded-lg px-3 py-1 cursor-pointer hover:bg-yellow-700 transition"
          onClick={() => copyToClipboard("test@123")}
        >
          <span className="text-sm">Password: test@123</span>
          {isPassCopied ? (
            <span className="text-yellow-400">Copied!</span>
          ) : (
            <FaRegCopy className="text-yellow-400 hover:text-white" size={16} />
          )}
        </div>
      </div>
      <p className="mt-3 text-sm">
        ⚠️ If you successfully signed in but don&apos;t get any data
        immediately,
        <span className="text-yellow-400 mx-1">Just reload the page.</span>
        This may happen only for first login.
      </p>
    </div>
  );
}

export default EmployeePortalNote;
