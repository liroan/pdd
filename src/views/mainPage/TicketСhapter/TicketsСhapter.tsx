import styles from "./TicketsСhapter.module.scss"
import {FC} from "react";
import Button from "../../../components/Button/Button";
import TicketNumbers from "./TicketNumbers/TicketNumbers";
import {getRandomArbitrary} from "../../../utils/utils";

const TicketChapter:FC = () => {
    return (
        <div className={styles.ticketChapter}>
            <div className={styles.ticketChapter__info}>
                <h2 className={styles.ticketChapter__title}>Билеты ПДД (категория А и В)</h2>
                <div className={styles.ticketChapter__ref}><a href="/">Сменить категорию на СD</a></div>
            </div>
            <div className={styles.ticketChapter__separation}>
                <div className={styles.ticketChapter__exam}>
                    <h4 className={styles.ticketChapter__category}>AB</h4>
                    <div className={styles.ticketChapter__button_centralization}>
                        <Button color="#fff" colorText="dodgerblue" width="300px" to={"/exam/" + getRandomArbitrary(1, 41)}>Сдать экзамен</Button>
                    </div>
                </div>
                <TicketNumbers />
            </div>
        </div>
    )
}
export default TicketChapter;