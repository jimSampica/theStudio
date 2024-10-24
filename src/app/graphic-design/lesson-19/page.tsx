import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Package Design Lid</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/n5XzE2Ef5pnqqGFVyVsG" target="_blank">Package Design</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            How many instances of Logo should you have on your box?
                        </li>
                        <li>
                            Why do the flaps on our lid design contain assets (pictures/text) going outward instead of right side up?
                        </li>
                        <li>
                            Here's the <Link href="https://docs.google.com/drawings/d/1waAkCk9fu6NqLwB7KKeYEDurd2jT4CiXHdoVUr4F_Rs/copy" target="_blank">link to the template</Link>. 
                            Be sure to save to your graphic design folder.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}