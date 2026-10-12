import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import FoxReference from "/public/static/images/studio-art/observational-drawing/fox-reference.jpg";
import FoxShapes from "/public/static/images/studio-art/observational-drawing/fox-shapes.jpg";
import FoxSketch from "/public/static/images/studio-art/observational-drawing/fox-sketch.jpg";

const examples: { src: StaticImageData; alt: string }[] = [
  { src: FoxReference, alt: "Fox figurine used as the subject for an observational drawing" },
  { src: FoxShapes, alt: "Fox figurine with blue basic shapes and pink detail lines drawn over it" },
  { src: FoxSketch, alt: "Fox sketch built from the observed basic shapes with added details" },
];

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Observational Drawing 2</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Draw an animal.</p>
          <h4 className="mt-3">Get Your Basic Sketch</h4>
          <ol>
            <li>Don&apos;t think of your subject as a shoe, flower, or whatever it is.</li>
            <li>Stare at the object for a full minute. Notice the shapes that make up this object.</li>
            <li>On your paper, draw the shapes you see that make up the different parts.</li>
            <li>Add details like fur texture and color.</li>
          </ol>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Draw the still-life at your table.</li>
            <li>
              What do you struggle with the most with observational drawing?{" "}
              <em>I struggle with drawing ________________.</em>
            </li>
            <li>
              What tip did you try today for A, and how did you feel about it?{" "}
              <em>I tried the ________________ tip, and I felt ________________.</em>
            </li>
          </ol>
          <div className="row g-3 mb-3">
            {examples.map((example) => (
              <div className="col-md-4" key={example.src.src}>
                <Link className="d-block" href={example.src.src} target="_blank">
                  <Image
                    src={example.src}
                    alt={example.alt}
                    className="img-fluid rounded"
                    style={{ cursor: "zoom-in" }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <aside className="col-md-5 mb-3">
          <div className="bg-dark text-white rounded p-3 mt-3">
            <h4>Tips for Observational Drawing</h4>
            <ul>
              <li>Squint your eyes to blur out the texture and details.</li>
              <li>Focus on negative space.</li>
              <li>Upside-down drawing.</li>
              <li>Detective clues like in Blind Artist.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
