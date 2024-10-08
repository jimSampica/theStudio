export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Typography</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/EdtrfifyKwyzFW8JUBJd" target="_blank">Typography</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Design a positive word typography.
                        </li>
                        <li>
                            What is a serif font?
                        </li>
                        <li>
                            When is a good time to use a Script font?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}