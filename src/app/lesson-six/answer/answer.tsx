"use client";

import styles from "./answer.module.css";
import Image from "next/image";
import CirclePic from "/public/static/images/safety_circle.png";

interface AnswerProps {
  answer: Answer
}

export type Answer = "cupboard" | "faucet";

function AnswerInternal(answer : Answer, hidden : boolean){
  styles["circled-answer"]

  const hiddenClass = hidden ? "visually-hidden" : "";

  return (
    <div className={styles["answer"] + " " +  styles[answer]}>
      <Image key={answer} src={CirclePic} alt={answer} className={styles["answer-img"] + " " + hiddenClass} />
    </div>
  );
}

export function CircledAnswer({ answer } : AnswerProps) {
  return AnswerInternal(answer, false);
}

export function HiddenAnswer({ answer } : AnswerProps) {
  return AnswerInternal(answer, true);
}