"use client";

import Image from "next/image";
import logo from "/public/static/images/logo.png"
import Link from "next/link";
import NavControls from "./navControls"
import { useState } from "react";

export default function Navbar() {

  const [collapsed, setCollapsed] = useState(true);

  function navMenuButtonClicked(){
    setCollapsed(!collapsed);
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
      <div className="container">
        <h1 className="visually-hidden">TheStudio - By Caitlyn Sampica</h1>
        <Link href="/" className="navbar-brand">
          <Image src={logo} alt="TheStudio" width="256" height="47" />
        </Link>

        <button className="navbar-toggler" type="button" onClick={navMenuButtonClicked}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavControls collapsed={collapsed}></NavControls>
      </div>
    </nav>
  );
}