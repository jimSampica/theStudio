import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: Procedure</h2>
      <h4 className="mt-3">Sketchbook</h4>
      <ul className="list-style-alpha">
        <li>
          Draw the things you need for class every day.
        </li>
        <li>
          Please describe the things you should not bring to class and why. <em>I should not bring... because.</em>
        </li>
        <li>
          What happens if I am late for class and miss the bell ringer? <em>If I am late for class I should...</em>
        </li>
      </ul>
      <h4 className="mt-3">Studio Time</h4>
      <p>
        Finish your sketch book and Learn about Free Drawing and early finishers.
      </p>
    </main>
  );
}
