import Image from "next/image";
import Link from "next/link";

import BlindArtist from "/public/static/images/blind_artist.png";
import DrawingComparison from "/public/static/images/studio-art/observational-drawing/drawing-what-you-see.jpg";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Observational Drawing 1</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>
            Activity: <Link href={BlindArtist.src} target="_blank">Blind Artist</Link>
          </p>
          <h4 className="mt-3">Get Your Basic Sketch</h4>
          <ol>
            <li>Don&apos;t think of your subject as a shoe, flower, or whatever it is.</li>
            <li>Stare at the object for a full minute. Notice the shapes that make up this object.</li>
            <li>On your paper, draw the shapes you see that make up the different parts.</li>
            <li>Always draw light until it&apos;s right.</li>
          </ol>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Draw the still-life at your table.</li>
            <li>
              What drawing tips and tricks do you think would be easiest to apply to your art?{" "}
              <em>One tip I would like to try is __________.</em>
            </li>
            <li>Drawing what you see is known as ________________.</li>
          </ol>
          <Link className="d-block mb-3" href={DrawingComparison.src} target="_blank">
            <Image
              src={DrawingComparison}
              alt="A detailed observed eye beside a simplified eye, comparing drawing what you see with drawing what you know"
              className="img-fluid rounded"
              style={{ cursor: "zoom-in" }}
            />
          </Link>
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
