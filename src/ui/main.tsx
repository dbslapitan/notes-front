import { ReactNode } from "react";

export default function Main({children}: {children: ReactNode}){
  return(
    <main className="flex flex-col grow px-4 pt-5 bg-neutral-0 rounded-2xl overflow-y-hidden">
      {children}
    </main>
  );
}