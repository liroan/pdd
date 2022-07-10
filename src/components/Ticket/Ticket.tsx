import styles from "./Ticket.module.scss"
import {FC, useState} from "react";
import clock from "../../assets/clock.png"
import Question from "../Question/Question";
import QuestionNumbers from "./QuestionNumbers/QuestionNumbers";
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {addCheckedQuestion} from "../../store/mainReducer";
import {ICheckedQuestions, IQuestion} from "../../types/types";

interface TicketProps {
    pddTickets: Array<IQuestion[]>;
    addCheckedQuestion: (payload: ICheckedQuestions) => void;
    checkedQuestions: any;
}

const Ticket:FC<TicketProps> = ({pddTickets, addCheckedQuestion, checkedQuestions}) => {
    const ticketNumber = Number(useParams().id || 1);
    const [activeQuestionNumber, setActiveQuestionNumber] = useState(0);
    const currentTicket = pddTickets[ticketNumber - 1];
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
                    <Link to={`/ticket/${ticketNumber}/result`}>завершить досрочно</Link>
                </div>
            </div>
            <QuestionNumbers setActiveQuestionNumber={setActiveQuestionNumber}
                             checkedQuestions={checkedQuestions}
                             currentTicket={currentTicket}
                             activeQuestionNumber={activeQuestionNumber}
            />
            <Question question={currentTicket[activeQuestionNumber]}
                      addCheckedQuestion={addCheckedQuestion}
                      activeQuestionNumber={activeQuestionNumber}
                      selectedAnswer={checkedQuestions[activeQuestionNumber]}
            />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    pddTickets: state.mainData.pddTickets,
    checkedQuestions: state.mainData.checkedQuestions,
})

export default connect(mapStateToProps, { addCheckedQuestion })(Ticket);