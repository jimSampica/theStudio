import Link from "next/link"
import Image from "next/image";
import VocabPic1 from "/public/static/images/3d-art/paper_sculpture_vocab_1.png"
import VocabPic2 from "/public/static/images/3d-art/paper_sculpture_vocab_2.png"
import VocabPic3 from "/public/static/images/3d-art/paper_sculpture_vocab_3.png"

export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Paper Sculpture</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://app.screencastify.com/v3/watch/Cm8FuOUrHSepREPdk6N9" target="_blank">Paper Sculpture 1</a>
                &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
            <h4 className="mt-3">Questions</h4>
            <ul className="list-style-alpha">
                <li>
                    Why is precision so important in sculpture? (RAPP complete sentence)
                    <br />
                    <em>Precision is important in sculpture because...</em>
                </li>
                <li>
                    In what ways do you think working with paper is similar to cardboard (2 RAPP sentences)?
                    <br />
                    <em>Cardboard is like paper because...</em>
                </li>
            </ul>
            <h4 className="mt-3">Studio time</h4>
            <p>Paper sculpture templates attached named same as the file.</p>
            <div className="d-flex gap-3">
                <Link href={VocabPic1.src} target="_blank">
                    <Image
                        width={600}
                        src={VocabPic1}
                        alt="Paper sculpture vocabulary 1"
                        className="img-fluid rounded"
                        style={{ "cursor": "zoom-in" }}
                    />
                </Link>
                <Link href={VocabPic2.src} target="_blank">
                    <Image
                        width={600}
                        src={VocabPic2}
                        alt="Paper sculpture vocabulary 2"
                        className="img-fluid rounded"
                        style={{ "cursor": "zoom-in" }}
                    />
                </Link>
                <Link href={VocabPic3.src} target="_blank">
                    <Image
                        width={600}
                        src={VocabPic3}
                        alt="Paper sculpture vocabulary 3"
                        className="img-fluid rounded"
                        style={{ "cursor": "zoom-in" }}
                    />
                </Link>
            </div>
        </main>
    );
}