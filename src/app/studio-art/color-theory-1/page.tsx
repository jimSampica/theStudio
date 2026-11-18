import Image from "next/image";
import Link from "next/link";

import ColorMixingNotes from "/public/static/images/2d_color_mixing_1.png";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Color Theory 1</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Color theory is the art and science of how humans perceive color and how colors interact, combine, and contrast with one another.</p>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Use the <Link href="/prompt-generator">Prompt Generator</Link>.</li>
            <li>Define complementary colors and give one example.</li>
            <li>Define analogous colors and give one example.</li>
          </ol>
        </div>
        <aside className="col-md-5 mb-3">
          <Link className="d-block mt-3" href={ColorMixingNotes.src} target="_blank">
            <Image src={ColorMixingNotes} alt="Color-mixing vocabulary notes covering primary, secondary, complementary, analogous, warm, and cool colors, with a color wheel" className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
          </Link>
        </aside>
      </div>
    </main>
  );
}
