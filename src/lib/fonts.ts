import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";

export const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"]
});

export const noto = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"]
});

export const mono = Source_Code_Pro({
  variable: "--font-mono",
  subsets: ["latin"]
});

export const fonts = {
  "sans": inter.className,
  "serif": noto.className,
  "mono": mono.className
};