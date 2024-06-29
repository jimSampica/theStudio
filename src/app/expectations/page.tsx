export default function Page() {
    return (
      <main className="container">
        <h2 className="mt-3 mb-2">Lesson One:</h2>
        <h3>Great Expectations</h3>
        <h4 className="mt-3">Instructions</h4>
        <p>Please watch this video in its entirety and answer the questions that follow in your sketchbook.</p>
        <div className="ratio ratio-16x9">
          <iframe src="https://drive.google.com/file/d/1aXXCRSRSWySJFOOiHOjnqatNbhZepm7P/preview" className=""></iframe>
        </div>

        <h4 className="mt-3">Sketchbook (b and c are on the back of page 1)</h4>
        <ul style={{["listStyleType?" as string]: "lower-alpha"}}>
          <li>
            Please list the 3 main classroom rules from the video.
          </li>
          <li>
            In your own words, tell me why these rules are important to follow.
          </li>
          <li>
            In the box please follow the drawing template.
          </li>
        </ul>
        <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
      </main>
    );
  }