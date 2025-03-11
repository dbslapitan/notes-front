"use client";

import { inter } from "@/lib/fonts";
import { ThemeProvider } from "next-themes";
import { createContext, ReactNode, useEffect, useState } from "react";

export const FontContext = createContext({font: "sans", setFont: (value: string) => {}});

export default function Providers({ children }: { children: ReactNode }) {

  const [font, setFont] = useState("sans");

  useEffect(() => {
    const lsFont = localStorage.getItem("font");
    const currentFont = lsFont === "sans" && "sans" || lsFont === "serif" && "serif" || lsFont === "mono" && "mono" || "sans";
    console.log(currentFont, font);
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