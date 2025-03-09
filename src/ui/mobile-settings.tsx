"use client";

import { text } from "@/lib/css-presets";
import { useState } from "react";
import { Tabs, TabsContent, TabsList } from "./tabs";

export default function MobileSettings(){

  const [value, setValue] = useState("all");

  console.log("Mobile Settings ran")

  return(
    <>
      <h1 className={`${text["preset-1"]}`}>Settings</h1>
      <Tabs value={value}>
        <TabsList></TabsList>
        <TabsContent value="all">

        </TabsContent>
      </Tabs>
    </>
  );
}