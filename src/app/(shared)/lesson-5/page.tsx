import Image from "next/image";
import Howto from "/public/static/images/learning_video_lessons.png";
import BreaksPic from "/public/static/images/breaks.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: Navigate the Studio</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/EpSt3IPnRpG8Uys6jPyG" target="_blank">this video</a>
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
              Why is it important to put supplies away when you are done?
            </li>
            <li>
              Name one place students shouldn&apos;t go in the classroom.
            </li>
          </ul>
          <h4>Activity</h4>
          <ol> 
            <li><Link target="_blank" href="https://docs.google.com/presentation/d/1MQace-G41jkdD_vd14sfAJKjMJqMzP-bKTzx2sPK9hw/edit?usp=sharing">Scavenger hunt</Link></li>
          </ol>
          <p>Open centers are posted for early finishers.</p>
          <h4>Additional Resources</h4>
          <div>
            <Link href={Howto.src} target="_blank">
              <Image src={Howto} alt="how to learn with video lessons" width={300} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
            </Link>
          </div>
          <div className="mt-2">
            <Link href={BreaksPic.src} target="_blank">
              <Image src={BreaksPic} alt="what does a break look like" width={300} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
            </Link>
          </div>
    </main>
  );
}