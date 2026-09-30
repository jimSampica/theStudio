import Image from "next/image";
import Link from "next/link";

import PosterBundle from "/public/static/images/studio-art/elements-of-art/poster_bundle.png";
import MakeAZine from "/public/static/images/studio-art/elements-of-art/make_a_zine.jpg";
import CoverPage from "/public/static/images/studio-art/elements-of-art/cover_page.jpg";

const materials = [
  { src: PosterBundle, alt: "Elements of Art posters illustrating line, shape, color, form, value, texture, and space" },
  { src: MakeAZine, alt: "Step-by-step photographs showing how to fold and cut one sheet of paper into a zine" },
  { src: CoverPage, alt: "Zine cover example with the required title Elements of Art" },
];

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Elements of Art 1</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>
            The elements of art are the building blocks of art. Think of them like
            ingredients for a recipe. When these elements are combined, they create
            a unique piece of art!
          </p>
          <p>
            Make a zine about the elements of art in a theme of your choice. A zine
            is a booklet you can make from a single sheet of paper.
          </p>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Use the <Link href="/prompt-generator">Prompt Generator</Link>.</li>
            <li>List the seven elements of art.</li>
            <li>What theme are you going to use for your zine?</li>
          </ol>
          <h4 className="mt-3">Studio Time</h4>
          <ol>
            <li>
              Choose a theme: a big idea or topic that connects everything in your
              project. Ideas include space, sports, pets, video games, foods,
              nature, holidays, movies, books, and vehicles.
            </li>
            <li>
              Use a clean, blank sheet of paper. Follow the Make a Zine guide to
              fold and cut your paper into a booklet.
            </li>
            <li>Create a cover page with the title &quot;Elements of Art.&quot;</li>
            <li>Explore the seven elements of art in your zine using your chosen theme.</li>
          </ol>
          <h4 className="mt-3">Elements of Art</h4>
          <dl>
            <dt>Line</dt>
            <dd>A continuous mark made on a surface by a moving point. Lines can be straight, curvy, zigzag, thick, or thin.</dd>
            <dt>Shape</dt>
            <dd>A flat, two-dimensional (2D) closed area. Shapes can be geometric, like a square, or organic, like a leaf.</dd>
            <dt>Form</dt>
            <dd>A three-dimensional (3D) object that has depth. A shape is flat, but a form has thickness, like a circle becoming a sphere or ball.</dd>
            <dt>Color</dt>
            <dd>What we see when light reflects off an object. Color includes hue (the color name), value (how light or dark it is), and intensity (how bright it is).</dd>
            <dt>Value</dt>
            <dd>The lightness or darkness of a color, such as shading from bright white through grays to deep black.</dd>
            <dt>Texture</dt>
            <dd>The way something feels, or looks like it would feel, such as furry, bumpy, smooth, or rough.</dd>
            <dt>Space</dt>
            <dd>The area around, inside, or between shapes and objects. Space can create the illusion of depth, like background and foreground.</dd>
          </dl>
        </div>
        <aside className="col-md-5 mb-3">
          {materials.map((material) => (
            <Link key={material.src.src} href={material.src.src} target="_blank">
              <Image
                src={material.src}
                alt={material.alt}
                className="img-fluid rounded mb-3"
                style={{ cursor: "zoom-in" }}
              />
            </Link>
          ))}
        </aside>
      </div>
    </main>
  );
}
