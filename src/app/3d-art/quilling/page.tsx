import Link from "next/link";
import Image from "next/image";
import LessonPic from "/public/static/images/3d-art/3d_quilling.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Quilling</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/Gv4DcqrkZsb1J35SJE0t" target="_blank">Quilling</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Draw me a picture of your current mood.
                        </li>
                        <li>
                            What kind of glue should we use for the quilling part?
                        </li>
                        <li>
                            How wide (in inches) should we cut the paper strips?
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