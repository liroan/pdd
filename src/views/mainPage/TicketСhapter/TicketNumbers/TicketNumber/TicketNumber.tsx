import {FC} from "react";
import styles from "../../TicketsСhapter.module.scss";

interface TicketNumberProps {
    index: number;
}

const TicketNumber:FC<TicketNumberProps> = ({ index }) => {
    return (
        <div className={styles.ticketChapter__ticketNumber}>
            <a href={"/ticket/" + index}>
                <button>
                    { index }
                </button>
            </a>
        </div>
    )
}

export default TicketNumber;