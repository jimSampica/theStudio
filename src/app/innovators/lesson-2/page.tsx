import Image from "next/image";
import ForcesPic from "/public/static/images/airplane_forces.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson 2: What is &quot;Innovators&quot;?</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/d86KOhnsD2QISM7Yd2xC" target="_blank">this video</a>
            &nbsp;in its entirety and complete the activity and answer the questions on the project worksheet.</p>

          <h4 className="mt-3">Activity </h4>
          <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
            <li>
              <Link target="_blank" href="https://www.youtube.com/watch?v=6fLh8eswOn0">Airplane drag video</Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.foldnfly.com/0.html#The-Basic">Sample design 1</Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.foldnfly.com/1.html#Basic-Dart">Sample design 2</Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.foldnfly.com/53.html#Wilson">Sample design 3</Link>
            </li>
            <li>
              <Link target="_blank" href="/static/files/airplane_drag.pdf">Project Worksheet</Link>
              <ol>
                <li>
                <Link target="_blank" href="https://nces.ed.gov/nceskids/CreateAGraph/default.aspx">Make the chart</Link>
                </li>
              </ol>
            </li>
          </ul>
          <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
        </div>
        <div className="col-md-5">
          <Image src={ForcesPic} alt="Airplane forces" width={375} className="img-fluid" />
        </div>
      </div>
    </main>
  );
}