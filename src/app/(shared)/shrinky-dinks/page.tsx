export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Shrinky Dinks</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://app.screencastify.com/v3/watch/Q0mDPQnmcolOWSF7srIa" target="_blank">Shrinky Dinks</a>
                &nbsp;in its entirety and answer the questions that follow in your workbook.</p>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="ratio ratio-16x9">
                        <iframe src="https://drive.google.com/file/d/1-hfn6fGfdAH6Gmy0D0npu6s9bIkMRaXo/preview" title="Shrinky Dinks"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
            <h4 className="mt-3">Sketchbook</h4>
            <ul className="list-style-alpha">
                <li>
                    Grab a Shrinky Dink release form to get started.
                </li>
                <li>
                    Answer the questions on the form.
                </li>
                <li>
                    You get one film per class upto 10 times. This will need to be done in order to use these supplies. Failure to complete will result in removal of items and a warning. Everyone needs to do this release at least 1 time. While supplies last.
                </li>
            </ul>
        </main>
    );
}