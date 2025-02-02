import Link from "next/link"
import Image from "next/image";
import LessonPic from "/public/static/images/2d_weaving.png"


export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Weaving</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/maHZMiMgqNwITkbv2a1I" target="_blank">Weaving</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What direction does the weft go?
                        </li>
                        <li>
                            Describe what &quot;draw-in&quot; is.
                        </li>
                    </ul>
                </div>
                <div className="col-md-5">
                    <Link href={LessonPic.src} target="_blank">
                        <Image src={LessonPic} alt="" className="img-fluid" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}