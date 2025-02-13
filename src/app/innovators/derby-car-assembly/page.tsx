export default function Page() {
    return (
        <main className="container">
            <h2 className="mt-3 mb-2">Lesson: Derby Car Assembly</h2>
            <h4 className="mt-3">Instructions</h4>
            <p>Please watch <a href="https://app.screencastify.com/v3/watch/Fx6hMh8UW5AUpQEsv9vJ" target="_blank">Derby Car Assembly</a>
                &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
            <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
            <h4>Workbook</h4>
            <ol className="list-style-alpha">
                <li>Design a blueprint of your car. if unsure look up "blueprint" (be resourceful!)</li>
                <li>Please describe why it is important to have the wheels straight.( It is important to have the wheels straight because...)</li>
                <li>What can you customize on your derby car? (I can customize....)</li>
            </ol>
            <div className="ratio ratio-1x1">
                <embed
                    src="/static/files/derby_car_assembly.pdf"
                    type="application/pdf"
                    title="Derby Car Assembly"
                />
            </div>

        </main>
    );
}