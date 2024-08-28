"use client";

import styles from "./page.module.css";
import Image from "next/image";
import SafetyWorksheetPic from "/public/static/images/safety_quiz.png";
import Link from "next/link";
import { useState } from "react";
import { CircledAnswer, HiddenAnswer, Answer } from "./answer/answer";

export default function Page() {

  const allAnswers: Answer[] =
    [
      "cupboard",
      "faucet"
    ];

  let [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

  function worksheetAreaClicked(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("emptying");
    setSelectedAnswers([]);
  }

  function answerSelectedCallback(answer: Answer){
    if(!selectedAnswers.includes(answer))
      setSelectedAnswers(selectedAnswers.concat(answer));
  }

  return (
    <main className="container">
      <h2 className="mt-3 mb-2">Lesson Six: Safety in the Classroom</h2>
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
      <div onClick={worksheetAreaClicked} className={styles["safety-worksheet-area"]}>
        {
          allAnswers.map(ans => {
            if (!selectedAnswers.find(sa => sa == ans))
            {
              return <HiddenAnswer key={ans} answer={ans} selectedAnswerCallback={answerSelectedCallback} />
            }
            return <CircledAnswer key={ans} answer={ans} selectedAnswerCallback={answerSelectedCallback} />;
          })
        }
        <Image src={SafetyWorksheetPic} alt="Safety worksheet" className={styles["safety-worksheet"]} />
      </div>
    </main>
  );
}