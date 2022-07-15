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
    isResultPage?: boolean;
    correctAnswer: number;
}

const Answer:FC<AnswerProps> = ({ addCheckedQuestion, selectedAnswer,
                                    currentAnswer, text, isSelectedCorrectAnswer, isExam,
                                    questionId, isResultPage, correctAnswer }) => {
    const checkQuestions = useCallback(() => {
        if (!addCheckedQuestion) return;
        addCheckedQuestion({question: questionId, answer: currentAnswer})
    }, [currentAnswer, questionId])
    const isShowAnswer = !isExam ? (isSelectedCorrectAnswer ? styles.question__answers_correct : styles.question__answers_incorrect) : styles.question__answers_black;
    return (
        <li onClick={checkQuestions}
            className={(selectedAnswer === currentAnswer ? isShowAnswer : (correctAnswer === currentAnswer &&( selectedAnswer !== undefined || isResultPage) ? styles.question__answers_correct : "")) + ` ${(typeof selectedAnswer === "number" || isResultPage) ? styles.question__answers_disabled : ""}`}
        >
            {text} 
            {selectedAnswer === currentAnswer &&
                (
                    <span>
                        &nbsp;(Ваш ответ)
                    </span>
                )
            }
        </li>
    )
}

export default Answer;