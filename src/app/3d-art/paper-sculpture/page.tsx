import Link from "next/link"
import Image from "next/image";
import LessonPic from "/public/static/images/3d-art/3d_paper_sculpture.png"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Paper Sculpture</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/Cm8FuOUrHSepREPdk6N9" target="_blank">Paper Sculpture 1</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            How do you make fringe with paper?
                        </li>
                        <li>
                            Why is it important to wait until you have everything laid out before gluing?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>work on mini project ideas. <br />Materials: open centers</p>
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