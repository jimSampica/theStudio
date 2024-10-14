import Image from "next/image";
import SimpleMachineImg from "/public/static/images/simple_machine_2.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Simple Machines part 2</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>
                Follow the instructions on the worksheet. Once you learn what machine you will be doing please take your time to plan and draw a mockup of your working machine.
                I attached an example below. Once you have planned out your machine please let me know and I will stamp you paper if it looks all set. This means you can start gathering supplies and building.
            </p>
            <Link href={SimpleMachineImg.src} target="_blank">
                <Image src={SimpleMachineImg} alt="simple machines" width={500} className="img-fluid" style={{ "cursor": "zoom-in" }} />
            </Link>
        </main>
    );
}