"use client";

import styles from "./ceramicTools.module.css";
import Image from "next/image";
import ToolsImg from "/public/static/images/ceramic_tools.png";
import { PixelValue } from "@/app/components/PixelValue";

type Tool = { id: String, hitbox: Hitbox }
type Hitbox = { width: PixelValue, height: PixelValue, top: PixelValue, left: PixelValue }

export function CeramicTools() {

  let tools: Tool[] = [
    { id: "test", hitbox: {width: "200px", height: "200px", top: "0px", left: "0px" }}];

  function toolClicked() {
    alert('test');
  }

  return (
    <div className={styles["tool-area"]}>
      {
        tools.map(tool => <div className="tool" style={tool.hitbox} onClick={toolClicked}></div>)
      }

      <Image src={ToolsImg} alt="" />
    </div>
  );
}