import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import ZentangleSteps from "/public/static/images/studio-art/drawing-tools-4/zentangle-02.png";
import ZentangleExample1 from "/public/static/images/studio-art/drawing-tools-4/zentangle-03.png";
import ZentangleExample2 from "/public/static/images/studio-art/drawing-tools-4/zentangle-04.png";
import ZentangleExample3 from "/public/static/images/studio-art/drawing-tools-4/zentangle-05.png";
import ZentangleExample4 from "/public/static/images/studio-art/drawing-tools-4/zentangle-06.png";
import ZentangleExample5 from "/public/static/images/studio-art/drawing-tools-4/zentangle-07.png";
import ZentangleExample6 from "/public/static/images/studio-art/drawing-tools-4/zentangle-08.png";
import ZentanglePatternIdeas1 from "/public/static/images/studio-art/drawing-tools-4/zentangle-09.png";
import ZentangleProject from "/public/static/images/studio-art/drawing-tools-4/zentangle-10.png";

const materials: { src: StaticImageData; alt: string }[] = [
  { src: ZentangleSteps, alt: "Six illustrated steps for creating a Zentangle drawing" },
  { src: ZentanglePatternIdeas1, alt: "Zentangle pattern ideas worksheet with nine blank squares" },
  { src: ZentangleProject, alt: "Completed Zentangle project example for fifth and sixth grade" },
];

const examples: { src: StaticImageData; alt: string }[] = [
  { src: ZentangleExample1, alt: "Zentangle example with bold geometric patterns" },
  { src: ZentangleExample2, alt: "Zentangle example with varied black and white patterns" },
  { src: ZentangleExample3, alt: "Zentangle example divided into organic patterned sections" },
  { src: ZentangleExample4, alt: "Zentangle example using curved repeating patterns" },
  { src: ZentangleExample5, alt: "Zentangle example using detailed line patterns" },
  { src: ZentangleExample6, alt: "Zentangle example using contrasting pattern sections" },
];

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Drawing Tools 4</h2>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Fill this section with a repeating pattern.</li>
            <li>
              Define line weight. <em>Line weight is __________.</em>
            </li>
            <li>
              What is the minimum number of patterns needed in your art? <em>I need at least ____ patterns in my art.</em>
            </li>
          </ol>
          <h4 className="mt-3">Studio Time</h4>
          <ol>
            <li>On your paper, draw five or more sections.</li>
            <li>Fill each section with a different pattern. Draw light until it&apos;s right!</li>
            <li>Try mixing line weight, or line thickness.</li>
            <li>Mix simple and more complex designs.</li>
            <li>Fill in all blank areas completely.</li>
            <li>If you have time, outline your drawing with the markers provided.</li>
          </ol>
          <div className="row g-3">
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
          {materials.map((material) => (
            <Link key={material.src.src} href={material.src.src} target="_blank">
              <Image
                src={material.src}
                alt={material.alt}
                className="img-fluid rounded mb-3"
                style={{ cursor: "zoom-in" }}
              />
            </Link>
          ))}
        </aside>
      </div>
    </main>
  );
}
