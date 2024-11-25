import Link from "next/link"
import Image from "next/image";
import WelcomePic from "/public/static/images/welcome_to_art.png";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson 1: Great Expectations</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Please watch <a href="https://app.screencastify.com/v3/watch/Tp4JHMVlAD0IDBcNq9SI" target="_blank">this video</a>
            &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>

          <h4 className="mt-3">Activity</h4>
          <ul className="list-style-alpha">
            <li>
              <Link target="_blank" href="https://docs.google.com/presentation/d/1P5xU32IHnMYgtuNrUzUFq3Hi0HZt7JaFXAuIpyypIVk/edit?usp=sharing">Teamwork</Link>
            </li>
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