import styles from "../Question.module.scss";
import React, {FC} from "react";
import {ICheckedQuestions, IQuestionsAnswers} from "../../../types/types";
import Answer from "./Answer/Answer";

interface AnswersProps {
    answers: IQuestionsAnswers[];
    addCheckedQuestion?: (payload: ICheckedQuestions) => void;
    selectedAnswer: number | undefined;
    isSelectedCorrectAnswer: boolean;
    isExam?: boolean;
    questionId: string;
}


const Answers:FC<AnswersProps> = ({ answers, addCheckedQuestion,
                                      selectedAnswer, isSelectedCorrectAnswer, isExam, questionId }) => {
    return (
        <div className={styles.question__answers}>
            <ol>
                {answers.map((answer: any, index: number) => (
                    <Answer addCheckedQuestion={addCheckedQuestion}
                            selectedAnswer={selectedAnswer}
                            isSelectedCorrectAnswer={isSelectedCorrectAnswer}
                            currentAnswer={index}
                            text={answer["answer_text"]}
                            isExam={isExam}
                            questionId={questionId}
                    />)
                )}
            </ol>
        </div>
    )
}

export default Answers;