import Image from "next/image";
import CircuitDiagramImg from "/public/static/images/innovators/circuit_diagram.gif";
import SimpleCircuitImg from "/public/static/images/innovators/simple_circuit.jpg";

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Intro to Circuits</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://www.youtube.com/watch?v=R3hdaLpq2AA" target="_blank">Intro to Circuits</a>
                &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
            <h4>Workbook</h4>
            <ol className="list-style-alpha">
                <li>Label the diagram in your workbook using the various resources.</li>
                <li>
                    With a partner or two utilize the snap circuits and build out a few of the designs. Make sure to avoid a <strong>Short Circuit</strong>! (add photo of short circuit in additional resources)
                    <br /><strong>Limit of 2 snap circuit groups at a time.</strong>
                </li>
            </ol>
            <h4>Additional Resources</h4>
            <ol className="list-style-alpha">
                <li><a target="_blank" href="https://www.tinkercad.com/dashboard">Tinkercad</a></li>
            </ol>
            <div>
                <Image src={CircuitDiagramImg} alt="circuit diagram" className="img-fluid rounded" />
                <Image src={SimpleCircuitImg} alt="simple circuit" className="ms-5 img-fluid rounded" />
            </div>
        </main>
    );
}