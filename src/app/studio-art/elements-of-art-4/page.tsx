import Image from "next/image";
import Link from "next/link";

import Form from "/public/static/images/studio-art/elements-of-art/form.png";
import Texture from "/public/static/images/studio-art/elements-of-art/texture.png";
import Space from "/public/static/images/studio-art/elements-of-art/space.png";
import FormTextureSpaceDefinitions from "/public/static/images/studio-art/elements-of-art/form-texture-space-definitions.png";
import SpaceComparison from "/public/static/images/studio-art/elements-of-art/space-comparison.jpg";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Elements of Art 4</h2>
          <h4 className="mt-3">Instructions</h4>
          <ol>
            <li>On page 5 of your zine, draw a form-centered picture using your theme.</li>
            <li>On page 6 of your zine, draw a texture-centered picture using your theme.</li>
            <li>On page 7 of your zine, draw a space-centered picture using your theme.</li>
          </ol>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Use the <Link href="/prompt-generator">Prompt Generator</Link>.</li>
            <li>
              What does implied texture mean? {" "}
              <em>Implied texture is ____________________.</em>
            </li>
            <li>
              Why does space in art matter? {" "}
              <em>Space in art matters because ____________________.</em>
            </li>
          </ol>
          <h4 className="mt-3">Form, Texture, and Space</h4>
          <dl>
            <dt>Form</dt>
            <dd>An object that occupies space or looks like it occupies space.</dd>
            <dt>Texture</dt>
            <dd>Drawing how something feels or how you think it would feel.</dd>
            <dt>Space</dt>
            <dd>The amount of space around objects in a composition.</dd>
          </dl>
          <p>
            Actual texture is when an object feels like something. Implied
            texture is when an object looks like it feels like something.
          </p>
          <p>
            Actual form is an object that occupies space, like a sculpture.
            Implied form is an object that looks like it occupies space.
          </p>
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <Link className="d-block" href={Form.src} target="_blank">
                <Image src={Form} alt="Form poster with rounded letters and a shaded sphere that appear three-dimensional" className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
              </Link>
            </div>
            <div className="col-md-4">
              <Link className="d-block" href={Texture.src} target="_blank">
                <Image src={Texture} alt="Texture poster with layered brush marks and patterned surfaces" className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
              </Link>
            </div>
            <div className="col-md-4">
              <Link className="d-block" href={Space.src} target="_blank">
                <Image src={Space} alt="Space poster with tall colorful letters surrounded by a purple background" className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
              </Link>
            </div>
          </div>
          <Link className="d-block mb-3" href={SpaceComparison.src} target="_blank">
            <Image src={SpaceComparison} alt="Two drawings comparing a chair filling an indoor scene with a small chair surrounded by open landscape" className="img-fluid rounded" style={{ cursor: "zoom-in" }} />
          </Link>
        </div>
        <aside className="col-md-5 mb-3">
          <Link href={FormTextureSpaceDefinitions.src} target="_blank">
            <Image src={FormTextureSpaceDefinitions} alt="Definitions of the elements of art texture, form, and space" className="img-fluid rounded mb-3" style={{ cursor: "zoom-in" }} />
          </Link>
        </aside>
      </div>
    </main>
  );
}
