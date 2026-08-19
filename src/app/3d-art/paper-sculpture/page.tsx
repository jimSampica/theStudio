import Link from "next/link"
import Image from "next/image";
import VocabPic1 from "/public/static/images/3d-art/paper_sculpture_vocab_1.png"
import CubePic from "/public/static/images/3d-art/paper_sculpture_cube.png"
import CylinderPic from "/public/static/images/3d-art/paper_sculpture_cylinder.png"
import DodecahedronPic from "/public/static/images/3d-art/paper_sculpture_dodecahedron.png"
import TruckPic from "/public/static/images/3d-art/paper_sculpture_truck.png"
import WedgePic from "/public/static/images/3d-art/paper_sculpture_wedge.png"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Paper Sculpture</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/Cm8FuOUrHSepREPdk6N9" target="_blank">Paper Sculpture 1</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Questions</h4>
                    <ul className="list-style-alpha">
                        <li><Link href="/prompt-generator">Prompt Generator</Link></li>
                        <li>
                            Why is precision so important in sculpture? (RAPP complete sentence)
                            <br />
                            <em>Precision is important in sculpture because...</em>
                        </li>
                        <li>
                            In what ways do you think working with paper is similar to cardboard (2 RAPP sentences)?
                            <br />
                            <em>Cardboard is like paper because...</em>
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Paper sculpture templates attached named same as the file.</p>
                    <div className="row row-cols-2 g-1" id="paper-sculpture-templates">
                        <Link href={CubePic.src} target="_blank" className="col">
                            <Image
                                width={600}
                                src={CubePic}
                                alt="Paper sculpture cube template"
                                className="img-fluid rounded"
                                style={{ "cursor": "zoom-in" }}
                            />
                        </Link>
                        <Link href={CylinderPic.src} target="_blank" className="col">
                            <Image
                                width={600}
                                src={CylinderPic}
                                alt="Paper sculpture cylinder template"
                                className="img-fluid rounded"
                                style={{ "cursor": "zoom-in" }}
                            />
                        </Link>
                        <Link href={DodecahedronPic.src} target="_blank" className="col">
                            <Image
                                width={600}
                                src={DodecahedronPic}
                                alt="Paper sculpture dodecahedron template"
                                className="img-fluid rounded"
                                style={{ "cursor": "zoom-in" }}
                            />
                        </Link>
                        <Link href={TruckPic.src} target="_blank" className="col">
                            <Image
                                width={600}
                                src={TruckPic}
                                alt="Paper sculpture truck template"
                                className="img-fluid rounded"
                                style={{ "cursor": "zoom-in" }}
                            />
                        </Link>
                        <Link href={WedgePic.src} target="_blank" className="col">
                            <Image
                                width={600}
                                src={WedgePic}
                                alt="Paper sculpture wedge template"
                                className="img-fluid rounded"
                                style={{ "cursor": "zoom-in" }}
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="d-flex gap-3 flex-wrap">
                        <Link href={VocabPic1.src} target="_blank">
                            <Image
                                width={600}
                                src={VocabPic1}
                                alt="Paper sculpture vocabulary 1"
                                className="img-fluid rounded"
                                style={{ "cursor": "zoom-in" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}