import Link from "next/link"
import Image from "next/image";
import Howto from "/public/static/images/learning_video_lessons.png";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: Get In The Routine</h2>
      <h4 className="mt-3">Instructions</h4>
      <p>Please watch <a href="https://app.screencastify.com/v3/watch/0qKSf4gtjc6s7lWGN88E" target="_blank">this video</a>
        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
      <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
      <h4>Additional Resources</h4>
      <Link href={Howto.src} target="_blank">
        <Image src={Howto} alt="how to learn with video lessons.png" width={300} className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
      </Link>
    </main>
  );
}