
import InfographicImg from "/public/static/images/what_is_infographic.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Careers in Design</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please read about <a href="https://dribbble.com/resources/career/types-of-graphic-design" target="_blank">some common careers in graphic design</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Design a logo for a shoe company.
                        </li>
                        <li>
                            If you make logos what type of graphic designer are you most likely?
                        </li>
                        <li>
                            What does UI designer stand for?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on infographic. <br />
                        Materials:  paper, pencil, markers and <a href="https://www.photopea.com/" target="_blank">Photopea</a>
                    </p>
                    <h4 className="mt-3">Additional Resources</h4>
                    <div>
                        <Link href={InfographicImg.src} target="_blank">
                            <Image src={InfographicImg} alt="" width={400} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}