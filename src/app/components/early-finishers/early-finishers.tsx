import Link from "next/link"
import BlindArtistImg from "/public/static/images/blind_artist.png";
import FauxStainedGlassImg from "/public/static/images/faux_stained_glass.jpg";

export default function EarlyFinishers() {
    return (
        <div>
            <h3 className="h5">Early Finishers</h3>
            <ol className="list-style-none">
                <li>
                    <Link href="/perler-beads">Perler Beads</Link> (must fill out and sign form)
                </li>
                <li>
                    <Link href="/shrinky-dinks">Shrinky Dinks</Link> (must fill out and sign form)
                </li>
                <li>
                    <Link href="/3d-art/jewelry">Bracelets</Link>
                </li>
                <li>
                    <Link target="_blank" href="https://www.youtube.com/watch?app=desktop&v=-NNb-TD9Utw">Pinwheels</Link>
                </li>
                <li>
                    <Link target="_blank" href="https://app.screencastify.com/v3/watch/AgtchsyPZfkIefo5p8Ym">Faux stained glass video</Link> and&nbsp;
                    <Link target="_blank" href={FauxStainedGlassImg.src}>example</Link>
                </li>
                <li>
                    <Link target="_blank" href={BlindArtistImg.src}>Blind Artist</Link>
                </li>
                <li>
                    Velvet Poster* (limit one per person. While supplies last)
                </li>
                <li>
                    <Link href="/3d-art/jewelry">Bracelets</Link>
                </li>
                <li>
                    <Link href="/2d-art/weaving">Weaving</Link>
                </li>
                <li>
                    <Link href="/graphic-design/lesson-24">Zine</Link>
                </li>
                <li>
                    Free Draw
                </li>
            </ol>
        </div>
    );
}