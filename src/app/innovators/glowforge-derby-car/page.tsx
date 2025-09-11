import Image from "next/image";
import DerbyCarPic from "/public/static/images/innovators/derby_car.jpg";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Glowforge Derby Car</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://app.screencastify.com/watch/evsKCB2Rj3WwOFljJcRJ" target="_blank">Glowforge Derby Car</a>
                &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
            <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
            <h4>Workbook</h4>
            <ol className="list-style-alpha">
                <li>Design a Challenging Maze. Have a friend solve it.</li>
                <li>Explain why you need 10 copies of the silhouette of your vehicle in your document. (Use RAPP)</li>
                <li>What should the name of your file be in Google drawings. (Use RAPP)</li>
            </ol>
            <a href="https://docs.google.com/drawings/d/1PUlMYligggCtPloV9-djwZQhVRwZ1SnZBeAwH8bphNI/copy" target="_blank">Derby Car Template</a>
            <br />
            <Image src={DerbyCarPic} alt="" width={500} className="img-fluid rounded mt-3" style={{ "cursor": "zoom-in" }} />
        </main>
    );
}