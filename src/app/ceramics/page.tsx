import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Ceramics</h2>
      <h3 className="h5">Procedures and Expectations</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/great-expectations">Lesson: Great Expectations</Link>
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
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/ceramics/wedging">Lesson: Wedging</Link>
        </li>
        <li>
          <Link href="/ceramics/score-slip-smooth">Lesson: Score/Slip/Smooth</Link>
        </li>
        <li>
          <Link href="/ceramics/ceramic-tools">Lesson: Ceramic Tools</Link>
        </li>
        <li>
          <Link href="/ceramics/throwing-a-cup">Lesson: Throwing a cup</Link>
        </li>
        <li>
          <Link href="/ceramics/moisture-management">Lesson: Moisture Management</Link>
        </li>
        <li>
          <Link href="/ceramics/trimming">Lesson: Trimming/Finishing</Link>
        </li>
        <li>
          <Link href="/ceramics/sculpture">Lesson: Sculpture</Link>
        </li>
        <li>
          <Link href="/ceramics/throwing-a-bowl">Lesson: Throwing a bowl</Link>
        </li>
        <li>
          <Link href="/ceramics/glazing-basics">Lesson: Glazing Basics</Link>
        </li>
        <li>
          <Link href="/ceramics/masking">Lesson: Masking</Link>
        </li>
        <li>
          <Link href="/ceramics/kiln">Lesson: Kiln</Link>
        </li>
      </ol>
      <h3 className="h5">Finishing</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/ceramics/lesson-17">Lesson: WOW Project</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-22">Lesson: Artist Statement</Link>
        </li>
        <li> 
          <Link href="/ceramics/lesson-23">Lesson: Art Portfolio Creation</Link>
        </li>
      </ol>
    </main>
  );
}