import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Printmaking Foam</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/uE7ZrVANcL31n4mzpAJr" target="_blank">Printmaking Foam</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What special consideration do you need to make regarding words in printmaking?
                        </li>
                        <li>
                            What is the tool that looks like a paint roller called?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}