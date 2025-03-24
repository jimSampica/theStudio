import Image from "next/image";
import AutomataWksPic from "/public/static/images/innovators/automata_worksheet.png";
import AutomataTemplatePic from "/public/static/images/innovators/automata_template.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Automata</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please choose a video as a starting point for your project...</p>
            <ul className="list-style-alpha">
                <li>
                    <a href="https://www.youtube.com/watch?v=7dFfzjmkETs" target="_blank">Cardboard Automata Among US Game</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=t7SfdOtwib8" target="_blank">How to Make Pull-up Man from Cardboard</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=AH9sbyPgwFM&t=24s" target="_blank">How to Make a Automata Toy From Cardboard</a>
                </li>
                <li>
                    <a href="https://app.screencastify.com/v3/watch/M2PWcuqOlJyaa2FRLKRa" target="_blank">Automata</a>
                </li>
            </ul>
            <h4>Workbook</h4>
            <ul className="list-style-alpha">
                <li>Draw a blueprint of your simple machine (automaton) using the example attached.</li>
                <li>What method(s) will you use to build your automatron?</li>
                <li>What are some challenges you anticipate for this project?</li>
            </ul>
            <div className="row">
                <div className="col-md-6">
                    <Link href={AutomataWksPic.src} target="_blank">
                        <Image src={AutomataWksPic} alt="automata worksheet" className="img-fluid rounded" style={{ "cursor": "zoom-in", "width": "500px" }} />
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link href={AutomataTemplatePic.src} target="_blank">
                        <Image src={AutomataTemplatePic} alt="automata template" className="img-fluid rounded" style={{ "cursor": "zoom-in", "width": "500px" }} />
                    </Link>
                </div>
            </div>
        </main >
    );
}