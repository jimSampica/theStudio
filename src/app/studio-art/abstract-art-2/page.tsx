import Image from "next/image";
import Link from "next/link";

import Echo from "/public/static/images/studio-art/abstract-art/garner-echo.jpg";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Abstract Art 2</h2>
          <h4 className="mt-3">Instructions</h4>
          <dl>
            <dt>Non-objective</dt>
            <dd>Art that uses colors, shapes, and lines without depicting a recognizable object, place, or person.</dd>
            <dt>Semi-abstract</dt>
            <dd>Art that loosely represents a person, place, or object while intentionally changing shapes, colors, textures, or other elements of art.</dd>
          </dl>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Draw a semi-abstract picture representing you.</li>
            <li>
              What is non-objective art?{" "}
              <em>Non-objective art is __________.</em>
            </li>
            <li>What type of abstraction is a painting of a cat in bright blues and greens?</li>
          </ol>
          <h4 className="mt-3">Activity</h4>
          <p>Line up the artwork from semi-abstract to non-objective.</p>
        </div>
        <aside className="col-md-5 mb-3">
          <div className="bg-dark text-white rounded p-3 mt-3 mb-3">
            <h4>What Is Abstract Art?</h4>
            <ul>
              <li>About feelings rather than accurate representation.</li>
              <li>There is no right way.</li>
              <li>Good abstract art uses line, shape, and color well.</li>
              <li>You don&apos;t need to understand it or &ldquo;get it&rdquo; to appreciate abstract art.</li>
            </ul>
          </div>
          <figure>
            <Link className="d-block" href={Echo.src} target="_blank">
              <Image src={Echo} alt="Cat portrait painted in bright blues and greens with pink accents" className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
            </Link>
            <figcaption className="mt-2">
              Meriam Garner<br />
              <em>Echo the Main Coon</em>, 2026
            </figcaption>
          </figure>
        </aside>
      </div>
    </main>
  );
}
