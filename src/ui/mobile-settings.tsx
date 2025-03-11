"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList } from "./tabs";
import AllSettings from "./all-settings";
import ColorSettings from "./color-settings";
import FontSettings from "./font-settings";

export default function MobileSettings(){

  const [value, setValue] = useState("all");

  useEffect(() => {
    const settings = sessionStorage.getItem("settings");
    if(settings === "color" || settings === "font" && value !== settings){
      setValue(settings);
    }
  }, [value]);

  return(
    <>
      <Tabs value={value}>
        <TabsList className="hidden" ></TabsList>
        <TabsContent value="all">
            <AllSettings setValue={setValue}/>
        </TabsContent>
        <TabsContent value="color">
            <ColorSettings setValue={setValue}/>
        </TabsContent>
        <TabsContent value="font">
          <FontSettings setValue={setValue}/>
        </TabsContent>
      </Tabs>
    </>
  );
}