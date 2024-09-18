export default function Page() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="mt-3 mb-2">Lesson 10: Hot Glue</h2>
                    <h4 className="mt-3">Instructions</h4>
                    <p>Please watch <a href="https://www.youtube.com/watch?v=YqQx75OPRa0" target="_blank">Drawing with Charcoal</a>
                        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
                    <h4 className="mt-3">Sketchbook</h4>
                    <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
                        <li>
                            Design a logo for a shoe company.
                        </li>
                        <li>
                            What 5 basic elements can graphic design be broken down into?
                        </li>
                        <li>
                            What is the rule of 3rds?
                        </li>
                    </ul>
                    <h4 className="mt-3">Studio time</h4>
                    <p>Work on infographic. <br />
                        Materials:  paper, pencil, markers and <a href="https://www.photopea.com/" target="_blank">Photopea</a>
                    </p>
                </div>
            </div>
        </main>
    );
}