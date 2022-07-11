import styles from "./QuestionNumbers.module.scss";
import {getCorrectAnswer} from "../../../utils/utils";
import {IQuestion} from "../../../types/types";
import React, {FC} from "react";


interface QuestionNumbersProps {
    setActiveQuestionNumber?: React.Dispatch<React.SetStateAction<number>>;
    checkedQuestions: any;
    currentTicket: IQuestion[];
    isExam?: boolean;
    activeQuestionNumber?: number;
}

const QuestionNumbers:FC<QuestionNumbersProps> = ({setActiveQuestionNumber, checkedQuestions, currentTicket, activeQuestionNumber, isExam}) => {
    return (
        <div className={styles.ticket__questions}>
            {
                currentTicket.map((question, i) => {
                    const isCorrectAnswer = checkedQuestions[question.id] === getCorrectAnswer(currentTicket[i]);
                    const color = (typeof checkedQuestions[question.id] === "number" && !isExam) ? (isCorrectAnswer ? "green" : "red") : (activeQuestionNumber === i ? "#999" : (typeof checkedQuestions[question.id] === "number" ? "#ccc" : "#fff"));
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