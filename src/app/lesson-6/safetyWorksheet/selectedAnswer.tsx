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
      answerStyles = { width: "45px", height: "45px", top: "345px", left: "500px" };
      break;
    case "tableSitting":
      answerStyles = { width: "95px", height: "95px", top: "300px", left: "820px" };
      break;
    case "spill":
      answerStyles = { width: "90px", height: "90px", top: "450px", left: "320px" };
      break;
    case "scissors":
      answerStyles = { width: "90px", height: "90px", top: "580px", left: "460px" };
      break;
    case "cutting":
      answerStyles = { width: "110px", height: "110px", top: "510px", left: "780px" };
      break;
    case "flipflop":
      answerStyles = { width: "230px", height: "230px", top: "1210px", left: "930px" };
      break;
    case "bookbag":
      answerStyles = { width: "180px", height: "180px", top: "1010px", left: "890px" };
      break;
    case "knife":
      answerStyles = { width: "70px", height: "90px", top: "735px", left: "530px" };
      break;
    case "drink":
      answerStyles = { width: "75px", height: "95px", top: "580px", left: "345px" };
      break;
    case "cup":
      answerStyles = { width: "75px", height: "45px", top: "540px", left: "335px" };
      break;
    case "candybar":
      answerStyles = { width: "90px", height: "55px", top: "720px", left: "955px" };
      break;
    case "laptop":
      answerStyles = { width: "175px", height: "150px", top: "850px", left: "175px" };
      break;
    case "bottle":
      answerStyles = { width: "90px", height: "140px", top: "1075px", left: "190px" };
      break;
    case "cord":
      answerStyles = { width: "140px", height: "60px", top: "710px", left: "110px" };
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