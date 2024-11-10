import Link from "next/link";

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Community Art</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/LMDytr9kNd6hrtnbmeIa" target="_blank">Community Art</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            In your own words what does &quot;Use, don&apos;t consume&quot; mean?
                        </li>
                        <li>
                            What was an example of a found object sculpture you can make at school?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}