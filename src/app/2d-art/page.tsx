import Link from "next/link"

export default function Page() {
    return (
      <main className="container">
        <h2 className="my-3">2D Art</h2>
        <ol>
          <li>
            <Link href="./expectations">Lesson One: Great Expectations</Link>
          </li>
          <li>
            <Link href="./routines">Lesson Two: Routines</Link>
          </li>
        </ol>
      </main>
    );
  }