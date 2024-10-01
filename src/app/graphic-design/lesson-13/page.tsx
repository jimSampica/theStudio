export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Puzzle part 1</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://app.screencastify.com/v3/watch/WwaNxUb5FExGrEwX4NXT" target="_blank">Puzzel part 1</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Please sketch out an initial plan before you draft it on paper in this section.
                        </li>
                        <li>
                            What size should your puzzle be?
                        </li>
                        <li>
                            What program are we using to build our digital design?
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}