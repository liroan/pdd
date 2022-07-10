import styles from "./QuestionNumbers.module.scss";
import {getCorrectAnswer} from "../../../utils/utils";
import {IQuestion} from "../../../types/types";
import React, {FC} from "react";


interface QuestionNumbersProps {
    setActiveQuestionNumber?: React.Dispatch<React.SetStateAction<number>>;
    checkedQuestions: any;
    currentTicket: IQuestion[];
    activeQuestionNumber?: number;
}

const QuestionNumbers:FC<QuestionNumbersProps> = ({setActiveQuestionNumber, checkedQuestions, currentTicket, activeQuestionNumber = -1}) => {
    const questions = new Array(currentTicket.length).fill(0);
    return (
        <div className={styles.ticket__questions}>
            {
                questions.map((_, i) => {
                    console.log(checkedQuestions[i])
                    const isCorrectAnswer = checkedQuestions[i] === getCorrectAnswer(currentTicket[i]);
                    const color = typeof checkedQuestions[i] === "number" ? (isCorrectAnswer ? "green" : "red") : (activeQuestionNumber === i ? "#999" : "#fff");
                    return (
                        <div className={styles.ticket__questionNumber}>
                            <button onClick={setActiveQuestionNumber && (() => setActiveQuestionNumber(i))} style={{ background: color }}>
                                { i + 1 }
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuestionNumbers;