import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Innovators</h2>
      <h3 className="h5">Procedures and Expectations</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/innovators/great-expectations">Lesson: Great Expectations</Link>
        </li>
        <li>
          <Link href="/innovators/what-is-innovators">Lesson: What is &quot;Innovators&quot;?</Link>
        </li>
        <li>
          <Link href="/innovators/get-in-the-routine">Lesson: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson: Safety in the Classroom</Link>
        </li>
      </ol>
      <h3 className="h5">Project: TinkerCAD</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/innovators/tinkercad-basics">Lesson: TinkerCAD Basics</Link>
        </li>
      </ol>
      <h3 className="h5">Projects</h3>
      <ol className="list-style-none">

        <li>
          <Link href="/innovators/simple-machines-1">Lesson: Simple Machines part 1</Link>
        </li>
        <li>
          <Link href="/innovators/simple-machines-2">Lesson: Simple Machines part 2</Link>
        </li>
        <li>
          <Link href="/innovators/automata">Lesson: Automata</Link>
        </li>
      </ol>
    </main>
  );
}