import Image from "next/image";
import StitchedCatImg from "/public/static/images/stitched_cat.jpg";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Stitching</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://www.youtube.com/watch?v=i1-B01FB56s" target="_blank">Running Stitch How To</a>
                        &nbsp;and&nbsp;<a href="https://www.youtube.com/watch?v=S9zegUYdPmg" target="_blank">Blanket Stitch How To</a>
                        &nbsp;and&nbsp;<a href="https://www.youtube.com/watch?v=sjHm8CL9WDA" target="_blank">Backstitch How To</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.
                    </p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Draw and label what blanket, back stitch and running stitch should look like.
                        </li>
                        <li>
                            What is the strongest of the 3 stitches?
                        </li>
                        <li>
                            What stitch is best for decorative edges?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>work on WOW projects. <br />Materials: open centers</p>
                </div>
                <div className="col-md-5">
                    <Image src={StitchedCatImg} alt="" width={500} className="img-fluid" style={{ "cursor": "zoom-in" }} />
                </div>
            </div>
        </main>
    );
}