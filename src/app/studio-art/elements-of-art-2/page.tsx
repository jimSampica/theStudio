import Image from "next/image";
import Link from "next/link";

import Line from "/public/static/images/studio-art/elements-of-art/line.png";
import LineShapeDefinitions from "/public/static/images/studio-art/elements-of-art/line-shape-definitions.png";
import Shape from "/public/static/images/studio-art/elements-of-art/shape.png";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Elements of Art 2</h2>
          <h4 className="mt-3">Instructions</h4>
          <ol>
            <li>
              On page 1 of your zine, draw a line-centered picture using your
              theme.
            </li>
            <li>
              On page 2 of your zine, draw a shape-centered picture using your
              theme.
            </li>
          </ol>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>
              Use the <Link href="/prompt-generator">Prompt Generator</Link>.
            </li>
            <li>Name three different types of line.</li>
            <li>
              Describe an organic shape. {" "}
              <em>An organic shape is ____________________.</em>
            </li>
          </ol>
          <h4 className="mt-3">Elements of Art</h4>
          <dl>
            <dt>Line</dt>
            <dd>
              A continuous mark made on a surface by a moving point. Lines can be
              straight, curvy, zigzag, thick, or thin.
            </dd>
            <dt>Shape</dt>
            <dd>
              A flat, two-dimensional (2D) closed area. Shapes can be geometric,
              like a square, or organic, like a leaf.
            </dd>
          </dl>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <Link className="d-block" href={Line.src} target="_blank">
                <Image
                  src={Line}
                  alt="Colorful poster illustrating the element of art line"
                  className="img-fluid rounded"
                  style={{ cursor: "zoom-in" }}
                />
              </Link>
            </div>
            <div className="col-md-6">
              <Link className="d-block" href={Shape.src} target="_blank">
                <Image
                  src={Shape}
                  alt="Colorful poster illustrating the element of art shape"
                  className="img-fluid rounded"
                  style={{ cursor: "zoom-in" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <aside className="col-md-5 mb-3">
          <Link href={LineShapeDefinitions.src} target="_blank">
            <Image
              src={LineShapeDefinitions}
              alt="Definitions of the elements of art line and shape"
              className="img-fluid rounded mb-3"
              style={{ cursor: "zoom-in" }}
            />
          </Link>
        </aside>
      </div>
    </main>
  );
}
