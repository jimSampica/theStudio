import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: WOW Project</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/6RDKTg3DuWyQDO3V6OlR" target="_blank">Wow Project</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            How long does a WOW project take?
                        </li>
                        <li>
                            Why should your artwork be thoughtful, according to the video?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}