import styles from "./Question.module.scss";
import Container from "../Container/Container";
import orig from "../../assets/orig.png";
import {getCorrectAnswer} from "../../utils/utils";
import React, {FC, useEffect, useState} from "react";
import {ICheckedQuestions, IQuestion} from "../../types/types";
import Answers from "./Answers/Answers";
import Hint from "./Hint/Hint";
import Help from "./Help/Help";
import star from "../../assets/starQuestion.png";
import starFill from "../../assets/starQuestionFill.png";
import {connect} from "react-redux";
import {addCheckedQuestion, addChosenQuestions, removeChosenQuestions} from "../../store/mainReducer";


interface QuestionNumbersProps {
    question: IQuestion;
    addCheckedQuestion?: (payload: ICheckedQuestions) => void;
    selectedAnswer: number | undefined;
    isResultPage?: boolean;
    isExam?: boolean;
    isChosenQuestion?: boolean;
    removeChosenQuestions: (questionId: string) => void;
    addChosenQuestions: (question: IQuestion) => void;
    isLastQuestion?: boolean;
    isScrollPage?: boolean;
    nextQuestion?: any;
    isCanExit?: boolean;
}


const Question:FC<QuestionNumbersProps> = ({question, addCheckedQuestion, selectedAnswer,
                                               isResultPage, isExam,
                                               isChosenQuestion, addChosenQuestions,
                                               removeChosenQuestions, isLastQuestion, isScrollPage, nextQuestion, isCanExit}) => {
    const [showHint, setShowHint] = useState(false);
    useEffect(() => {
        setShowHint(false);
    }, [question])
    if (Object.keys(question).length === 0) return null;
    const isSelectedCorrectAnswer = getCorrectAnswer(question) === selectedAnswer;


    return (
        <div className={styles.question}>
            {isChosenQuestion ? (
                <div className={styles.question__star} onClick={() => {
                    console.log('lol')
                    removeChosenQuestions(question.id)
                }}>
                    <img src={starFill} alt=""/>
                </div>
            ) : (
                <div className={styles.question__star} onClick={() => {
                    console.log('lol')
                    addChosenQuestions(question)
                }}>
                    <img src={star} alt=""/>
                </div>
            )}
            <Container >
                <h4 className={styles.question__title}>{question.title}</h4>
                <div className={styles.question__image}><img src={orig} alt=""/></div>

                <div className={styles.question__text}>
                    <h5>{question.question}</h5>
                </div>
                <Answers answers={question.answers}
                         addCheckedQuestion={addCheckedQuestion}
                         selectedAnswer={selectedAnswer}
                         isSelectedCorrectAnswer={isSelectedCorrectAnswer}
                         isExam={isExam}
                         questionId={question.id}
                         isResultPage={isResultPage}
                         correctAnswer={getCorrectAnswer(question)}
                />
                { !isExam && <Hint isResultPage={isResultPage} showHint={showHint} hint={question.answer_tip} rightAnswer={question.correct_answer} /> }
                <Help isResultPage={isResultPage}
                      showHint={showHint}
                      setShowHint={setShowHint}
                      isExam={isExam}
                      isLastQuestion={isLastQuestion}
                      selectedAnswer={selectedAnswer}
                      isScrollPage={isScrollPage}
                      nextQuestion={nextQuestion}
                      isCanExit={isCanExit}
                />
            </Container>
        </div>
    )
}
const mapStateToProps = () => ({

})

export default connect(mapStateToProps, { addCheckedQuestion, removeChosenQuestions, addChosenQuestions })(Question);