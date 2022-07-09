import styles from "./TicketsСhapter.module.scss"
import {FC} from "react";
import Button from "../../../components/Button/Button";
import TicketNumbers from "./TicketNumbers/TicketNumbers";

const TicketChapter:FC = () => {
    return (
        <div className={styles.ticketChapter}>
            <div className={styles.ticketChapter__exam}>
                <h4 className={styles.ticketChapter__category}>AB</h4>
                <div className={styles.ticketChapter__button_centralization}>
                    <Button color="#fff" colorText="dodgerblue" width="300px">Сдать экзамен</Button>
                </div>
            </div>
            <TicketNumbers ticketsCount={25} />
        </div>
    )
}
export default TicketChapter;