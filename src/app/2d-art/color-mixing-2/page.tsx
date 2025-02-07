import Link from "next/link"
import Image from "next/image";
import LessonPic from "/public/static/images/2d_color_mixing_2.png"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Color mixing 2</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/Cz9kDfDvUd50P2EFNT1v" target="_blank">Color Mixing 2</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Try to make a color to the palette sample from Mrs. Sam and attach to your sketchbook on the “a” section.
                        </li>
                        <li>
                            How do you mix brown?
                        </li>
                        <li>
                            What is the special rule for light colors like yellow an white when mixing colors together?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on WOW projects. <br />Materials: open centers</p>
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