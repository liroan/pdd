import styles from "./Ticket.module.scss"
import {FC} from "react";
import clock from "../../assets/clock.png"
import Question from "../Question/Question";
import QuestionNumbers from "./QuestionNumbers/QuestionNumbers";
interface TicketProps {
    ticketNumber: number;
}

const Ticket:FC<TicketProps> = ({ticketNumber}) => {
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
            <QuestionNumbers />
            <Question />
        </div>
    )
}

export default Ticket;