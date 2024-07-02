import Image from "next/image";
import WelcomePic from "/public/static/images/welcome_to_art.png";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson One:</h2>
      <h3>Great Expectations</h3>

      <div className="row">
        <div className="col-md-6">
          <Image src={WelcomePic} alt="Welcome to Art!" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/XlnDJ9alAvYqs1llN6t4">this video</a> in its entirety and answer the questions that follow in your sketchbook.</p>

          <h4 className="mt-3">Sketchbook (b and c are on the back of page 1)</h4>
          <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
            <li>
              In the box please follow the drawing template.
            </li>
            <li>
              Please list the 3 main classroom rules from the video.
            </li>
            <li>
              In your own words, tell me why these rules are important to follow.
            </li>
          </ul>
          <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
        </div>
      </div>
    </main>
  );
}