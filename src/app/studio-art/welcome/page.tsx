import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson: Welcome</h2>
      <h4 className="mt-3">Sketchbook</h4>
      <ul className="list-style-alpha">
        <li>
          Fill out the about the artist page 1.
        </li>
        <li>
          What Art medium is your favorite to work with? <em>My favorite medium to work with is...</em>
        </li>
        <li>
          What is a medium you would like to know more about? <em>I would like to learn more about...</em>
        </li>
      </ul>
      <h4 className="mt-3">Studio Time</h4>
      <p>
        Sketchbook Covers. Design a sketchbook cover lightly in pencil and color it in. Your name must be visible and you should take your time and be proud as with everything in this class. Every sketchbook must be uniquely and thoroughly designed, feel free to use the internet for ideas.
      </p>
    </main>
  );
}
