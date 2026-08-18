import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: Drawing Tools 2</h2>
      <h4 className="mt-3">Sketchbook</h4>
      <ul className="list-style-alpha">
        <li>
          Please use the <Link href="/prompt-generator">Prompt Generator</Link>.
        </li>
        <li>
          What did you learn from working with each drawing tool? <em>I learned ...from working with...</em>
        </li>
        <li>
          Which was your favorite tool and why? <em>My favorite tool is...</em>
        </li>
      </ul>
      <h4 className="mt-3">Studio Time</h4>
      <ol>
        <li>Start your quadrant drawing by drawing a simple outline picture (Draw light until its right) make sure to use the entire paper your picture should fit the space.</li>
        <li>Fold your paper into 4 quadrants. In half hamburger wise and in half hotdog wise.</li>
        <li>For quadrant 1 (upper left-hand of the paper) color with crayon (yes some nostalgia!).</li>
        <li>For quadrant 2 (upper right hand side) color with markers.</li>
        <li>For quadrant 3 (lower left-quadrant) color with pastels.</li>
        <li>For quadrant 4 use watercolor crayons.</li>
      </ol>
      <h4 className="mt-3">Tips</h4>
      <ul>
        <li>Leave no white areas of your paper showing!</li>
        <li>Pay attention to the direction your drawing tool is going.</li>
        <li>Draw light until it's right.</li>
      </ul>
    </main>
  );
}
