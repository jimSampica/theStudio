import Link from "next/link"
import Image from "next/image";
import Cleaning3dImg from "/public/static/images/cleaning_3d.png";
import CLeaningClayImg from "/public/static/images/cleaning_clay.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Cleaning</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/crlU5Vb5De23oqTj9wnT" target="_blank">Cleaning 3D</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Where do our projects go when we are done?
                        </li>
                        <li>
                            How big should the cardboard be to keep?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Open centers / art show</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="m-1">
                    <Link href={Cleaning3dImg.src} target="_blank">
                        <Image src={Cleaning3dImg} alt="" width={300} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
                <div className="m-1">
                    <Link href={CLeaningClayImg.src} target="_blank">
                        <Image src={CLeaningClayImg} alt="" width={300} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}