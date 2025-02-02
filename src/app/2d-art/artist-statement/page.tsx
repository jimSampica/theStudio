import Image from "next/image";
import Sketchbook2dPic from "/public/static/images/sketchbook_2d.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Artist Statement</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/8OtOC2gCrJJJdlJ3e0Qf" target="_blank">Artist Statement</a>
                    &nbsp;in its entirety.</p>
                    <p>The completion of this lesson is designed to help you write your artist statement in conjunction with your last page in your sketchbook.</p>
                </div>                
                <div className="col-12">
                    <Link href={Sketchbook2dPic.src} target="_blank">
                        <Image src={Sketchbook2dPic} alt="sketchbook 2d" className="img-fluid" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}