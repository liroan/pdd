import styles from "../../Question.module.scss";
import React, {FC, useCallback} from "react";
import {ICheckedQuestions} from "../../../../types/types";

interface AnswerProps {
    addCheckedQuestion?: (payload: ICheckedQuestions) => void;
    selectedAnswer: number | undefined;
    isSelectedCorrectAnswer: boolean;
    currentAnswer: number;
    text: string;
    isExam?: boolean;
    questionId: string;
}

const Answer:FC<AnswerProps> = ({ addCheckedQuestion, selectedAnswer,
                                    currentAnswer, text, isSelectedCorrectAnswer, isExam, questionId }) => {
    const checkQuestions = useCallback(() => {
        if (!addCheckedQuestion) return;
        addCheckedQuestion({question: questionId, answer: currentAnswer})
    }, [currentAnswer, questionId])
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