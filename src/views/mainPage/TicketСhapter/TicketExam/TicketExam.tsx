import {FC} from "react";
import styles from "../TicketsСhapter.module.scss";
import NavButton from "../../../../components/NavButton/NavButton";

const TicketExam:FC = () => {
    return (
        <div className={styles.ticketChapter__exam}>
            <h4 className={styles.ticketChapter__category}>AB</h4>
            <div className={styles.ticketChapter__button_centralization}>
                <NavButton color="#fff" colorText="dodgerblue" width="300px">Сдать экзамен</NavButton>
            </div>
        </div>
    )
}
export default TicketExam;