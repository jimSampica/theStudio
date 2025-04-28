import Image from "next/image";
import PerlerBeadsPic from "/public/static/images/perler_beads.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Perler Beads</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/AgtchsyPZfkIefo5p8Ym" target="_blank">Perler Beads</a>
                        &nbsp;in its entirety and answer the questions that follow in your workbook.</p>
                    <div className="ratio ratio-16x9 mb-3">
                        <iframe src="https://drive.google.com/file/d/1AGdlGN_aWAJMpHLq7giy7pExVPz0XN18/preview" title="Perler Beads"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Grab a Perler Bead release form to get started.
                        </li>
                        <li>
                            Answer the questions on the form.
                        </li>
                        <li>
                            This will need to be done in order to use these supplies. Failure to complete will result in removal of items and a warning. Everyone needs to do this release at least 1 time.
                        </li>
                    </ul>
                </div>
                <div className="col-md-5">
                    <Link href={PerlerBeadsPic.src} target="_blank">
                        <Image src={PerlerBeadsPic} alt="" className="img-fluid rounded" style={{ "cursor": "zoom-in" }} />
                    </Link>
                </div>
            </div>
        </main>
    );
}