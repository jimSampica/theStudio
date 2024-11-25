import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Kiln</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://www.youtube.com/watch?v=x7bIPvnZ24Q" target="_blank">The Clay Process: Firing Clay in the Kiln</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            True or false, you can have clay touch during the first firing?
                        </li>
                        <li>
                            How long does a bisque (first firing take)?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}