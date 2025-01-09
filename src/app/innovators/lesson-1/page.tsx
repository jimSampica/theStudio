import Image from "next/image";
import StemPic from "/public/static/images/stem_challenge_steps.png";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson 1: Great Expectations</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/RTVNqNuQLPO8fmM7MHNG" target="_blank">Great Expectations</a>
            &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>

          <ul>
            <li>Design a car that has no wheels.</li>
            <li>What are the rules in Innovators class?</li>
            <li>Why is teamwork important?</li>
          </ul>
        </div>
        <div className="col-md-5">
          <Image src={StemPic} alt="" width={400} className="img-fluid" />
        </div>
      </div>
    </main>
  );
}