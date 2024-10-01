import Link from "next/link"
import PaperMacheImg from "/public/static/images/paper_mache.png";
import Image from "next/image";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Paper Mache 1</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/f16DIkJWwlOssBjQnNZz" target="_blank">Paper mache 1</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What materials do you ;need for paper mache?
                        </li>
                        <li>
                            When cutting things out of cardboard where should you position your shapes to cut?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>work on WOW projects. <br />Materials: open centers</p>
                </div>
                <div className="col-md-5">
                    <Image src={PaperMacheImg} alt="" width={500} className="img-fluid rounded" />
                </div>
            </div>
        </main>
    );
}