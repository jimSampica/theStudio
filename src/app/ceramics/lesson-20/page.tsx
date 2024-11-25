import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Masking</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/i3sonYpTpkNiN5daq4fF" target="_blank">Masking Glazing</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            In what scenario would you use masking tape on your pottery?
                        </li>
                        <li>
                            What happens if you glaze the bottom of your project?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}