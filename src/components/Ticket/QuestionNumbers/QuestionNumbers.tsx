import styles from "./QuestionNumbers.module.scss";



// @ts-ignore
const QuestionNumbers = ({setActiveQuestionNumber, checkedQuestions, currentTicket}) => {
    const questions = new Array(currentTicket.length).fill(0);
    return (
        <div className={styles.ticket__questions}>
            {
                questions.map((_, i) => {
                    const isCorrectAnswer = checkedQuestions[i] === Number(currentTicket[i]["correct_answer"].split(": ")[1])
                    const color = checkedQuestions[i] ? (isCorrectAnswer ? "green" : "red") : "#fff";
                    return (
                        <div className={styles.ticket__questionNumber}>
                            <button onClick={() => setActiveQuestionNumber(i)} style={{ background: color }}>
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