"use client";

import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ContentWarning() {
  const [showWarning, setShowWarning] = useState(false);

  const { toggle, isDark } = useContext(ThemeContext);

  return (
    <div className="mt-4 mb-24 relative">
      <button
        className={`border-2 ${isDark ? "border-white" : "border-black"} px-5 py-2 mb-3 hover:scale-105 transition-all ease-linear`}
        onClick={() => {
          setShowWarning(!showWarning);
        }}>
        {showWarning ? "Hide content warning" : "Show content warning"}
      </button>
      {showWarning && (
        <p className="absolute">
          Content warning: domestic violence, drug abuse, alcohol abuse,
          bullying, cancer
        </p>
      )}
    </div>
  );
}
