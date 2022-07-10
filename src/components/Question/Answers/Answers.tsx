import styles from "../Question.module.scss";
import React, {FC} from "react";
import {ICheckedQuestions, IQuestionsAnswers} from "../../../types/types";
import Answer from "./Answer/Answer";

interface AnswersProps {
    answers: IQuestionsAnswers[];
    addCheckedQuestion?: (payload: ICheckedQuestions) => void;
    activeQuestionNumber: number;
    selectedAnswer: number | undefined;
    isSelectedCorrectAnswer: boolean
}


const Answers:FC<AnswersProps> = ({ answers, addCheckedQuestion, activeQuestionNumber, selectedAnswer, isSelectedCorrectAnswer }) => {
    return (
        <div className={styles.question__answers}>
            <ol>
                {answers.map((answer: any, index: number) => (
                    <Answer addCheckedQuestion={addCheckedQuestion}
                            activeQuestionNumber={activeQuestionNumber}
                            selectedAnswer={selectedAnswer}
                            isSelectedCorrectAnswer={isSelectedCorrectAnswer}
                            currentAnswer={index}
                            text={answer["answer_text"]}
                    />)
                )}
            </ol>
        </div>
    )
}

export default Answers;