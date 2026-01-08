"use client";

import Image from "next/image";
import UseOfClassTimeImg from "/public/static/images/use_of_class_time_routine.png";
import BreaksPic from "/public/static/images/breaks.png";
import Link from "next/link";

export default function Page() {

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Use of Class Time</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/dgJz9nQKUgDz2yUvvpoZ" target="_blank">this video</a>
            &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
          <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
          <h4 className="mt-3">Sketchbook </h4>
          <ul className="list-style-alpha">
            <li>
              Please use the&nbsp;
              <Link href="/prompt-generator">random prompt generator</Link>
              &nbsp;and draw the assigned prompt in box a.
            </li>
            <li>
              List the objects you need for class everyday.
            </li>
            <li>
              Tell me the difference between a toy and a fidget device in two complete sentences.
            </li>
          </ul>
          <h4>Studio Time</h4>
          <p>
            Design your sketchbook. It must be school appropriate. Please add color to make it your own! Take your time and take ownership, your sketchbook should be something you are proud of.
            Expectations: feel free to listen to music and look at references on your computer. Please remain seated and use the materials provided at your table.
          </p>
          <dl>
            <dt>2D Art:</dt>
            <dd>If you finish early, start your 'about you' collage.</dd>

            <dt>Ceramics:</dt>
            <dd>If you finish early, get a feel for plasticine clay.</dd>

            <dt>Innovators:</dt>
            <dd>If you finish early, test out of building skills with Lego challenges.</dd>

            <dt>3D Art:</dt>
            <dd>If you finish early, test out of building skills with Lego challenges.</dd>
          </dl>
          <ul>
            <li><Link target="_blank" href="https://www.firstpalette.com/pdf/cube.pdf">Printable Cube Template</Link></li>
            <li>
              <Link target="_blank" href="https://static1.squarespace.com/static/605487f0babcaa49971a302a/t/6441d806abe3bb013ceabe25/1682036773534/ASF03+Flexagon+slides.pdf">
                Flexagon: Designing and Making a Geometric Toy
              </Link>
            </li>
          </ul>
          <h4>Additional Resources</h4>
          <div className="mt-2">
            <Link href={BreaksPic.src} target="_blank">
              <Image src={BreaksPic} alt="what does a break look like" width={500} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
            </Link>
          </div>
        </div>
        <div className="col-md-5">
          <Link href={UseOfClassTimeImg.src} target="_blank">
            <Image src={UseOfClassTimeImg} alt="" width={375} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
          </Link>
        </div>
      </div>
    </main>
  );
}