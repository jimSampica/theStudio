"use client";

import styles from "./ceramicTools.module.css";
import Image from "next/image";
import ToolsImg from "/public/static/images/ceramic_tools.png";

export function CeramicTools() {

  function toolAreaClicked(){
    alert("test");
  }

  return (
    <div onClick={toolAreaClicked} className={styles["tool-area"]}>
      <Image src={ToolsImg} alt="" />
    </div>
  );
}