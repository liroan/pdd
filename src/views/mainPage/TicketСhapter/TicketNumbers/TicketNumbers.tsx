import React from "react";
import {FC} from "react";
import styles from "../TicketsСhapter.module.scss";
import TicketNumber from "./TicketNumber/TicketNumber";

interface TicketNumbersProps {
    ticketsCount: number;
}

const TicketNumbers:FC<TicketNumbersProps> = React.memo(({ ticketsCount }) => {
    const ticketsNumbers = (new Array(ticketsCount)).fill(0);
    return (
        <div className={styles.ticketChapter__tickets}>
            { ticketsNumbers.map((_, i) => <TicketNumber index={i} />) }
        </div>
    )
})

export default TicketNumbers;