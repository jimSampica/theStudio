"use client";

import styles from "./safetyWorksheet.module.css";
import Image from "next/image";
import SafetyWorksheetPic from "/public/static/images/safety_quiz.png";
import { useState } from "react";
import { Answer, AllAnswers } from "./answer";
import { HiddenAnswer, CircledAnswer } from "./selectedAnswer";

export function SafetyWorksheet() {
    let [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

    function worksheetAreaClicked() {
        setSelectedAnswers([]);
    }

    function answerClicked(answer: Answer) {
        if (!selectedAnswers.includes(answer))
            setSelectedAnswers(selectedAnswers.concat(answer));
    }

    return (
        <div>
            {selectedAnswers.length} / {AllAnswers.length}
            {selectedAnswers.length == AllAnswers.length ? "👍" : ""}
            <div onClick={worksheetAreaClicked} className={styles["safety-worksheet-area"]}>
                {
                    AllAnswers.map(ans => {
                        if (!selectedAnswers.find(sa => sa == ans)) {
                            return <CircledAnswer key={ans} answer={ans} answerClicked={answerClicked} />
                        }
                        return <CircledAnswer key={ans} answer={ans} answerClicked={answerClicked} />;
                    })
                }
                <Image src={SafetyWorksheetPic} alt="Safety worksheet" className={styles["safety-worksheet"]} />
            </div>
        </div>);
}