import Link from "next/link";
import Image from "next/image";
import LessonPic from "/public/static/images/ceramics/moisture_management.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Moisture Management</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/rrIs8m0acF6VqvaD7dKQ" target="_blank">Moisture Management</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What is one step that you need to do to keep your clay moistened over the weekend?
                        </li>
                        <li>
                            What is one more step that you need to do to keep your clay moistened over the weekend?
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
        </main>
    );
}