import {FC} from "react";
import styles from "../TicketsСhapter.module.scss";
import Button from "../../../../components/Button/Button";

const TicketExam:FC = () => {
    return (
        <div className={styles.ticketChapter__exam}>
            <h4 className={styles.ticketChapter__category}>AB</h4>
            <div className={styles.ticketChapter__button_centralization}>
                <Button color="#fff" colorText="dodgerblue" width="300px">Сдать экзамен</Button>
            </div>
        </div>
    )
}
export default TicketExam;