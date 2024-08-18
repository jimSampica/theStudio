import Image from "next/image";
import SplashPic from "/public/static/images/you_are_amazing.jpg";
import Link from "next/link";
import StudioTime from "../components/studioTime";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson Two: Using Your Sketchbook/The Studio</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/JwCESOVBF20TkTgffxbI" target="_blank">this video</a> 
           &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>

          <h4 className="mt-3">Sketchbook </h4>
          <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
            <li>
              Please use the&nbsp;
              <Link href="/prompt-generator">random prompt generator</Link>
              &nbsp;and draw the assigned prompt in box a.
            </li>
            <li>
              Where can all class information be found when  you are gone, late, virtual learning or anytime?
            </li>
            <li>
              What do you think the benefits or drawbacks of this self paced class might be?
            </li>
          </ul>
          <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
          <StudioTime></StudioTime>
        </div>
        <div className="col-md-5">
          <Image src={SplashPic} alt="Routines" width={375} className="img-fluid" />
        </div>
      </div>
    </main>
  );
}