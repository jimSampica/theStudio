import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Glazing Basics</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/kdYVUQJM0SQQRg74TdUB" target="_blank">Glazing Basics</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Why must you wash your pottery before glazing?
                        </li>
                        <li>
                            How many layers should you use?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}