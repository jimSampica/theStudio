"use client";

import styles from "./safetyWorksheet.module.css";
import Image from "next/image";
import SafetyQuizPic1 from "/public/static/images/safety_quiz_1.png";
import SafetyQuizPic2 from "/public/static/images/safety_quiz_2.png";
import { useState } from "react";
import type { Answer } from "./answer";
import { AllAnswers } from "./answer";
import { HiddenAnswer, CircledAnswer } from "./selectedAnswer";

export type QuizNumber = 1 | 2;

interface SafetyWorksheetProps {
    quizNumber: QuizNumber;
}

export function SafetyWorksheet({ quizNumber }: SafetyWorksheetProps) {
    let [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

    function worksheetAreaClicked() {
        setSelectedAnswers([]);
    }

    function answerClicked(answer: Answer) {
        if (!selectedAnswers.includes(answer))
            setSelectedAnswers(selectedAnswers.concat(answer));
    }

    const worksheetImage = quizNumber === 2 ? SafetyQuizPic2 : SafetyQuizPic1;

    return (
        <div>
            <h4 className="text-success">{selectedAnswers.length} / {AllAnswers.length}
            {selectedAnswers.length == AllAnswers.length ? "👍" : ""}</h4>
            <div onClick={worksheetAreaClicked} className={styles["safety-worksheet-area"]}>
                {
                    AllAnswers.map(ans => {
                        if (!selectedAnswers.find(sa => sa == ans)) {
                            return <HiddenAnswer key={ans} answer={ans} answerClicked={answerClicked} />
                        }
                        return <CircledAnswer key={ans} answer={ans} answerClicked={answerClicked} />;
                    })
                }
                <Image src={worksheetImage} alt="Safety worksheet" className={styles["safety-worksheet"]} />
            </div>
        </div>);
}