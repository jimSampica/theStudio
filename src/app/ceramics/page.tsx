import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Ceramics</h2>
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
          <Link href="/lesson-4?studio-time=ceramics">Lesson: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-7">Lesson: Cleaning Part 1</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-8">Lesson: Cleaning Part 2</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-9">Lesson: Creativity</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-10">Lesson: Wedging</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-11">Lesson: Slip/Score/Smooth</Link>
        </li>
      </ol>
    </main>
  );
}