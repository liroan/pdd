import {FC} from "react";
import styles from "../../TicketsСhapter.module.scss";
import {Link} from "react-router-dom";

interface TicketNumberProps {
    index: number;
}

const TicketNumber:FC<TicketNumberProps> = ({ index }) => {
    return (
        <div className={styles.ticketChapter__ticketNumber}>
            <Link to={"/ticket/" + (index + 1)}>
                <button>
                    { index + 1 }
                </button>
            </Link>
        </div>
    )
}

export default TicketNumber;