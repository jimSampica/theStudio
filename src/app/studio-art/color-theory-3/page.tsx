import Image from "next/image";
import Link from "next/link";

import ColorChart from "/public/static/images/studio-art/color-theory/hue-tint-tone-shade.png";
import Lemon from "/public/static/images/studio-art/color-theory/color-value-examples.png";
import VideoPreview from "/public/static/images/studio-art/color-theory/color-theory-example.png";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Color Theory 3</h2>
          <h4 className="mt-3">Instructions</h4>
          <dl>
            <dt>Hue</dt>
            <dd>A base color.</dd>
            <dt>Tint</dt>
            <dd>A hue mixed with white.</dd>
            <dt>Tone</dt>
            <dd>A hue mixed with gray.</dd>
            <dt>Shade</dt>
            <dd>A hue mixed with black.</dd>
          </dl>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Use the <Link href="/prompt-generator">Prompt Generator</Link>.</li>
            <li>In a complete sentence, give one example of a tint.</li>
            <li>In a complete sentence, give one example of a shade.</li>
          </ol>
          <figure>
            <Link className="d-block" href={Lemon.src} target="_blank">
              <Image src={Lemon} alt="Yellow lemon illustrating a hue, a shade with black, a tint with white, and a tone with gray" className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
            </Link>
            <figcaption className="mt-2">Image courtesy of Mallory Jane Art</figcaption>
          </figure>
        </div>
        <aside className="col-md-5 mb-3">
          <figure className="mt-3">
            <Link className="d-block" href={ColorChart.src} target="_blank">
              <Image src={ColorChart} alt="Color chart comparing hues with tints made by adding white, tones made by adding gray, and shades made by adding black" className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
            </Link>
            <figcaption className="mt-2">Graphic courtesy of Kate Green Design</figcaption>
          </figure>
          <h4 className="mt-3">Additional Resources</h4>
          <p>
            <Link href="https://www.youtube.com/watch?v=RVrZS8_DLmk" target="_blank">
              Watch Tints, Tones, Hues &amp; Shades
            </Link>
          </p>
          <Link className="d-block mb-3" href="https://www.youtube.com/watch?v=RVrZS8_DLmk" target="_blank">
            <Image src={VideoPreview} alt="Video preview showing cups of colored paint labeled Tints, Tones, Hues and Shades" className="img-fluid rounded" />
          </Link>
        </aside>
      </div>
    </main>
  );
}
