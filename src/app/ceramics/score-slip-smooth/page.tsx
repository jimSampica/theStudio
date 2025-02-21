import Link from "next/link";
import Image from "next/image";
import LessonPic from "/public/static/images/ceramics/score_slip_smooth.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Score/Slip/Smooth</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/RTsplZcS5ZzLx4akTAoW" target="_blank">Score/Slip/Smooth</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What is slip?
                        </li>
                        <li>
                            How do we score, and why is it important? (2 sentences)
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Continue first hand-built project.
                    </p>
                </div>
                <div className="col-md-5">
                    <Link href={LessonPic.src} target="_blank">
                        <Image src={LessonPic} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}