export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson: Cleaning Part 2</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://watch.screencastify.com/v/mzaGk22vcLJdBGGhhWVJ" target="_blank">Cleaning ceramics 2</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Create a drawing out of three circles
                        </li>
                        <li>
                            How long does it take to clean the wheel?
                        </li>
                        <li>
                            What happens if you clean and not dry?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Material: Plasticine clay<br />Abstract emotions game</p>
                </div>
            </div>
        </main>
    );
}