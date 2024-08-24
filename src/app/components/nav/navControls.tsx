"use client";

import Link from "next/link";

interface NavControlProps {
    collapsed: boolean
}

export default function NavControls({ collapsed }: NavControlProps) {

    const collapse = collapsed ? "collapse" : "";

    return (
        <div className={collapse + " navbar-collapse"} id="navControls">
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
    );
}