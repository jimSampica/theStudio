import Link from "next/link";
import Image from "next/image";
import NotePagePic from "/public/static/images/ceramics/shrinkage_notes.png";
import MugsPic from "/public/static/images/ceramics/shrinkage_mugs.png";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Why Hollow?/Shrinkage</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>
                        Please read this <a href="https://ceramicartsnetwork.org/daily/article/How-to-Determine-Clay-Shrinkage-and-Make-a-Shrink-Rule" target="_blank">article</a>
                        &nbsp;to get a better understanding of what shrinkage is in clay and how it might affect your project.
                    </p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">prompt generator</Link>
                        </li>
                        <li>
                            How much does clay shrink after firing from its plastic state?
                        </li>
                        <li>
                            Why do our projects need to be hollow?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Finish up your first projects this week.</p>
                    
                    <Link href={MugsPic.src} target="_blank">
                        <Image src={MugsPic} alt="Ceramic mugs showing shrinkage examples" className="img-fluid rounded mt-3" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
                <div className="col-md-5">
                    <Link href={NotePagePic.src} target="_blank">
                        <Image src={NotePagePic} alt="Why Hollow and Shrinkage notes" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}