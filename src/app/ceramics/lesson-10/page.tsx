import Link from "next/link"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Wedging</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/MlRkFixOYkEqePMIUvHL" target="_blank">Wedging</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Why is it important to wedge your clay?
                        </li>
                        <li>
                         What kind of wedging did I show in the video?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Start your first hand-built project.
                    </p>
                </div>
            </div>
        </main>
    );
}