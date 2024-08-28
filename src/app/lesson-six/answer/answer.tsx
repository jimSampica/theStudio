"use client";

import styles from "./answer.module.css";
import Image from "next/image";
import CirclePic from "/public/static/images/safety_circle.png";

interface AnswerProps {
  answer: Answer,
  selectedAnswerCallback: (answer: Answer) => void
}

export type Answer = "cupboard" | "faucet";

function AnswerInternal(answer: Answer, selectedAnswerCallback: (answer: Answer) => void, hidden: boolean) {
  const hiddenClass = hidden ? "visually-hidden" : "";

  let answerStyles: AnswerStyle = { width: "0px", height: "0px", top: "0px", left: "0px" };
  switch (answer) {

    case "cupboard":
      answerStyles = { width: "110px", height: "185px", top: "100px", left: "85px" };
      break;
    case "faucet":
      answerStyles = { width: "90px", height: "90px", top: "355px", left: "65px" };
      break;
    default:
      answer satisfies never;
  }

  function answerClicked(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    selectedAnswerCallback(answer);
    evt.stopPropagation();
  }

  return (
    <div className={styles["answer"]} style={answerStyles} onClick={answerClicked}>
      <Image key={answer} src={CirclePic} alt={answer} className={styles["answer-img"] + ` ${hiddenClass}`} />
    </div>
  );
}

type AnswerStyle = { width: PixelValue, height: PixelValue, top: PixelValue, left: PixelValue }
type PixelValue = `${number}px`

export function CircledAnswer({ answer, selectedAnswerCallback }: AnswerProps) {
  return AnswerInternal(answer, selectedAnswerCallback, false);
}

export function HiddenAnswer({ answer, selectedAnswerCallback }: AnswerProps) {
  return AnswerInternal(answer, selectedAnswerCallback, true);
}