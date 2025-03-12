import Image from "next/image";
import SimpleMachinesImg from "/public/static/images/simple_machines.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Simple Machines Part 1</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://www.youtube.com/watch?v=_fOA4nCWYms" target="_blank">Examples of Simple Machines used in everyday life</a>
                &nbsp;in its entirety. Please complete the worksheet independently after watching the video and looking over the poster:</p>
            <h4>Workbook</h4>
            <ul className="list-style-alpha">
                <li>Label the simple machines using the video and additional resources.</li>
            </ul>
            <Link href={SimpleMachinesImg.src} target="_blank">
                <Image src={SimpleMachinesImg} alt="simple machines" width={500} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
            </Link>
        </main>
    );
}