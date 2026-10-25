import Image from "next/image";
import Link from "next/link";

import BuildingValue from "/public/static/images/studio-art/observational-drawing/building-value.jpg";
import ValueScale from "/public/static/images/studio-art/observational-drawing/value-scale.jpg";

export default function Page() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="mt-3 mb-2">Lesson: Observational Drawing 3</h2>
          <h4 className="mt-3">Instructions</h4>
          <p>Add value to your art. Value means the darks and lights in your drawing.</p>
          <dl>
            <dt>Light source</dt>
            <dd>Where the light in a setting is coming from.</dd>
            <dt>Highlights</dt>
            <dd>The lightest areas of a drawing.</dd>
            <dt>Midtones</dt>
            <dd>
              The grays between the darkest darks and the lightest lights.
              These include more than one shade.
            </dd>
            <dt>Shadow</dt>
            <dd>The darkest areas of an object.</dd>
            <dt>Cast shadow</dt>
            <dd>The shadow on the surface an object is near.</dd>
          </dl>
          <p>
            When adding value, work on pencil pressure. The more pressure you
            apply to a pencil, the darker it draws. Pencils with different
            softness of graphite can also help you achieve different values.
          </p>
          <h4 className="mt-3">Sketchbook</h4>
          <ol className="list-style-alpha">
            <li>Draw the still-life at your table.</li>
            <li>The medium shades in a drawing are made up of the ________________.</li>
            <li>
              In which direction is a cast shadow in relation to the light source?{" "}
              <em>The cast shadow is ________________ from the light source.</em>
            </li>
          </ol>
        </div>
        <aside className="col-md-5 mb-3">
          <Link className="d-block mt-3" href={ValueScale.src} target="_blank">
            <Image
              src={ValueScale}
              alt="Grayscale value scale from black to white, labeled blacks, shadows, midtones, highlights, and whites"
              className="img-fluid rounded mb-3"
              style={{ cursor: "zoom-in" }}
            />
          </Link>
          <Link className="d-block mb-3" href={BuildingValue.src} target="_blank">
            <Image
              src={BuildingValue}
              alt="Building value in a sphere in four steps: draw, identify light and dark areas, shade, and blend, with a light source above the left side"
              className="img-fluid rounded"
              style={{ cursor: "zoom-in" }}
            />
          </Link>
        </aside>
      </div>
    </main>
  );
}
