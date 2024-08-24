import Image from "next/image";
import slide1Pic from "/public/static/images/logo.png"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
      <div className="container">
        <h1 className="visually-hidden">TheStudio - By Caitlyn Sampica</h1>
        <Link href="/" className="navbar-brand">
          <Image src={slide1Pic} alt="TheStudio" width="256" height="47" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navControls">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navControls">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link" href="/2d-art">2-D Art</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/3d-art">3-D Art</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/graphic-design">Graphic Design</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/ceramics">Ceramics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/innovators">Innovators</Link>
            </li>
            <li className="nav-item"><hr className="dropdown-divider" /></li>
            <li className="nav-item">
              <Link className="nav-link" href="/prompt-generator">Prompt Generator</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}