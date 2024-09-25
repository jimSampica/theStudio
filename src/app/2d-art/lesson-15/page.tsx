import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Painting techniques 1</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="http://app.screencastify.com/v3/watch/H8RMzRIYWrhWcP54w554" target="_blank">Painting 1</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What should you paint first in your composition (picture)?
                        </li>
                        <li>
                            What direction should our paint strokes go?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on WOW projects. <br />Materials: open centers</p>
                </div>
            </div>
        </main>
    );
}