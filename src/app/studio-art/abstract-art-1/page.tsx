import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import YellowRedBlue from "/public/static/images/studio-art/abstract-art/kandinsky-yellow-red-blue.jpg";
import Eclipse from "/public/static/images/studio-art/abstract-art/thomas-eclipse.jpg";
import TheGoldfish from "/public/static/images/studio-art/abstract-art/klee-the-goldfish.jpg";
import MyFrontYard from "/public/static/images/studio-art/abstract-art/okeeffe-my-front-yard.jpg";

const examples: {
  src: StaticImageData;
  alt: string;
  category: string;
  artist: string;
  title: string;
  year: number;
}[] = [
  {
    src: YellowRedBlue,
    alt: "Colorful geometric shapes and curved black lines in Wassily Kandinsky's Yellow, Red, Blue",
    category: "Non-objective",
    artist: "Wassily Kandinsky",
    title: "Yellow, Red, Blue",
    year: 1925,
  },
  {
    src: Eclipse,
    alt: "Concentric rings of colorful brush marks surrounding a dark blue center in Alma Thomas's Eclipse",
    category: "Non-objective",
    artist: "Alma Thomas",
    title: "Eclipse",
    year: 1970,
  },
  {
    src: TheGoldfish,
    alt: "A bright yellow fish surrounded by smaller fish and blue patterns in Paul Klee's The Goldfish",
    category: "Semi-Abstract",
    artist: "Paul Klee",
    title: "The Goldfish",
    year: 1925,
  },
  {
    src: MyFrontYard,
    alt: "A mountain landscape simplified into flowing green and pink forms in Georgia O'Keeffe's My Front Yard",
    category: "Semi-Abstract",
    artist: "Georgia O'Keeffe",
    title: "My Front Yard",
    year: 1941,
  },
];

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Abstract Art 1</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>
            Abstract art is art that does not try to look like real things,
            people, or places. Instead, it is imaginative and about feeling.
          </p>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Draw an abstract picture of how you feel.</li>
            <li>
              What is one question you have about abstract art?{" "}
              <em>One question I have about abstract art is __________.</em>
            </li>
            <li>
              Which of the four abstract pictures is your favorite, and what draws you to it?{" "}
              <em>My favorite picture was __________ because __________.</em>
            </li>
          </ol>
          <div className="row g-3 mb-3">
            {examples.map((example) => (
              <div className="col-md-6" key={example.src.src}>
                <figure>
                  <Link className="d-block" href={example.src.src} target="_blank">
                    <Image
                      src={example.src}
                      alt={example.alt}
                      className="img-fluid rounded"
                      style={{ cursor: "zoom-in" }}
                    />
                  </Link>
                  <figcaption className="mt-2">
                    <strong>{example.category}</strong><br />
                    {example.artist}<br />
                    <em>{example.title}</em>, {example.year}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <aside className="col-md-5 mb-3">
          <div className="bg-dark text-white rounded p-3 mt-3">
            <h4>What Is Abstract Art?</h4>
            <ul>
              <li>About feelings rather than accurate representation.</li>
              <li>There is no right way.</li>
              <li>Non-objective and semi-abstract.</li>
              <li>Good abstract art uses line, shape, and color well.</li>
              <li>You don&apos;t need to understand it or &ldquo;get it&rdquo; to appreciate abstract art.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
