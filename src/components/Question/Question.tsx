import styles from "./Question.module.scss";
import Container from "../Container/Container";
import orig from "../../assets/orig.png";
import {getCorrectAnswer} from "../../utils/utils";
import React, {FC, useState} from "react";
import {ICheckedQuestions, IQuestion} from "../../types/types";
import Answers from "./Answers/Answers";
import Hint from "./Hint/Hint";
import Help from "./Help/Help";

interface QuestionNumbersProps {
    question: IQuestion;
    addCheckedQuestion?: (payload: ICheckedQuestions) => void;
    selectedAnswer: number | undefined;
    isResultPage?: boolean;
    activeQuestionNumber: number;
    isExam?: boolean;
}


const Question:FC<QuestionNumbersProps> = ({question, addCheckedQuestion, activeQuestionNumber, selectedAnswer, isResultPage, isExam}) => {
    const [showHint, setShowHint] = useState(false);
    if (Object.keys(question).length === 0) return null;
    const isSelectedCorrectAnswer = getCorrectAnswer(question) === selectedAnswer;
    return (
        <div className={styles.question}>
            <Container>
                <h4 className={styles.question__title}>{question.title}</h4>
                <div className={styles.question__image}><img src={orig} alt=""/></div>
                <div className={styles.question__text}>
                    <h5>{question.question}</h5>
                </div>
                <Answers answers={question.answers}
                         addCheckedQuestion={addCheckedQuestion}
                         activeQuestionNumber={activeQuestionNumber}
                         selectedAnswer={selectedAnswer}
                         isSelectedCorrectAnswer={isSelectedCorrectAnswer}
                         isExam={isExam}
                         questionId={question.id}
                />
                { !isExam && <Hint isResultPage={isResultPage} showHint={showHint} /> }
                <Help isResultPage={isResultPage} showHint={showHint} setShowHint={setShowHint} isExam={isExam} />
            </Container>
        </div>
    )
}

export default Question;