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
        <li>
          <Link href="/innovators/cleaning">Lesson: Cleaning</Link>
        </li>
      </ol>
      <h3 className="h5">Project: TinkerCAD</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/innovators/tinkercad-basics">Lesson: TinkerCAD Basics</Link>
        </li>
        <li>
          <Link href="/innovators/create-your-project">Lesson: Create your Project</Link>
        </li>
        <li>
          <Link href="/innovators/project-submission">Lesson: Project submission</Link>
        </li>
      </ol>
      <h3 className="h5">Project: Glowforge</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/innovators/glowforge-basics">Lesson: Glowforge Basics</Link>
        </li>        
        <li>
          <Link href="/innovators/glowforge-derby-car">Lesson: Glowforge Derby Car</Link>
        </li>       
        <li>
          <Link href="/innovators/derby-car-assembly">Lesson: Derby Car Assembly</Link>
        </li>
      </ol>
      <h3 className="h5">Project: Simple Machines</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/innovators/simple-machines-1">Lesson: Simple Machines Part 1</Link>
        </li>
        <li>
          <Link href="/innovators/simple-machines-2">Lesson: Simple Machines Part 2</Link>
        </li>
        <li>
          <Link href="/innovators/simple-machines-3">Lesson: Automata</Link>
        </li>
      </ol>
      <h3 className="h5">Project: Circuits</h3>
      <ol>
        <li>
          <Link href="/innovators/intro-to-circuits">Lesson: Intro to Circuits</Link>
        </li>
      </ol>
    </main>
  );
}