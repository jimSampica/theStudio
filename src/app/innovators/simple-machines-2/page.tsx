"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import AxeImg from "/public/static/images/innovators/axe.png";
import FlagImg from "/public/static/images/innovators/flag.png";
import GearImg from "/public/static/images/innovators/gear.png";
import HammerImg from "/public/static/images/innovators/hammer.png";
import NailImg from "/public/static/images/innovators/nail.png";
import ScrewImg from "/public/static/images/innovators/screw.png";
import ShovelImg from "/public/static/images/innovators/shovel.png";
import SlideImg from "/public/static/images/innovators/slide.png";
import SpinnerImg from "/public/static/images/innovators/spinner.png";
import WellImg from "/public/static/images/innovators/well.png";
import { SP } from "next/dist/shared/lib/utils";

export default function Page() {
    let [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

    function allowDrop(ev: any) {
        //console.log(ev);
        ev.preventDefault();
        return true;
    }

    function drag(ev: any) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev: any) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    function getImageTag(name: string, image: StaticImageData) {
        return <div id={name} draggable="true" onDragStart={drag} className="border m-1 p-1 rounded d-inline-block" style={{ "cursor": "grab" }}>
            <Image key={name} src={image.src} alt={name} width={50} height={50} className="img-fluid rounded" />
        </div>
    }

    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Simple Machines Part 2</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://app.screencastify.com/v3/watch/a4to9HtzRGPRAvlf1ORl" target="_blank">Simple machines part 2</a>
                &nbsp;in its entirety. Please complete the worksheet independently after watching the video and looking over the poster:</p>
            <h4>Workbook</h4>
            <ul className="list-style-alpha">
                <li>Draw a simple machine you used today.</li>
                <li>Tell me the difference between a wedge and an inclined plane. How are they similar?</li>
                <li>What simple machine uses a fulcrum and what is a fulcrum?</li>
            </ul>

            <div className="d-none">
                <div className="my-4">
                    {getImageTag("axe", AxeImg)}
                    {getImageTag("flag", FlagImg)}
                    {getImageTag("gear", GearImg)}
                    {getImageTag("hammer", HammerImg)}
                    {getImageTag("nail", NailImg)}
                    {getImageTag("screw", ScrewImg)}
                    {getImageTag("shovel", ShovelImg)}
                    {getImageTag("slide", SlideImg)}
                    {getImageTag("spinner", SpinnerImg)}
                    {getImageTag("well", WellImg)}
                </div>

                <div className="d-flex">
                    <div className={styles["drop-container"] + " col-md-2"} onDrop={drop} onDragOver={allowDrop}>
                        <h5 className="m-3 text-center" onDragOver={(ev: any) => { ev.preventDefault(); }}>Wedge</h5>
                    </div>
                    <div className={styles["drop-container"] + " col-md-2"}>
                        <h5 className="m-3 text-center">Pulley</h5>
                    </div>
                    <div className={styles["drop-container"] + " col-md-2"}>
                        <h5 className="m-3 text-center">Lever</h5>
                    </div>
                    <div className={styles["drop-container"] + " col-md-2"}>
                        <h5 className="m-3 text-center">Inclined Plane</h5>
                    </div>
                    <div className={styles["drop-container"] + " col-md-2"}>
                        <h5 className="m-3 text-center">Wheel and Axel</h5>
                    </div>
                    <div className={styles["drop-container"] + " col-md-2"}>
                        <h5 className="m-3 text-center">Screw</h5>
                    </div>
                </div>
            </div>

        </main>
    );
}

const AllTargets = [
    "wedge",
    "pulley",
    "lever",
    "plane",
    "wheel",
    "screw"
] as const;

type Answer = typeof AllTargets[number];