import Image from "next/image";
import WelcomePic from "/public/static/images/welcome_to_art.png";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Great Expectations</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/Tp4JHMVlAD0IDBcNq9SI" target="_blank">this video</a>
            &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>

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
          <h4>Studio Time</h4>
          <ul>
            <li><a href="https://lsc-pagepro.mydigitalpublication.com/publication/?m=60985&i=754939&p=22&ver=html5" target="_blank">Exquisite artist article</a></li>
            <li><a href="https://www.youtube.com/watch?v=FUKwnewqQms" target="_blank">Exquisite artist video</a></li>
          </ul>
          <h4>Additional Resources</h4>
          <ul>
            <li>
              <a href="/static/files/ArtRoomThinkSheet.pdf" target="_blank">Art Room Think Sheet (Art of Ed)</a>
            </li>
            <li>
              <a href="/static/files/ArtRoomThinkSheet.pdf" target="_blank">Art Room Praise Sheet</a>
            </li>
          </ul>
        </div>
        <div className="col-md-5">
          <Image src={WelcomePic} alt="Welcome to Art!" width={375} className="img-fluid" />
        </div>
      </div>
    </main>
  );
}