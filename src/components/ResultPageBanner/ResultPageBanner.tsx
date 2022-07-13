import styles from "./ResultPageBanner.module.scss";
import pddHunt from "../../assets/pddHunt.png";
import {FC} from "react";

interface ResultPageBannerProps {
    countQuestions: number;
    countErrorQuestions: number;
    time: string;
    nextTicket?: number;
    isTicket?: boolean;
}



const ResultPageBanner:FC<ResultPageBannerProps> = ({countQuestions, countErrorQuestions, time, nextTicket, isTicket}) => {
    return (
        <div className={styles.banner}>
            <div className={styles.resultPage__container}>
                <h1 className={styles.banner__title}>
                    {
                        isTicket
                            ? (countErrorQuestions > 2 ? "К сожалению, вы не прошли тестирование" : "Поздравляем, вы прошли тестирование")
                            : "Вы молодец, что прорешали задания!"
                    }
                </h1>
                <div className={styles.banner__mainContent}>
                    <div className={styles.banner__info}>
                        <h2 className={styles.banner__subtitle}>Правильных ответов {countQuestions - countErrorQuestions} из {countQuestions}</h2>
                        <h3 className={styles.banner__timing}>Время тестирования: {time}</h3>
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
                    {nextTicket && <div className={styles.banner__actions_right}><p>Следующий билет {nextTicket}</p></div>}
                </div>
            </div>
        </div>
    )
}

export default ResultPageBanner;