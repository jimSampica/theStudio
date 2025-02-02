import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">2D Art</h2>
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
          <Link href="/lesson-4?studio-time=2d-art">Lesson: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-7">Lesson: Cleaning</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-8">Lesson: Creativity</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-9">Lesson: Copyright</Link>
        </li>
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/2d-art/drawing-materials">Lesson: Drawing Materials</Link>
        </li>
        <li>
          <Link href="/2d-art/observational-drawing-1">Lesson: Observational drawing 1</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-12">Lesson: Observational drawing 2</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-13">Lesson: Color mixing 1</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-14">Lesson: Color mixing 2</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-15">Lesson: Painting Techniques 1</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-16">Lesson: Painting Techniques 2</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-17">Lesson: Weaving</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-19">Lesson: Scratch Art</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-20">Lesson: Printmaking Foam</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-21">Lesson: Gelli Printing</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-22">Lesson: Grid Drawing</Link>
        </li>
      </ol>
      <h3 className="h5">Finishing</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/2d-art/lesson-18">Lesson: WOW Project</Link>
        </li>
        <li>
          <Link href="/2d-art/lesson-23">Lesson: Artist Statement</Link>
        </li>
        <li> 
          <Link href="/2d-art/lesson-24">Lesson: Art Portfolio Creation</Link>
        </li>
      </ol>
    </main>
  );
}