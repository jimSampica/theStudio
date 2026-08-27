import Link from "next/link";
import SafetyNotes1Img from "/public/static/images/safety_notes_1.png";
import SafetyNotes2Img from "/public/static/images/safety_notes_2.png";
import Image from "next/image";
import { SafetyWorksheet } from "@/app/components/safetyWorksheet/safetyWorksheet";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Safety</h2>
          <h4 className="mt-3">Sketchbook</h4>
          <ul className="list-style-alpha">
            <li>
              Please use the <Link href="/prompt-generator">Prompt Generator</Link>.
            </li>
            <li>
              What is one way to stay safe in the classroom and why? <em>One way I can be safe in the classroom is... because...</em>
            </li>
            <li>
              In what way can our voice levels affect safety? <em>Our voice level can affect safety because...</em>
            </li>
          </ul>
          <h4 className="mt-3">Studio Time</h4>
          <p>
            Safety activity. Finish designing sketchbooks.
          </p>
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
      <SafetyWorksheet quizNumber={1} />
    </main>
  );
}
