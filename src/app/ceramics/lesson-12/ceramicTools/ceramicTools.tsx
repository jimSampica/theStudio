"use client";

import styles from "./ceramicTools.module.css";
import Image from "next/image";
import ToolsImg from "/public/static/images/ceramic_tools.png";
import { Tool, ToolHitbox } from "./toolHitbox";


export function CeramicTools() {

  let tools: Tool[] = [
    {
      id: "rollingPin", description: "Rolling Pins",
      toolTip: "The best tool in the studio to make slabs", 
      hitbox: { width: "345px", height: "90px", top: "0px", left: "0px" }
    },
    {
      id: "needle", description: "Needle Tool",
      toolTip: "This tool can cut small portions for clay and is good for etching and engraving into the clay surface.",
      hitbox: { width: "130px", height: "35px", top: "105px", left: "65px" }
    },
    {
      id: "model", description: "Modeling Tool",
      toolTip: "These tools can smooth out transitions and blend after slipping and scoring. Can also be used to create texture.",
      hitbox: { width: "135px", height: "125px", top: "240px", left: "50px" }
    }
  ];

  return (
    <div className={styles["tool-area"]}>
      {
        tools.map(tool => <ToolHitbox key={tool.id} tool={tool} />)
      }

      <Image src={ToolsImg} alt="" />
    </div>
  );
}