import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">3D Art</h2>
      <h3 className="h5">Procedures and Expectations</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/lesson-1">Lesson 1: Great Expectations</Link>
        </li>
        <li>
          <Link href="/lesson-2">Lesson 2: Using Your Sketchbook/The Studio</Link>
        </li>
        <li>
          <Link href="/lesson-3">Lesson 3: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-4?studio-time=3d-art">Lesson 4: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson 5: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson 6: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-7">Lesson 7: Cleaning</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-8">Lesson 8: Creativity</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-9">Lesson 9: Copyright</Link>
        </li>
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/3d-art/lesson-10">Lesson: Hot Glue</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-11">Lesson: Paper Sculpture</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-12">Lesson: Origami</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-13">Lesson: Paper Mache 1</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-14">Lesson: Paper Mache 2</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-15">Lesson: Jewelry</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-16">Lesson: Sewing 1</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-17">Lesson: Crochet</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-19">Lesson: Interactive Art</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-20">Lesson: Quilling</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-21">Lesson: Installation Art</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-22">Lesson: Community Art</Link>
        </li>
      </ol>
      <h3 className="h5">Finishing</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/3d-art/lesson-18">Lesson: WOW Project</Link>
        </li>
      </ol>
    </main>
  );
}