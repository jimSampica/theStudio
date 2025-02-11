import Image from "next/image";
import DerbyCarPic from "/public/static/images/innovators/derby_car.jpg";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Glowforge Derby Car</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://app.screencastify.com/v3/watch/Xixbjn5GitJqn3kVriFi" target="_blank">Glowforge Derby Car</a>
                &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
            <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
            <h4>Workbook</h4>
            <ol className="list-style-alpha">
                <li>Design a Challenging Maze. Have a friend solve it.</li>
                <li>What should you name your Derby car file?</li>
                <li>In a complete sentence tell me what surface numbers from the Derby Car drawings file are designable.</li>
            </ol>
            <a href="https://docs.google.com/drawings/d/1Tru9e3HqEQVdudxLeYqD9YNHQH3M_oALOKN3JBeu-Bw/copy" target="_blank">Derby Car Template</a>
            <br />
            <Image src={DerbyCarPic} alt="" width={500} className="img-fluid rounded mt-3" style={{ "cursor": "zoom-in" }} />
        </main>
    );
}