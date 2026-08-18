import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: Expectations</h2>
      <h4 className="mt-3">Sketchbook</h4>
      <ul className="list-style-alpha">
        <li>
          Please use the <Link href="/prompt-generator">Prompt Generator</Link>.
        </li>
        <li>
          Describe an example where an artist thinks and acts like an artist. <em>One way an artist can think like an artist is...</em>
        </li>
        <li>
          What is a non-example where an artist thinks and acts like an artist. <em>One way an artist isn’t thinking like an artist is...</em>
        </li>
      </ul>
      <h4 className="mt-3">Studio Time</h4>
      <p>
        Your teacher will pair you up and you will make a poster like the example where you illustrate one example of following your selected rule and one non example of following your selected rule. Take your time, work together to plan it out.
      </p>
    </main>
  );
}
