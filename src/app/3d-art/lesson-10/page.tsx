import Link from "next/link"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson 10: Hot Glue</h2>
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
                            How many sticks can we use a day in class?
                        </li>
                        <li>
                            What happens if you use your hot glue gun right after plugging in without waiting?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>work on mini project ideas. <br />Materials: open centers</p>
                </div>
            </div>
        </main>
    );
}