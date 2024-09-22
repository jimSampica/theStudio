import Link from "next/link"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Using Drive</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/Q4vzzKYz6lmQwNCYxave" target="_blank">this video</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What should you name your folder?
                        </li>
                        <li>
                            How do you save things into your folder?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Create your folder and open  <Link target="_blank" href="https://www.photopea.com/">photopea</Link> and try the tools.</p>
                </div>
            </div>
        </main>
    );
}