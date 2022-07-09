import styles from "./QuestionNumbers.module.scss";


const QuestionNumbers = () => {
    const questions = new Array(25).fill(0);
    return (
        <div className={styles.ticket__questions}>
            {
                questions.map((_, i) => {
                    return (
                        <div className={styles.ticket__questionNumber}>
                            <a href={"/ticket/" + i}>
                                <button>
                                    { i }
                                </button>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuestionNumbers;