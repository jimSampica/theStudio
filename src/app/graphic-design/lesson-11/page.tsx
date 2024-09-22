
import BullseyeImg from "/public/static/images/bullseye.jpg";
import CrapImg from "/public/static/images/good_design_is_crap.jpg";
import Image from "next/image";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: What is Design? (2)</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://www.youtube.com/watch?v=JAQbxZAAS6k" target="_blank">Principles of Design (CRAP)</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Design a logo for a shoe company.
                        </li>
                        <li>
                            This image is an example of what design principle?
                            <Image src={BullseyeImg} alt="" width={300} className="img-fluid" />
                        </li>
                        <li>
                            The difference between dark colors and light colors is one example of what principle?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on infographic. <br />
                        Materials:  paper, pencil, markers and <a href="https://www.photopea.com/" target="_blank">Photopea</a>
                    </p>
                    <h4 className="mt-3">Additional Resources</h4>
                    <Image src={CrapImg} alt="" width={600} className="img-fluid" />
                </div>
            </div>
        </main>
    );
}