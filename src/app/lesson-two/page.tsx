import Image from "next/image";
import SplashPic from "/public/static/images/routines.jpg";
import Howto from "/public/static/images/learning_video_lessons.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson Two: Using your sketchbook/The Studio</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/0qKSf4gtjc6s7lWGN88E" target="_blank">this video</a> 
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
          <h4>Studio Time</h4>
          <ol>
            <li>Design on a half-sheet printer paper and as always keep it appropriate. 
              This is not a private book, if you wouldn&apos;t want me or a parent to see your picture don&apos;t draw it.</li>
            <li>Take your final design and draw it again on your sketchbook, you know, but nicer.</li>
            <li>Your name should be <strong>highly visible</strong>.</li>
            <li>Take care of this book, always put it back in the bin. You only get one sketchbook!</li>
          </ol>
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