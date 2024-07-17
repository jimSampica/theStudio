import Image from "next/image";
import SplashPic from "/public/static/images/routines.jpg";
import Howto from "/public/static/images/learning_video_lessons.png";
import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson Two: Get in the Routine</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/piMgN5cFWDlUs55xHTxm" target="_blank">this video</a> 
           &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>

          <h4 className="mt-3">Sketchbook </h4>
          <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
            <li>
              Please use the&nbsp;
              <Link href="/prompt-generator">random prompt generator</Link>
              &nbsp;and draw the assigned prompt in box a.
            </li>
            <li>
              Please list the routine order.
            </li>
            <li>
              After cleaning up, where should you sit? why?
            </li>
          </ul>
          <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
          <h4>Additional Resources</h4>
          <Image src={Howto} alt="how to learn with video lessons.png" width={300} className="img-fluid" />
        </div>
        <div className="col-md-5">
          <Image src={SplashPic} alt="Routines" width={375} className="img-fluid" />
        </div>
      </div>
    </main>
  );
}