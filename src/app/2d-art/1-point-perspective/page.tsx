import Link from "next/link"
import Image from "next/image";
import LessonPic from "/public/static/images/2d-art/1_point_perspective.png"
import DrawingPerspectivePic from "/public/static/images/2d-art/drawing_perspective.png"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: 1-Point Perspective</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/jH1eHsERVQGIj1k9gIWh" target="_blank">1-Point Perspective</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Draw along with the image to make your own 3D box.
                        </li>
                        <li>
                            What is a horizon line in 1-point perspective (A horizon line is...)
                        </li>
                        <li>
                            What does VP stand for and what does it mean? (VP stands for...)
                        </li>
                    </ul>
                    <div>
                        <Link href={DrawingPerspectivePic.src} target="_blank">
                            <Image src={DrawingPerspectivePic} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                        </Link>
                    </div>
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