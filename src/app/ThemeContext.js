"use client"

import { createContext, useState } from "react";
import "../app/globals.css"

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark(!isDark);
  }

  const darkClass = "bg-black text-white transition-all ease-linear";
  const lightClass = "bg-white text-black transition-all ease-linear";

  return (
    <ThemeContext.Provider value={{ toggle, isDark }}>
      <div className={isDark ? darkClass : lightClass}>
        {children}
      </div>
    </ThemeContext.Provider>
  )

};