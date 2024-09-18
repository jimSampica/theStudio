import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">2D Art</h2>
      <ol>
        <li>
          <Link href="/lesson-1">Lesson One: Great Expectations</Link>
        </li>
        <li>
          <Link href="/lesson-2">Lesson Two: Using Your Sketchbook/The Studio</Link>
        </li>
        <li>
          <Link href="/lesson-3">Lesson Three: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-4?studio-time=2d-art">Lesson Four: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson Five: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson Six: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-7">Lesson Seven: Cleaning</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-8">Lesson Eight: Creativity</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-9">Lesson Nine: Copyright</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-10">Lesson Ten: Drawing Materials</Link>
        </li>
      </ol>
    </main>
  );
}