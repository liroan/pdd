import styles from "../../Question.module.scss";
import React, {FC, useCallback} from "react";
import {ICheckedQuestions} from "../../../../types/types";

interface AnswerProps {
    addCheckedQuestion?: (payload: ICheckedQuestions) => void;
    activeQuestionNumber: number;
    selectedAnswer: number | undefined;
    isSelectedCorrectAnswer: boolean;
    currentAnswer: number;
    text: string;
    isExam?: boolean;
}

const Answer:FC<AnswerProps> = ({ addCheckedQuestion, selectedAnswer, activeQuestionNumber, currentAnswer, text, isSelectedCorrectAnswer, isExam }) => {
    const checkQuestions = useCallback(() => {
        if (!addCheckedQuestion) return;
        addCheckedQuestion({question: activeQuestionNumber, answer: currentAnswer})
    }, [activeQuestionNumber, currentAnswer])
    return (
        <li onClick={checkQuestions}
            className={typeof selectedAnswer === "number" ? styles.question__answers_disabled : ""}
        >
            {text} 
            {selectedAnswer === currentAnswer &&
                (
                    <span className={!isExam ? (isSelectedCorrectAnswer ? styles.question__answers_correct : styles.question__answers_incorrect) : styles.question__answers_black}>
                        (Ваш ответ)
                    </span>
                )
            }
        </li>
    )
}

export default Answer;