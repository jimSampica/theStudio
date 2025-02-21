import Link from "next/link"
import PaperMacheImg from "/public/static/images/3d-art/paper_mache_unicorn.png";
import LessonPic from "/public/static/images/3d-art/3d_paper_mache_2.png";
import Image from "next/image";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Paper Mache 2</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/faizMEX4HuVyKh2C9fmD" target="_blank">Paper mache 2</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What is the water to glue ratio for paper mache glue?
                        </li>
                        <li>
                            What should you do if your scissors are not sharp enough?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>work on WOW projects. <br />Materials: open centers</p>
                    <Image src={PaperMacheImg} alt="" width={500} className="img-fluid rounded rounded" />
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