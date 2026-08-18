import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: Safety</h2>
      <h4 className="mt-3">Sketchbook</h4>
      <ul className="list-style-alpha">
        <li>
          Please use the <Link href="/prompt-generator">Prompt Generator</Link>.
        </li>
        <li>
          What is one way to stay safe in the classroom and why? <em>One way I can be safe in the classroom is... because...</em>
        </li>
        <li>
          In what way can our voice levels affect safety? <em>Our voice level can affect safety because...</em>
        </li>
      </ul>
      <h4 className="mt-3">Studio Time</h4>
      <p>
        Safety activity. Finish designing sketchbooks.
      </p>
    </main>
  );
}
