import styles from "./Ticket.module.scss"
import {FC} from "react";
import clock from "../../assets/clock.png"
import orig from "../../assets/orig.png"
import Container from "../Container/Container";
interface TicketProps {
    ticketNumber: number;
}

const Ticket:FC<TicketProps> = ({ticketNumber}) => {
    const questions = new Array(25).fill(0);
    return (
        <div className={styles.ticket}>
            <h2 className={styles.ticket__title}>Тренировочный билет {ticketNumber}</h2>
            <h3 className={styles.ticket__subtitle}>Билет {ticketNumber} ПДД 2022 решать онлайн</h3>
            <div className={styles.ticket__info}>
                <div className={styles.ticket__time}>
                    <img src={clock} alt=""/>
                    11:29
                </div>
                <div className={styles.ticket__exit}>
                    <a href="/">завершить досрочно</a>
                </div>
            </div>
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
            <div className={styles.question}>
                <Container>
                    <h4 className={styles.question__title}>Вопрос 1</h4>
                    <div className={styles.question__image}><img src={orig} alt=""/></div>
                    <div className={styles.question__text}>
                        <h5>В каком случае водитель должен устепить дорогу?</h5>
                    </div>
                    <div className={styles.question__answers}>
                        <ol>
                            <li>При недостаточной видимости</li>
                            <li>При недостаточной видимости</li>
                            <li>При недостаточной видимости</li>
                            <li>При недостаточной видимости</li>
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
        </div>
    )
}

export default Ticket;