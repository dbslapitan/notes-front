"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { ThemeProvider } from "./theme-provider";

export const FontContext = createContext<{ font: "sans" | "serif" | "mono", setFont: Dispatch<SetStateAction<"sans" | "serif" | "mono">> }>({ font: "sans", setFont: () => { } });

export default function Providers({ children }: { children: ReactNode }) {

  const [font, setFont] = useState<"sans" | "serif" | "mono">("sans");

  useEffect(() => {
    const lsFont = localStorage.getItem("font");
    const currentFont = lsFont === "sans" && "sans" || lsFont === "serif" && "serif" || lsFont === "mono" && "mono" || "sans";
    if(currentFont !== font){
      localStorage.setItem("font", currentFont);
      setFont(currentFont);
    }
  }, [font]);

  return (
    <FontContext.Provider value={{font, setFont}}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </FontContext.Provider>
  );
}