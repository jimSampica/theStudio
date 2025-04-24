import Image from "next/image";
import CircuitDiagramImg from "/public/static/images/innovators/circuit_diagram.gif";
import SimpleCircuitImg from "/public/static/images/innovators/simple_circuit.jpg";
import ShortCircuitImg from "/public/static/images/innovators/short_circuit.png";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Tinkercad Circuits</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://www.youtube.com/watch?v=Mi1-IV0vMCw" target="_blank">Tinkercad Circuits Tutorial - Making a Simple LED</a>
                &nbsp;in its entirety and answer the questions that follow in your workbook.</p>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/Mi1-IV0vMCw?si=8DoA_fGjxUNY8bvD" title="Tinkercad Circuits Tutorial - Making a Simple LED"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <h4>Workbook</h4>
            <ol>
                <li>Draw your own simple LED circuit including positive and negative labels. can be illustrated or using schematics.</li>
                <li>What is the point of a breadboard (in your own words not google's words)</li>
                <li>Why would you use a resistor in a circuit? Is it always necessary</li>
            </ol>
            <h4>Activity</h4>
            <p>
                Build a simple circuit in tinkercad during your studio time use the video to help, show me when you complete it to master this page's content.
            </p>
            <h4>Additional Resources</h4>
            <ol className="list-style-alpha">
                <li><a target="_blank" href="https://www.tinkercad.com/dashboard">Tinkercad</a></li>
            </ol>
            <div className="d-flex justify-content-evenly">
                <div><Image src={CircuitDiagramImg} alt="circuit diagram" className="img-fluid rounded" /></div>
                <div><Image src={SimpleCircuitImg} alt="simple circuit" className="img-fluid rounded" /></div>
                <div><Image src={ShortCircuitImg} alt="short circuit" className="img-fluid rounded" /></div>
            </div>
        </main>
    );
}