import Image from "next/image";
import WelcomePic from "/public/static/images/welcome_to_art.png";
import Howto from "/public/static/images/learning_video_lessons.png";
import BreaksPic from "/public/static/images/breaks.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson Four: Use of Class Time</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/dgJz9nQKUgDz2yUvvpoZ" target="_blank">this video</a>
            &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
          <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
          <h4 className="mt-3">Sketchbook </h4>
          <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
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
          <ol>
            <li>Art stations exploration.</li>
          </ol>
          <h4>Additional Resources</h4>
          <div>
            <Link href={Howto.src} target="_blank">
              <Image src={Howto} alt="how to learn with video lessons" width={300} className="img-fluid" style={{ "cursor": "zoom-in" }} />
            </Link>
          </div>
          <div className="mt-2">
            <Link href={BreaksPic.src} target="_blank">
              <Image src={BreaksPic} alt="what does a break look like" width={300} className="img-fluid" style={{ "cursor": "zoom-in" }} />
            </Link>
          </div>
        </div>
        <div className="col-md-5">
          <Image src={WelcomePic} alt="Welcome to Art!" width={375} className="img-fluid" />
        </div>
      </div>
    </main>
  );
}