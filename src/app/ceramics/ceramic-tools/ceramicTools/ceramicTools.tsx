"use client";

import styles from "./ceramicTools.module.css";
import Image from "next/image";
import ToolsImg from "/public/static/images/ceramic_tools.png";
import type { Tool } from "./toolHitbox";
import { HiddenTool, ShownTool } from "./toolHitbox";
import { useState } from "react";


export function CeramicTools() {

  let [selectedTool, setSelectedTool] = useState<Tool>();

  let tools: Tool[] = [
    {
      id: "rollingPin", description: "Rolling Pins",
      toolTip: "The best tool in the studio to make slabs",
      hitbox: { width: "345px", height: "90px", top: "0px", left: "12px" }
    },
    {
      id: "needle", description: "Needle Tool",
      toolTip: "This tool can cut small portions for clay and is good for etching and engraving into the clay surface.",
      hitbox: { width: "130px", height: "35px", top: "105px", left: "77px" }
    },
    {
      id: "loop", description: "Loop/Ribbon Tools",
      toolTip: "These are used to carve or hollow out sculptures. They are also commonly used with pottery at the trimming stage.",
      hitbox: { width: "135px", height: "125px", top: "240px", left: "65px" }
    },
    {
      id: "bucket", description: "Plastic Bucket",
      toolTip: "Is used to keep hands and sponges wet when working on the potter's wheel.",
      hitbox: { width: "108px", height: "125px", top: "40px", left: "370px" }
    },
    {
      id: "rib1", description: "Rib Tool",
      toolTip: "These work well for smoothing or scraping the source of our clay.",
      hitbox: { width: "85px", height: "50px", top: "168px", left: "120px" }
    },
    {
      id: "rib2", description: "Rib Tool",
      toolTip: "These work well for smoothing or scraping the source of our clay.",
      hitbox: { width: "100px", height: "55px", top: "150px", left: "260px" }
    },
    {
      id: "sponge", description: "Sponge Tool",
      toolTip: "This tool can be used in conjunction with centering and opening on the wheel. Can also be used to remove excess, puddling water from clay.",
      hitbox: { width: "50px", height: "50px", top: "285px", left: "222px" }
    },
    {
      id: "wire", description: "Wire Tool",
      toolTip: "Is the best tool for cutting large bits of clay.",
      hitbox: { width: "125px", height: "125px", top: "240px", left: "322px" }
    },
    {
      id: "model", description: "Modeling Tools",
      toolTip: "These tools can smooth out transitions and blend after slipping and scoring. Can also be used to create texture.",
      hitbox: { width: "265px", height: "95px", top: "410px", left: "82px" }
    },
  ];

  function toolClicked(tool: Tool) {
    setSelectedTool(tool);
  }

  function SelectedToolDisplay() {
    if (selectedTool != null) {
      return <div>
        <h5>{selectedTool.description}</h5>
        <p>{selectedTool.toolTip}</p>
      </div>;
    }

    return <div></div>;
  }

  return (
    <div className="row">
      <div className={styles["tool-area"] + " col-md-9"}>
        {
          tools.map(tool => {
            if(tool.id == selectedTool?.id){
              return <ShownTool key={tool.id} tool={tool} toolClickedCallback={toolClicked} />
            }

            return <HiddenTool key={tool.id} tool={tool} toolClickedCallback={toolClicked} />
          })
        }
        <Image src={ToolsImg} alt="" className="rounded" />
      </div>
      <div className="pt-2">
        {
          SelectedToolDisplay()
        }
      </div>
    </div>
  );
}