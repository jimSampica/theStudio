import Image from "next/image";
import TinkerCadPic from "/public/static/images/tinkercad.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: TinkerCAD Basics</h2>
      <h4 className="mt-3">Instructions</h4>
      <p>Please watch <a href="https://www.youtube.com/watch?v=gOs6Mdj7y_4" target="_blank">TinkerCAD</a>
        &nbsp;in its entirety.</p>
      <h4>Workbook</h4>
      <ol className="list-style-alpha">
        <li>Sketch the house you designed in tinkercad.</li>
        <li>What did you learn or understand better using the resources from this lesson? (2 complete sentences)</li>
        <li>Describe to me where I can change the name of my document. (1 sentence)</li>
      </ol>
      <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
      <h4>Activity</h4>
      <ol>
        <li>Build a house on the <a href="https://www.tinkercad.com/login" target="_blank">TinkerCAD website</a></li>
      </ol>
      <h4>Additional Resources</h4>
      <div className="mt-2">
        <Link href={TinkerCadPic.src} target="_blank">
          <Image src={TinkerCadPic} alt="what does a break look like" width={500} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
        </Link>
      </div>
    </main>
  );
}