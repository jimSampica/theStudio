import Link from "next/link"
import OrigamiImg from "/public/static/images/about_origami.png";
import LessonPic from "/public/static/images/3d-art/3d_origami.png"
import Image from "next/image";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Origami</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://www.youtube.com/watch?v=hxwxBqjBn0Q" target="_blank">Ninja star</a>,&nbsp;
                        <a href="https://www.youtube.com/watch?v=Cd5Z8hmcb10" target="_blank">Masu Box</a>, and&nbsp;
                        <a href="https://www.youtube.com/watch?v=8SG6e7blVS8&t=33s" target="_blank">Lucky Paper Stars</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What does origami mean in Japan?
                        </li>
                        <li>
                            Ninja Star is an example of modular origami, modular origami means?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>work on mini project ideas. <br />Materials: open centers</p>
                    <h4>Additional Resources</h4>
                    <div>
                        <a href="https://www.paperkawaii.com/modular-origami/">More tutorials</a>
                    </div>
                    <div>
                        <Link href={OrigamiImg.src} target="_blank">
                            <Image src={OrigamiImg} alt="" width={500} className="img-fluid" style={{ "cursor": "zoom-in" }} />
                        </Link>
                    </div>
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