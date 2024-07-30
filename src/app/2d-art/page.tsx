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
            <Link href="/lesson-two">Lesson Two: Using Your Sketchbook/The Studio</Link>
          </li>
          <li>
            <Link href="/lesson-three">Lesson Three: Get In The Routine</Link>
          </li>
        </ol>
      </main>
    );
  }