import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Graphic Design</h2>
      <h3 className="h5">Procedures and Expectations</h3>
      <ol>
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
          <Link href="/lesson-4?studio-time=graphic-design">Lesson 4: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson 5: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson 6: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/graphic-design/lesson-7">Lesson 7: Using Drive</Link>
        </li>
        <li>
          <Link href="/graphic-design/lesson-8">Lesson 8: Creativity</Link>
        </li>
        <li>
          <Link href="/graphic-design/lesson-9">Lesson 9: Copyright</Link>
        </li>
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol start={10}>
        <li>
          <Link href="/graphic-design/lesson-10">Lesson: What is Design?</Link>
        </li>
        <li>
          <Link href="/graphic-design/lesson-11">Lesson: Principles of Design</Link>
        </li>
        <li>
          <Link href="/graphic-design/lesson-12">Lesson: Careers in Design</Link>
        </li>
      </ol>
      <h3 className="h5">Project: Making a wooden puzzle</h3>
      <p>
        The project will help you practice the duties of a graphic illustrator. Graphic Illustrators make digital drawings and designs that are used in products like puzzles, posters, illustrated books and comics, stickers and much more.
      </p>
      <p>
        Using the following tutorials and references we will learn how to build an .svg and use a glowforge (laser engraver and cutter).
      </p>
      <ol start={13}>
        <li>
          <Link href="/graphic-design/lesson-13">Lesson: Puzzle part 1</Link>
        </li>
        <li>
          <Link href="/graphic-design/lesson-14">Lesson: Puzzle part 2</Link>
        </li>
        <li>
          <Link href="/graphic-design/lesson-15">Lesson: Puzzle part 3</Link>
        </li>
        <li>
          <Link href="/graphic-design/lesson-16">Lesson: Typography</Link>
        </li>
      </ol>
    </main>
  );
}