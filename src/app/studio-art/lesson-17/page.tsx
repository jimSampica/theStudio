import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Raster vs Vector</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://www.youtube.com/watch?v=p2thSkOa_Xg" target="_blank">Raster vs Vector</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What happens when you scale up raster images?
                        </li>
                        <li>
                            List 2 reasons to use raster over vector graphics?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}