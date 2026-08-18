import Link from "next/link"

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">Studio Art</h2>
      <ol className="list-style-none" id="lesson-list">
        <li>
          <Link href="/studio-art/welcome">Lesson: Welcome</Link>
        </li>
        <li>
          <Link href="/studio-art/expectations">Lesson: Expectations</Link>
        </li>
        <li>
          <Link href="/studio-art/procedure">Lesson: Procedure</Link>
        </li>
        <li>
          <Link href="/studio-art/safety">Lesson: Safety</Link>
        </li>
        <li>
          <Link href="/studio-art/drawing-tools-1">Lesson: Drawing Tools 1</Link>
        </li>
        <li>
          <Link href="/studio-art/drawing-tools-2">Lesson: Drawing Tools 2</Link>
        </li>
        <li>
          <Link href="/studio-art/drawing-tools-3">Lesson: Drawing Tools 3</Link>
        </li>
      </ol>
    </main>
  );
}