import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Sculpture</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/Jc51yb7y1AQiw1Uf8jrS" target="_blank">Sculpture</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Using a variety of different techniques in sculpture is common. What technique did I use for the nose of the rocket?
                        </li>
                        <li>
                            Why did I score across the joints on my sculpture?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}