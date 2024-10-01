export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Puzzle part 2</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/Ce6HIYAag01mgWB1WAkt" target="_blank">Puzzel part 2</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Draw a package design for your puzzle box
                        </li>
                        <li>
                            What type of file should you save your image as?
                        </li>
                        <li>
                            What do you need to do if the image moved and is no longer in the material area on the glowforge?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}