"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList } from "./tabs";
import AllSettings from "./all-settings";

export default function MobileSettings(){

  const [value, setValue] = useState("all");

  return(
    <>
      <Tabs value={value}>
        <TabsList className="hidden" ></TabsList>
        <TabsContent value="all">
            <AllSettings setValue={setValue}/>
        </TabsContent>
        <TabsContent value="color">
            Color
        </TabsContent>
        <TabsContent value="font">
          Font
        </TabsContent>
      </Tabs>
    </>
  );
}