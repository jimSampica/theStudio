"use client";

import styles from "./selectedAnswer.module.css";
import Image from "next/image";
import CirclePic from "/public/static/images/safety_circle.png";
import { Answer } from "./answer";

interface AnswerProps {
  answer: Answer,
  answerClicked: (answer: Answer) => void
}

function AnswerInternal(answer: Answer, answerClickedCallback: (answer: Answer) => void, hidden: boolean) {
  const hiddenClass = hidden ? "visually-hidden" : "";

  let answerStyles: AnswerStyle = { width: "0px", height: "0px", top: "0px", left: "0px" };
  switch (answer) {

    case "cupboard":
      answerStyles = { width: "110px", height: "185px", top: "100px", left: "85px" };
      break;
    case "faucet":
      answerStyles = { width: "90px", height: "90px", top: "355px", left: "65px" };
      break;
    case "gluegun":
      answerStyles = { width: "65px", height: "65px", top: "445px", left: "-5px" };
      break;
    case "gluegun":
      answerStyles = { width: "65px", height: "65px", top: "445px", left: "-5px" };
      break;
    case "kiln":
      answerStyles = { width: "65px", height: "65px", top: "260px", left: "400px" };
      break;
    case "saw":
      answerStyles = { width: "65px", height: "65px", top: "260px", left: "400px" };
      break;
    case "tableSitting":
      answerStyles = { width: "65px", height: "65px", top: "260px", left: "400px" };
      break;
    case "spill":
      answerStyles = { width: "65px", height: "65px", top: "260px", left: "400px" };
      break;
    default:
      answer satisfies never;
  }

  function answerClicked(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    answerClickedCallback(answer);
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

export function CircledAnswer({ answer, answerClicked }: AnswerProps) {
  return AnswerInternal(answer, answerClicked, false);
}

export function HiddenAnswer({ answer, answerClicked }: AnswerProps) {
  return AnswerInternal(answer, answerClicked, true);
}