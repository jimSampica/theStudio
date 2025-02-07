import Image from "next/image";
import CrochetImg from "/public/static/images/crochet.jpg";
import Link from "next/link";
import LessonPic from "/public/static/images/3d-art/3d_crochet.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Crochet</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://www.youtube.com/watch?v=FXsZHW93Tw8&t=20s" target="_blank">Starting with a knot</a>
                        &nbsp;and&nbsp;<a href="https://www.youtube.com/watch?v=uhyoseM7XUk" target="_blank">Making a chain</a>
                        &nbsp;and&nbsp;<a href="https://www.youtube.com/watch?v=AmvwJZpUFBg" target="_blank">Single crochet</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.
                    </p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What kind of knot do we use to start crochet?
                        </li>
                        <li>
                            For this one I would like you to try to make a chain. Once you have a long chain please let me know and I will stamp your sketchbook.
                        </li>
                    </ul>
                    <Image src={CrochetImg} alt="" width={500} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
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