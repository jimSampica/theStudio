import Image from "next/image";
import Link from "next/link";

import SundayAfternoon from "/public/static/images/studio-art/abstract-art/seurat-a-sunday-afternoon.jpg";
import Lyle from "/public/static/images/studio-art/abstract-art/close-lyle.jpg";
import DachshundOnBlue from "/public/static/images/studio-art/abstract-art/kare-dachshund-on-blue.jpg";

const examples = [
  {
    src: SundayAfternoon,
    alt: "People relaxing on a sunny riverbank, painted with small dots of color",
    artist: "Georges Seurat",
    title: "A Sunday Afternoon",
    year: 1885,
  },
  {
    src: Lyle,
    alt: "Close-up portrait made from a grid of colorful shapes",
    artist: "Chuck Close",
    title: "Lyle",
    year: 1997,
  },
  {
    src: DachshundOnBlue,
    alt: "Orange pixel-art dachshund against a blue background",
    artist: "Susan Kare",
    title: "Dachshund on Blue",
    year: 2012,
  },
];

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Abstract Art 3</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>
            Some artwork bridges the gap between abstraction and realism. You
            can find abstraction in Impressionism, modern art, and postmodern art.
          </p>
          <dl>
            <dt>Pointillism</dt>
            <dd>A painting technique that uses tiny, separate dots of pure color to make a picture.</dd>
            <dt>Neo-Impressionism</dt>
            <dd>
              An art movement that began in France in the 1880s. Its artists
              used techniques such as pointillism, and their work helped inspire
              the abstract art movement.
            </dd>
          </dl>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Use colored pencils to make a small pointillist artwork.</li>
            <li><em>The difference between Neo-Impressionism and pointillism is __________.</em></li>
            <li>What was a criticism of pointillism?</li>
          </ol>
          <h4 className="mt-3">Activity</h4>
          <p>Design an abstract artwork using &ldquo;pixels.&rdquo;</p>
        </div>
        <aside className="col-md-5 mb-3">
          <div className="bg-dark text-white rounded p-3 mt-3 mb-3">
            <h4>Pointillism Fact</h4>
            <p className="mb-0">Critics first used the term pointillism to mock the technique, calling it rigid and childish.</p>
          </div>
          {examples.map((example) => (
            <figure key={example.src.src}>
              <Link className="d-block" href={example.src.src} target="_blank">
                <Image src={example.src} alt={example.alt} className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
              </Link>
              <figcaption className="mt-2">
                {example.artist}<br />
                <em>{example.title}</em>, {example.year}
                {example.src === SundayAfternoon && (
                  <>
                    <br />This painting predates the abstract movement but has semi-abstract qualities.
                    <br />
                    <Link href="https://artsandculture.google.com/asset/study-for-a-sunday-on-la-grande-jatte-georges-seurat/MgFZs28X-gM_hA?hl=en-GB" target="_blank">
                      Explore Seurat&apos;s study on Google Arts &amp; Culture
                    </Link>
                  </>
                )}
              </figcaption>
            </figure>
          ))}
        </aside>
      </div>
    </main>
  );
}
