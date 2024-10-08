import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">2D Art</h2>
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
          <Link href="/lesson-4?studio-time=2d-art">Lesson 4: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson 5: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson 6: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-7">Lesson 7: Cleaning</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-8">Lesson 8: Creativity</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-9">Lesson 9: Copyright</Link>
        </li>
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/2d-art/lesson-10">Lesson: Drawing Materials</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-11">Lesson: Observational drawing 1</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-12">Lesson: Observational drawing 2</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-13">Lesson: Color mixing 1</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-14">Lesson: Color mixing 2</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-15">Lesson: Painting Techniques 1</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-16">Lesson: Painting Techniques 2</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-17">Lesson: Weaving</Link>
        </li>
      </ol>
    </main>
  );
}