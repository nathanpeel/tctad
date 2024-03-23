"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const { toggle, isDark } = useContext(ThemeContext);

  return (
    <div
      className={`flex gap-6 rounded-sm py-3 w-28 items-center justify-center relative border-2 border-solid ${
        isDark ? "border-white" : "border-black"
      }`}
      onClick={toggle}>
      <IoSunnyOutline className="w-8 h-8" />

      <IoMoonOutline className="w-8 h-8" />

      <div
        className={`absolute h-10 rounded-full w-10 bg-${
          isDark ? "white" : "black"
        } ${isDark ? "left-2" : "right-2"}`}></div>
    </div>
  );
};

export default DarkModeToggle;
