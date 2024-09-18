import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Ceramics</h2>
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
          <Link href="/lesson-4?studio-time=ceramics">Lesson Four: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson Five: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson Six: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-7">Lesson Seven: Cleaning Part 1</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-8">Lesson Eight: Cleaning Part 2</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-9">Lesson Nine: Creativity</Link>
        </li>
      </ol>
    </main>
  );
}