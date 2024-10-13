import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Ceramics</h2>
      <h3 className="h5">Procedures and Expectations</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/lesson-1">Lesson 1: Great Expectations</Link>
        </li>
        <li>
          <Link href="/lesson-2">Lesson 2: Using Your Sketchbook/The Studio</Link>
        </li>
        <li>
          <Link href="/lesson-3">Lesson 3: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-4?studio-time=ceramics">Lesson 4: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson 5: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson 6: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-7">Lesson 7: Cleaning Part 1</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-8">Lesson 8: Cleaning Part 2</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-9">Lesson 9: Creativity</Link>
        </li>
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/ceramics/lesson-10">Lesson: Wedging</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-11">Lesson: Slip/Score/Smooth</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-12">Lesson: Ceramic Tools</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-13">Lesson: Throwing a cup</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-14">Lesson: Moisture Management</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-15">Lesson: Trimming/Finishing</Link>
        </li>
        <li>
          <Link href="/ceramics/lesson-16">Lesson: Sculpture</Link>
        </li>
      </ol>
    </main>
  );
}