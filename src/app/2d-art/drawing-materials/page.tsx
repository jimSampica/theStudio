import Link from "next/link"
import Image from "next/image";
import LessonPic from "/public/static/images/2d_drawing_materials.png"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Drawing Materials</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/ahPuiMKr2h4tqiOgqB9B" target="_blank">Drawing with Charcoal</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Why would you choose charcoal over graphite?
                        </li>
                        <li>
                            List some pros/cons of charcoal.
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on art show. <br />Materials: open centers</p>
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