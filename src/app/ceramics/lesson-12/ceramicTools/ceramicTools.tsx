"use client";

import styles from "./ceramicTools.module.css";
import Image from "next/image";
import ToolsImg from "/public/static/images/ceramic_tools.png";

export function CeramicTools() {
  return (
    <div className={styles["answer"]}>
      <Image src={ToolsImg} alt="" />
    </div>
  );
}