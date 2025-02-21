import Link from "next/link"
import { CeramicTools } from "./ceramicTools/ceramicTools"
import Image from "next/image";
import LessonPic from "/public/static/images/ceramics/ceramic_tools.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Ceramic Tools</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Scroll over picture to get to know more about each ceramic tool:</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What do you use a wire tool for?
                        </li>
                        <li>
                            What is the best tool for making slabs in our class?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Continue first hand-built project.</p>
                    <CeramicTools />
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