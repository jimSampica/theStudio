import Link from "next/link";
import Image from "next/image";
import LessonPic from "/public/static/images/ceramics/throwing_a_bowl.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Throwing a bowl and plate</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/ir1DuPgabAOmm9Bd1J6n" target="_blank">Throwing a bowl</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            How is throwing a bowl different from a cup?
                        </li>
                        <li>
                            What step do you skip when making a plate?
                        </li>
                    </ul>
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