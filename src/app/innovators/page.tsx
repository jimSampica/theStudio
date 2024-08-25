import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Innovators</h2>
      <ol>
        <li>
          <Link href="/innovators/lesson-one">Lesson One: Great Expectations</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-two">Lesson Two: What is "Innovators"?</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-three">Lesson Three: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-four?studio-time=innovators">Lesson Four: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-five">Lesson Five: Navigate the Studio</Link>
        </li>
      </ol>
    </main>
  );
}