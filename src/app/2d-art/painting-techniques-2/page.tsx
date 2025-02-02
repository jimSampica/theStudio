import Link from "next/link"
import Image from "next/image";
import LessonPic from "/public/static/images/2d_painting_techniques_2.png"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Painting Techniques 2</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/RDJmCk3YHzKI1lhQl2os" target="_blank">Painting 2</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Generally is it best to do the shadows or highlights first? Is it ok to go out of order sometimes?
                        </li>
                        <li>
                            When making shadows what colors are better than using black?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on WOW projects. <br />Materials: open centers</p>
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