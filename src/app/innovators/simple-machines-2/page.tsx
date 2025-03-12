import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Simple Machines Part 2</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="#" target="_blank">TBD</a>
                &nbsp;in its entirety. Please complete the worksheet independently after watching the video and looking over the poster:</p>
            <h4>Workbook</h4>
            <ul className="list-style-alpha">
                <li>Draw a simple machine you used today.</li>
                <li>Tell me the difference between a wedge and an inclined plane. How are they similar?</li>
                <li>What simple machine uses a fulcrum and what is a fulcrum?</li>
            </ul>
        </main>
    );
}