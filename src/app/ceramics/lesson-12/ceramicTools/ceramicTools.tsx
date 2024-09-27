"use client";

import styles from "./ceramicTools.module.css";
import Image from "next/image";
import ToolsImg from "/public/static/images/ceramic_tools.png";
import { Tool, ToolHitbox } from "./toolHitbox";


export function CeramicTools() {

  let tools: Tool[] = [
    { id: "test", hitbox: {width: "200px", height: "200px", top: "0px", left: "0px" }}];

  function toolClicked() {
    alert('test');
  }

  return (
    <div className={styles["tool-area"]}>
      {
        tools.map(tool => <ToolHitbox key={tool.id} tool={tool} />)
      }

      <Image src={ToolsImg} alt="" />
    </div>
  );
}