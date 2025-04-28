import Link from "next/link"
import EarlyFinishers from "../components/early-finishers/early-finishers";

export default function Page() {
  return (
    <main className="container">
      <h2 className="my-3">2D Art</h2>
      <h3 className="h5">Procedures and Expectations</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/great-expectations">Lesson: Great Expectations</Link>
        </li>
        <li>
          <Link href="/lesson-2">Lesson: Using Your Sketchbook/The Studio</Link>
        </li>
        <li>
          <Link href="/lesson-3">Lesson: Get In The Routine</Link>
        </li>
        <li>
          <Link href="/lesson-4?studio-time=2d-art">Lesson: Use of Class Time</Link>
        </li>
        <li>
          <Link href="/lesson-5">Lesson: Navigate the Studio</Link>
        </li>
        <li>
          <Link href="/lesson-6">Lesson: Safety in the Classroom</Link>
        </li>
        <li>
          <Link href="/2d-art/cleaning">Lesson: Cleaning</Link>
        </li>
        <li>
          <Link href="/2d-art/creativity">Lesson: Creativity</Link>
        </li>
        <li>
          <Link href="/2d-art/copyright">Lesson: Copyright</Link>
        </li>
      </ol>
      <h3 className="h5">Skillbuilders</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/2d-art/drawing-materials">Lesson: Drawing Materials</Link>
        </li>
        <li>
          <Link href="/2d-art/observational-drawing-1">Lesson: Observational drawing 1</Link>
        </li>
        <li>
          <Link href="/2d-art/observational-drawing-2">Lesson: Observational drawing 2</Link>
        </li>
        <li>
          <Link href="/2d-art/color-mixing-1">Lesson: Color mixing 1</Link>
        </li>
        <li>
          <Link href="/2d-art/color-mixing-2">Lesson: Color mixing 2</Link>
        </li>
        <li>
          <Link href="/2d-art/painting-techniques-1">Lesson: Painting Techniques 1</Link>
        </li>
        <li>
          <Link href="/2d-art/painting-techniques-2">Lesson: Painting Techniques 2</Link>
        </li>
        <li>
          <Link href="/2d-art/weaving">Lesson: Weaving</Link>
        </li>
        <li>
          <Link href="/2d-art/scratch-art">Lesson: Scratch Art</Link>
        </li>
        <li>
          <Link href="/2d-art/printmaking-foam">Lesson: Printmaking Foam</Link>
        </li>
        <li>
          <Link href="/2d-art/gelli-printing">Lesson: Gelli Printing</Link>
        </li>
        <li>
          <Link href="/2d-art/grid-drawing">Lesson: Grid Drawing</Link>
        </li>
        <li>
          <Link href="/2d-art/1-point-perspective">Lesson: 1-Point Perspective</Link>
        </li>
      </ol>
      <h3 className="h5">Finishing</h3>
      <ol className="list-style-none">
        <li>
          <Link href="/2d-art/wow-project">Lesson: WOW Project</Link>
        </li>
        <li>
          <Link href="/2d-art/artist-statement">Lesson: Artist Statement</Link>
        </li>
        <li> 
          <Link href="/2d-art/art-portfolio-creation">Lesson: Art Portfolio Creation</Link>
        </li>
      </ol>
      <EarlyFinishers />
    </main>
  );
}