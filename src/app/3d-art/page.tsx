import Link from "next/link"
import EarlyFinishers from "../components/early-finishers/early-finishers";

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">3D Art</h2>
      <h3 className="h5">Procedures and Expectations</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/great-expectations">Lesson: Great Expectations</Link>
        </li>
        {/*<li>
          <Link href="/3d-art/lesson-2">Lesson: Using Your Sketchbook/The Studio</Link>
        </li>
        <li>
          <Link href="/lesson-3">Lesson: Get In The Routine</Link>
        </li>*/}
        <li>
          <Link href="/lesson-4?studio-time=3d-art">Lesson: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-7">Lesson: Cleaning</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-8">Lesson: Creativity</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-9">Lesson: Copyright</Link>
        </li>
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/3d-art/hot-glue">Lesson: Hot Glue</Link>
        </li>
        <li>
          <Link href="/3d-art/paper-sculpture">Lesson: Paper Sculpture</Link>
        </li>
        <li>
          <Link href="/3d-art/origami">Lesson: Origami</Link>
        </li>
        <li>
          <Link href="/3d-art/paper-mache-1">Lesson: Paper Mache 1</Link>
        </li>
        <li>
          <Link href="/3d-art/paper-mache-2">Lesson: Paper Mache 2</Link>
        </li>
        <li>
          <Link href="/3d-art/jewelry">Lesson: Jewelry</Link>
        </li>
        <li>
          <Link href="/3d-art/stitching">Lesson: Stitching</Link>
        </li>
        <li>
          <Link href="/3d-art/crochet">Lesson: Crochet</Link>
        </li>
        <li>
          <Link href="/3d-art/interactive-art">Lesson: Interactive Art</Link>
        </li>
        <li>
          <Link href="/3d-art/quilling">Lesson: Quilling</Link>
        </li>
        <li>
          <Link href="/3d-art/installation-art">Lesson: Installation Art</Link>
        </li>
        <li>
          <Link href="/3d-art/community-art">Lesson: Community Art</Link>
        </li>
        <li>
          <Link href="/3d-art/found-objects">Lesson: Found Objects</Link>
        </li>
        <li>
          <Link href="/3d-art/relief-sculpture">Lesson: Relief Sculpture</Link>
        </li>
      </ol>
      <h3 className="h5">Finishing</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/3d-art/lesson-18">Lesson: WOW Project</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-24">Lesson: Artist Statement</Link>
        </li>
        <li> 
          <Link href="/3d-art/lesson-25">Lesson: Art Portfolio Creation</Link>
        </li>
      </ol>
      <EarlyFinishers />
    </main>
  );
}