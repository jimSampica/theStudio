import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">2D Art</h2>
      <ol>
        <li>
          <Link href="/lesson-1">Lesson: Great Expectations</Link>
        </li>
        <li>
          <Link href="/lesson-2">Lesson: Using Your Sketchbook/The Studio</Link>
        </li>
        <li>
          <Link href="/lesson-3">Lesson: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-4?studio-time=2d-art">Lesson: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-7">Lesson: Cleaning</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-8">Lesson: Creativity</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-9">Lesson: Copyright</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-10">Lesson: Drawing Materials</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-11">Lesson: Observational drawing 1</Link>
        </li>
      </ol>
    </main>
  );
}