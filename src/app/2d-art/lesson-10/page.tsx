import Link from "next/link"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson 10: Drawing Materials</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/ahPuiMKr2h4tqiOgqB9B" target="_blank">Drawing with Charcoal</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Why is it important to wait to glue your paper sculptures until the end?
                        </li>
                        <li>
                            How much do you have to change your artwork so it won&apos;t violate copyright?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on art show. <br />Materials: open centers</p>
                </div>
            </div>
        </main>
    );
}