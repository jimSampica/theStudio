import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Sculpture</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p></p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
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