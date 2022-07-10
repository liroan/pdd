import React from "react";
import {FC} from "react";
import styles from "../TicketsСhapter.module.scss";
import TicketNumber from "./TicketNumber/TicketNumber";
import {connect} from "react-redux";

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

const mapStateToProps = (state: any) => ({
    ticketsCount: state.mainData.pddTickets.length,
})

export default connect(mapStateToProps)(TicketNumbers);
