import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">3D Art</h2>
      <ol>
        <li>
          <Link href="/lesson-one">Lesson One: Great Expectations</Link>
        </li>
        <li>
          <Link href="/lesson-two">Lesson Two: Using Your Sketchbook/The Studio</Link>
        </li>
        <li>
          <Link href="/lesson-three">Lesson Three: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-four?studio-time=3d-art">Lesson Four: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-five">Lesson Five: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-six">Lesson Six: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-seven">Lesson Seven: Cleaning</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-eight">Lesson Eight: Creativity</Link>
        </li>
        <li>
          <Link href="/3d-art/lesson-nine">Lesson Nine: Copyright</Link>
        </li>
      </ol>
    </main>
  );
}