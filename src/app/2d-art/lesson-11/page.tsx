import Link from "next/link"
import Image from "next/image";
import SpaceImg from "/public/static/images/space.jpg";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Observational drawing 1</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/yxLlo8N4rMm4iAC7Er7f" target="_blank">Observation 1</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What is negative space?
                        </li>
                        <li>
                            In the video I am drawing everything out lightly, why is this important to do?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on art show. <br />Materials: open centers</p>
                    <h4>Additional Resources</h4>
                    <div>
                        <Link href={SpaceImg.src} target="_blank">
                            <Image src={SpaceImg} alt="" width={300} className="img-fluid" style={{ "cursor": "zoom-in" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}