"use client";

import Link from "next/link";
import { SafetyWorksheet } from "./safetyWorksheet/safetyWorksheet";

export default function Page() {
  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson 6: Safety in the Classroom</h2>
      <h4 className="mt-3">Instructions</h4>
      <p>Please watch <a href="https://app.screencastify.com/v3/watch/S2HgFu094N7pxIpHnVU2" target="_blank">this video</a>
        &nbsp;in its entirety and answer the questions that follow in your sketchbook.</p>
      <h4 className="mt-3">Picture</h4>
      <ul>
        <li>
          On the picture of the classroom below, click the safety concerns or rule violations you see. Wrong answers will clear the sheet.
        </li>
      </ul>
      <h4 className="mt-3">Sketchbook</h4>
      <ul style={{ ["listStyleType" as string]: "lower-alpha" }}>
        <li>
          <Link target="_blank" href="/prompt-generator">Prompt generator</Link>
        </li>
        <li>
          Why should you avoid running or horseplay in the art room?
        </li>
        <li>
          How can you contribute to maintaining a positive and creative atmosphere in the art room?
        </li>
      </ul>
      <p>Let Mrs. Sam know when you complete this and she will discuss your next steps.</p>
      <h4>Studio Time</h4>
      <ul>
        <li>Open centers</li>
      </ul>
      <SafetyWorksheet />
    </main>
  );
}