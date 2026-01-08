"use client";

import Image from "next/image";
import Link from "next/link";
import SafetyNotes1Img from "/public/static/images/safety_notes_1.png";
import SafetyNotes2Img from "/public/static/images/safety_notes_2.png";
import { SafetyWorksheet } from "./safetyWorksheet/safetyWorksheet";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Safety in the Classroom</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/S2HgFu094N7pxIpHnVU2" target="_blank">this video</a>
            &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
          <h4 className="mt-3">Picture</h4>
          <ul>
            <li>
              On the picture of the classroom below, click the safety concerns or rule violations you see. Wrong answers will clear the sheet.
            </li>
          </ul>
          <h4 className="mt-3">Sketchbook</h4>
          <ul className="list-style-alpha">
            <li>
              Design the best treehouse.
            </li>
            <li>
              What one suggested way to keep walkways clear according to the notes on the right?
            </li>
            <li>
              What safety rule do you think is most important? <em>I think the most important rule is...because...</em>
            </li>
          </ul>
          <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
          <h4>Studio Time</h4>
          <dl>
            <dt>Ceramics:</dt>
            <dd>Independent work on plasticine clay challenges. About 5 minutes per challenge.</dd>
            <dt>Innovators:</dt>
            <dd>Lego challenges in groups of 4-5. Each challenge will have a new group leader.</dd>
            <dt>3D art:</dt>
            <dd><Link href="https://static1.squarespace.com/static/605487f0babcaa49971a302a/t/6441d806abe3bb013ceabe25/1682036773534/ASF03+Flexagon+slides.pdf">Flexagon instructions</Link></dd>
          </dl>
        </div>
        <div className="col-md-5 mb-3">
          <Link href={SafetyNotes1Img.src} target="_blank">
            <Image src={SafetyNotes1Img} alt="" width={275} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
          </Link>
          <Link href={SafetyNotes2Img.src} target="_blank">
            <Image src={SafetyNotes2Img} alt="" width={275} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
          </Link>
        </div>
      </div>
      <SafetyWorksheet />
    </main>
  );
}