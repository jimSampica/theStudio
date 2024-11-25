import Link from "next/link"
import Image from "next/image";
import Howto from "/public/static/images/learning_video_lessons.png";

export default function Page() {
  return (
    <main className="container">
       <h2 className="mt-3 mb-2">Lesson 3: Get In The Routine</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/0qKSf4gtjc6s7lWGN88E" target="_blank">this video</a>
            &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
            <h4 className="mt-3">Activity</h4>
            <p>Complete the activity from lesson 2.</p>
          <ul className="list-style-alpha">
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
          <h4>Additional Resources</h4>
          <Link href={Howto.src} target="_blank">
            <Image src={Howto} alt="how to learn with video lessons.png" width={300} className="img-fluid" style={{ "cursor": "zoom-in" }} />
          </Link>
    </main>
  );
}