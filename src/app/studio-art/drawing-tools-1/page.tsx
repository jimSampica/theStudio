import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: Drawing Tools 1</h2>
      <h4 className="mt-3">Sketchbook</h4>
      <ul className="list-style-alpha">
        <li>
          Please use the <Link href="/prompt-generator">Prompt Generator</Link>.
        </li>
        <li>
          What do you think will be your favorite medium? <em>My favorite medium will probably be...</em>
        </li>
        <li>
          What medium do you think you will like the least? <em>I don’t think I will like to work with...</em>
        </li>
      </ul>
      <h4 className="mt-3">Studio Time</h4>
      <ol>
        <li>Circulate to each table and try new art materials.</li>
        <li>Red table: colored pencils</li>
        <li>Blue table: chalk pastels</li>
        <li>Yellow table: watercolor crayons</li>
        <li>Green table: oil pastels</li>
        <li>Purple table: charcoal</li>
        <li>Orange table: drawing pencils.</li>
      </ol>
      <p>Share your findings with the class.</p>
    </main>
  );
}
