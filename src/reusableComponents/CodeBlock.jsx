import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function CodeBlock({ children, codeString }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);

      // Reset after 1.5 seconds
      setTimeout(() => setCopied(false), 1500);

    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative h-64 rounded-lg p-4 text-white">

      {/* Buttons */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={copyToClipboard}
          className={`px-3 py-1 rounded-md bg-black/40 hover:bg-black/60 text-sm flex items-center gap-2 transition-all ${
            copied ? "text-green-400" : ""
          }`}
        >
          {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Inside Content */}
      <div className="mt-8">
        {children}
      </div>
    </div>
  );
}
