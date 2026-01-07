import Image from "next/image";
import ActivityImg from "/public/static/images/expectations_activity.png";
import DosDontsImg from "/public/static/images/expectations_dos_donts.png";
import TakeCareImg from "/public/static/images/expectations_take_care.png";
import NotesImg from "/public/static/images/expectations_notes.png";
import Link from "next/link";

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
          <ul className="list-style-alpha">
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
          <h4>Activity</h4>

          <Link href={ActivityImg.src} target="_blank">
            <Image src={ActivityImg} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} width={375} />
          </Link>
          <h4 className="mt-3">Additional Resources</h4>
          <div className="d-flex">
            <Link href={TakeCareImg.src} target="_blank">
              <Image src={TakeCareImg} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} width={375} />
            </Link>
            <Link href={DosDontsImg.src} target="_blank">
              <Image src={DosDontsImg} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} width={375} />
            </Link>
          </div>
        </div>
        <div className="col-md-5">
          <Link href={NotesImg.src} target="_blank">
            <Image src={NotesImg} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} width={375} />
          </Link>
        </div>
      </div>
    </main>
  );
}