import Link from "next/link";
import Image from "next/image";
import LessonPic from "/public/static/images/ceramics/throwing_a_cup.png";
import WheelDiagram from "/public/static/images/ceramics/wheel_diagram.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Throwing a cup</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/hGEBOU4pTOOyglCCLt1s" target="_blank">Throwing a cup</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <p>Now, if you would like to begin throwing, try this <a href="https://app.screencastify.com/watch/l3yl86gna8xpzg8hormb?checkOrg=031ae36a-5c97-41a4-85a5-2e44995bef08" target="_blank">challenge</a>.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use a ruler to measure and mark on this area the width of ¼ an inch.
                        </li>
                        <li>
                            Coning is part of what step of throwing on the wheel.
                        </li>
                        <li>
                            What could happen if you are not doing slow steady movements on the wheel?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>work on WOW projects. <br />
                        Materials: Open centers
                    </p>
                </div>
                <div className="col-md-5">
                    <Link href={LessonPic.src} target="_blank">
                        <Image src={LessonPic} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4 className="mt-3">Additional Resources</h4>
                    <Link href={WheelDiagram.src} target="_blank">
                        <Image src={WheelDiagram} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}