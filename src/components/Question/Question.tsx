import styles from "./Question.module.scss";
import Container from "../Container/Container";
import orig from "../../assets/orig.png";



// @ts-ignore
const Question = ({question, addCheckedQuestion, activeQuestionNumber, isSelectedCorrectAnswer, selectedAnswer}) => {
    return (
        <div className={styles.question}>
            <Container>
                <h4 className={styles.question__title}>Вопрос 1</h4>
                <div className={styles.question__image}><img src={orig} alt=""/></div>
                <div className={styles.question__text}>
                    <h5>{question.question}</h5>
                </div>
                <div className={styles.question__answers}>
                    <ol>
                        {question.answers.map((answer: any, index: number) => <li onClick={() => {addCheckedQuestion({ question: activeQuestionNumber, answer: index + 1})}}>
                            {answer.answer_text}
                            {selectedAnswer - 1 === index && <span className={isSelectedCorrectAnswer ? styles.question__answers_correct : styles.question__answers_incorrect}> (Ваш ответ)</span>}
                        </li>)}
                    </ol>
                </div>
                <div className={styles.question__rightAnswers}>
                    <h6>Правильный ответ: 3</h6>
                    <p>
                        При недостаточной видимостиПри недостаточной видимостиПри недостаточной видимости При недостаточной видимостиПри недостаточной видимостиПри недостаточной видимости
                    </p>
                </div>
                <div className={styles.question__actions}>
                    <div className={styles.question__help}>
                        <p>Показать подсказку</p>
                        <p>-{"->"}</p>
                    </div>
                    <p>Пропустить</p>
                </div>
            </Container>
        </div>
    )
}

export default Question;