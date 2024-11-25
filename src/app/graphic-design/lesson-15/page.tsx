import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Puzzle part 3</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/OX7ucCXftQbKoq3K1pji" target="_blank">Puzzel part 3</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            What is a good way to apply wood glue to your puzzle?
                        </li>
                        <li>
                            Name one material that you can color your puzzle with.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}