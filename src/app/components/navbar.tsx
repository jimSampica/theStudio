import Image from "next/image";
import slide1Pic from "../public/static/images/logo.png"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src={slide1Pic} alt="TheStudio" width="256" height="47" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navControls">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navControls">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <a className="nav-link" href="#">2-D Art</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">3-D Art</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Graphic Design</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ceramics</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}