import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Innovators</h2>
      <h3 className="h5">Procedures and Expectations</h3>
      <ol>
        <li>
          <Link href="/innovators/lesson-1">Lesson 1: Great Expectations</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-2">Lesson 2: What is &quot;Innovators&quot;?</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-3">Lesson 3: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-4?studio-time=innovators">Lesson 4: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-5">Lesson 5: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson 6: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/innovators/lesson-7">Lesson 7: TinkerCAD</Link>
        </li>
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol start={10}>
        <li>
          <Link href="/innovators/lesson-8">Lesson: Simple Machines</Link>
        </li>
      </ol>
    </main>
  );
}