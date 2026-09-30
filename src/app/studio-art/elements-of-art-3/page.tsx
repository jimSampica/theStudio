import Image from "next/image";
import Link from "next/link";

import Color from "/public/static/images/studio-art/elements-of-art/color.png";
import ColorValueDefinitions from "/public/static/images/studio-art/elements-of-art/color-value-definitions.png";
import Value from "/public/static/images/studio-art/elements-of-art/value.png";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Elements of Art 3</h2>
          <h4 className="mt-3">Instructions</h4>
          <ol>
            <li>
              On page 3 of your zine, draw a color-centered picture using your
              theme.
            </li>
            <li>
              On page 4 of your zine, draw a value-centered picture using your
              theme.
            </li>
          </ol>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>
              Use the <Link href="/prompt-generator">Prompt Generator</Link>.
            </li>
            <li>Describe what value means in artwork.</li>
            <li>What is a hue?</li>
          </ol>
          <h4 className="mt-3">Color and Value</h4>
          <p>
            Hue is the base color with no black or white added. {" "}
            <span style={{ color: "#dc3545" }}>Red</span> is a hue, {" "}
            <span style={{ color: "#d63384" }}>pink</span> is a tint made by
            adding white, and {" "}
            <span style={{ color: "#800020" }}>burgundy</span> is a shade made by
            adding black.
          </p>
          <dl>
            <dt>Color</dt>
            <dd>
              What we see when light reflects off an object. Color includes hue,
              the color name, and saturation.
            </dd>
            <dt>Value</dt>
            <dd>
              The lightness or darkness of a color, such as shading from bright
              white through grays to deep black.
            </dd>
          </dl>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <Link className="d-block" href={Color.src} target="_blank">
                <Image
                  src={Color}
                  alt="Colorful poster illustrating the element of art color"
                  className="img-fluid rounded"
                  style={{ cursor: "zoom-in" }}
                />
              </Link>
            </div>
            <div className="col-md-6">
              <Link className="d-block" href={Value.src} target="_blank">
                <Image
                  src={Value}
                  alt="Purple poster illustrating the element of art value"
                  className="img-fluid rounded"
                  style={{ cursor: "zoom-in" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <aside className="col-md-5 mb-3">
          <Link href={ColorValueDefinitions.src} target="_blank">
            <Image
              src={ColorValueDefinitions}
              alt="Definitions of the elements of art color and value"
              className="img-fluid rounded mb-3"
              style={{ cursor: "zoom-in" }}
            />
          </Link>
        </aside>
      </div>
    </main>
  );
}
