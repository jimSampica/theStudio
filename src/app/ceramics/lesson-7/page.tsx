import Link from "next/link"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson Seven: Cleaning Part 1</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/lkGA37Uf3LSEfS5vvODe" target="_blank">Cleaning Ceramics</a>
                        &nbsp;and&nbsp;<a href="https://www.youtube.com/watch?v=pwQU63kHcJg" target="_blank">Essential Tips for Preventing Clay Dust and Silicosis</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Why is cleaning so important in ceramics?
                        </li>
                        <li>
                            Where do we store our projects?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Open centers / art show</p>
                </div>
            </div>
        </main>
    );
}