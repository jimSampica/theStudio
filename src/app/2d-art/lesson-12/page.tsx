import Link from "next/link"
import Image from "next/image";
import ReflectionImg from "/public/static/images/reflection.jpg";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Observational drawing 2</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/QVDngDmffyEfq7nKX0pV" target="_blank">Observation 2</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What is bounce light/reflected light?
                        </li>
                        <li>
                            Looking at the example in the additional resources, where is the light source coming from the left or the right?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on art show. <br />Materials: open centers</p>
                    <h4>Additional Resources</h4>
                    <div>
                        <Link href={ReflectionImg.src} target="_blank">
                            <Image src={ReflectionImg} alt="" width={500} className="img-fluid" style={{ "cursor": "zoom-in" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}