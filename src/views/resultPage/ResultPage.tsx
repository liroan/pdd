import styles from "./ResultPage.module.scss"
import {FC} from "react";
import pddHunt from "../../assets/pddHunt.png"

interface ResultPageProps {
    ticketNumber: number;
}

const ResultPage:FC<ResultPageProps> = ({ticketNumber}) => {
    const questions = new Array(25).fill(0);
    return (
        <div className={styles.resultPage}>
            <h3 className={styles.resultPage__title}>Билет {ticketNumber}. Результаты тренировки</h3>
            <div className={styles.resultPage__questions}>
                {
                    questions.map((_, i) => {
                        return (
                            <div className={styles.resultPage__questionNumber}>
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
            <div className={styles.banner}>
                <div className={styles.resultPage__container}>
                    <h1 className={styles.banner__title}>К сожалению вы не прошли тестирование</h1>
                    <div className={styles.banner__mainContent}>
                        <div className={styles.banner__info}>
                            <h2 className={styles.banner__subtitle}>Правильных ответов 5 из 20</h2>
                            <h3 className={styles.banner__timing}>Время тестирования: 08:50</h3>
                        </div>
                        <div className={styles.banner__image}>
                            <img src={pddHunt} alt=""/>
                        </div>
                    </div>
                    <div className={styles.banner__actions}>
                        <div className={styles.banner__actions_left}>
                            <p>Пройти тестирование еще раз</p>
                            <p>Выбрать другой билет</p>
                        </div>
                        <div className={styles.banner__actions_right}><p>Следующий билет {ticketNumber + 1}</p></div>
                    </div>
                </div>
            </div>
            <div className={styles.errors}>
                <div className={styles.errors__info}>
                    <h3 className={styles.errors__title}>Вы допустили 13 ошибок</h3>
                    <div className={styles.errors__solve}><a href="/">Прорешать задачу</a></div>
                </div>

            </div>
        </div>
)
}

export default ResultPage;