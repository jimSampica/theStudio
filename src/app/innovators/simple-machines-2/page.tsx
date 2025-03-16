"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Image from "next/image";
import img from "/public/static/images/simple_machines.png";

export default function Page() {
    let [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

    function allowDrop(ev: any) {
        console.log(ev);
        ev.preventDefault();
        return false
    }

    function drag(ev: any) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev: any) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
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
            <div className={styles["drop-targets"] + " d-flex flex-column d-none"}>
                <div onDrop={drop} onDragOver={allowDrop} className={styles["drop-target"] + " col-md-2"}>
                    <h5 className="m-3">Wedge</h5>
                </div>
                <div className={styles["drop-target"] + " col-md-2"}>
                    <h5 className="m-3">Pulley</h5>
                </div>
                <div className={styles["drop-target"] + " col-md-2"}>
                    <h5 className="m-3">Lever</h5>
                </div>
                <div className={styles["drop-target"] + " col-md-2"}>
                    <h5 className="m-3">Inclined Plane</h5>
                </div>
                <div className={styles["drop-target"] + " col-md-2"}>
                    <h5 className="m-3">Wheel and Axel</h5>
                </div>
                <div className={styles["drop-target"] + " col-md-2"}>
                    <h5 className="m-3">Screw</h5>
                </div>
            </div>

            <img id="drag1" src={img.src} className="d-none" draggable="true" onDragStart={drag} style={{"width": "100px"}}></img>
        </main>
    );
}

const AllAnswers = [
    "wedge",
    "pulley",
    "lever",
    "plane",
    "wheel",
    "screw"
] as const;

type Answer = typeof AllAnswers[number];