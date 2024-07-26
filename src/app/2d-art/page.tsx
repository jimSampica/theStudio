import Link from "next/link"

export default function Page() {
    return (
      <main className="container">
        <h2 className="my-3">2D Art</h2>
        <ol>
          <li>
            <Link href="/lesson-one">Lesson One: Great Expectations</Link>
          </li>
          <li>
            <Link href="/lesson-two">Lesson Two: Using your sketchbook/The Studio</Link>
          </li>
          <li>
            <Link href="/lesson-three">Lesson Three: Get in the Routine</Link>
          </li>
        </ol>
      </main>
    );
  }