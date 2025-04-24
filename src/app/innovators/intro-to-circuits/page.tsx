import Image from "next/image";
import CircuitDiagramImg from "/public/static/images/innovators/circuit_diagram.gif";
import SimpleCircuitImg from "/public/static/images/innovators/simple_circuit.jpg";
import ShortCircuitImg from "/public/static/images/innovators/short_circuit.png";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Intro to Circuits</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://www.youtube.com/watch?v=R3hdaLpq2AA" target="_blank">Intro to Circuits</a>
                &nbsp;in its entirety and answer the questions that follow in your workbook.</p>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/R3hdaLpq2AA?si=NnrF_oOXpLuIxXOG" title="Intro to Circuits"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <h4>Workbook</h4>
            <p>
                Label the diagram in your workbook using the various resources.
            </p>
            <h4>Activity</h4>
            <p>
                With a partner or two utilize the snap circuits and build out a few of the designs. Make sure to avoid a <strong>Short Circuit</strong>!
                <br /><strong>Limit of 2 snap circuit groups at a time.</strong>
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