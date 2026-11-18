import Image from "next/image";
import Link from "next/link";

import Monet from "/public/static/images/studio-art/color-theory/monet-water-lilies.jpg";
import YellowFlowers from "/public/static/images/studio-art/color-theory/van-gogh-yellow-flowers.jpg";
import CafeTerrace from "/public/static/images/studio-art/color-theory/van-gogh-cafe-terrace.jpg";
import Dancers from "/public/static/images/studio-art/color-theory/degas-dancers.jpg";

const examples = [
  { src: Dancers, alt: "Two dancers in blue-green dresses against a warm orange background", artist: "Edgar Degas", title: "Dancers at the Bar", year: "1888" },
  { src: CafeTerrace, alt: "A brightly lit yellow cafe terrace beneath a deep blue starry sky", artist: "Vincent van Gogh", title: "Café Terrace on the Place du Forum, Arles", year: "1888" },
  { src: Monet, alt: "A green Japanese bridge above a pond of water lilies", artist: "Claude Monet", title: "Water Lilies and Japanese Bridge", year: "1897–1899" },
  { src: YellowFlowers, alt: "A field of yellow flowers painted with thick brushstrokes", artist: "Vincent van Gogh", title: "A Field of Yellow Flowers", year: "1889" },
];

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Color Theory 2</h2>
          <h4 className="mt-3">Instructions</h4>
          <dl>
            <dt>Analogous colors</dt>
            <dd>Use these to create mood or harmony in a painting.</dd>
            <dt>Complementary colors</dt>
            <dd>Use these to create balance or mood, or to direct the viewer&apos;s eye.</dd>
            <dt>Mood</dt>
            <dd>The feeling or emotion you get from the artwork.</dd>
          </dl>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Use the <Link href="/prompt-generator">Prompt Generator</Link>.</li>
            <li>Why do you think color choice is important? (RAPP sentence)</li>
            <li>Define mood in art. (RAPP sentence)</li>
          </ol>
          <div className="row g-3 mb-3">
            {examples.map((example) => (
              <div className="col-md-6" key={example.src.src}>
                <figure>
                  <Link className="d-block" href={example.src.src} target="_blank">
                    <Image src={example.src} alt={example.alt} className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
                  </Link>
                  <figcaption className="mt-2">
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
            <h4>Activity</h4>
            <p>Where does your eye go first? Pair up with the closest person across from you at your table and discuss:</p>
            <ol>
              <li>What did your neighbor see first?</li>
              <li>Did you both notice the same thing? Why or why not?</li>
            </ol>
          </div>
        </aside>
      </div>
    </main>
  );
}
