import Link from "next/link"

export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Cleaning</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/wDB7de5ydtleyDQ52Rt4" target="_blank">Cleaning Paint</a>
                        &nbsp;and&nbsp;<a href="https://app.screencastify.com/v3/watch/Posl4Xewf1JtVEFMdONO" target="_blank">Cleaning Collage</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul className="list-style-alpha">
                        <li>
                            Please use the&nbsp;
                            <Link href="/prompt-generator">random prompt generator</Link>
                        </li>
                        <li>
                            Where does your work go when you are done with it when it&apos;s wet?
                        </li>
                        <li>
                            Where does the paint palette go when it&apos;s wet?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Open centers / art show</p>
                </div>
            </div>
        </main>
    );
}