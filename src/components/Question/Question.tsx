import styles from "./Question.module.scss";
import Container from "../Container/Container";
import orig from "../../assets/orig.png";
import {getCorrectAnswer} from "../../utils/utils";
import {useState} from "react";



// @ts-ignore
const Question = ({question, addCheckedQuestion, activeQuestionNumber, selectedAnswer, isResultPage = false }) => {
    const [showHint, setShowHint] = useState(false);
    if (Object.keys(question).length === 0)
        return null;
    const isSelectedCorrectAnswer = getCorrectAnswer(question) === selectedAnswer;
    return (
        <div className={styles.question}>
            <Container>
                <h4 className={styles.question__title}>Вопрос {activeQuestionNumber + 1}</h4>
                <div className={styles.question__image}><img src={orig} alt=""/></div>
                <div className={styles.question__text}>
                    <h5>{question.question}</h5>
                </div>
                <div className={styles.question__answers}>
                    <ol>
                        {question.answers.map((answer: any, index: number) => <li onClick={() => {addCheckedQuestion({ question: activeQuestionNumber, answer: index})}}
                                                                                  className={typeof selectedAnswer === "number" ? styles.question__answers_disabled : ""}
                        >
                            {answer.answer_text}
                            {selectedAnswer === index && <span className={isSelectedCorrectAnswer ? styles.question__answers_correct : styles.question__answers_incorrect}> (Ваш ответ)</span>}
                        </li>)}
                    </ol>
                </div>
                {
                    (isResultPage || showHint) &&
                    (
                        <div className={styles.question__rightAnswers}>
                            <h6>Правильный ответ: 3</h6>
                            <p>При недостаточной видимостиПри недостаточной видимостиПри недостаточной видимости При недостаточной видимостиПри недостаточной видимостиПри недостаточной видимости</p>
                        </div>
                    )
                }
                {
                    !isResultPage &&
                    (
                        <div className={styles.question__actions}>
                            <div className={styles.question__help}>
                                {
                                    !showHint ?
                                        <p onClick={() => setShowHint(true)}>Показать подсказку</p> :
                                        <p onClick={() => setShowHint(false)}>Убрать подсказку</p>
                                }
                                <p>-{"->"}</p>
                            </div>
                            <p>Пропустить</p>
                        </div>
                    )
                }
            </Container>
        </div>
    )
}

export default Question;