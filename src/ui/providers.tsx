"use client";

import { ThemeProvider } from "next-themes";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export const FontContext = createContext<{font: string, setFont: Dispatch<SetStateAction<string>>}>({font: "sans", setFont: () => {}});

export default function Providers({ children }: { children: ReactNode }) {

  const [font, setFont] = useState("sans");

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