import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Innovators</h2>
      <ol>
        <li>
          <Link href="/innovators/lesson-1">Lesson: Great Expectations</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-2">Lesson: What is &quot;Innovators&quot;?</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-3">Lesson: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-4?studio-time=innovators">Lesson: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-5">Lesson: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-7">Lesson: TinkerCAD</Link>
        </li>
      </ol>
    </main>
  );
}