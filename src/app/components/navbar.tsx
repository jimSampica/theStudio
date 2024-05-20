
export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">TheStudio</a>
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