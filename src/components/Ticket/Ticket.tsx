import styles from "./Ticket.module.scss"
import {FC, useState} from "react";
import Question from "../Question/Question";
import QuestionNumbers from "./QuestionNumbers/QuestionNumbers";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {addCheckedQuestion} from "../../store/mainReducer";
import {ICheckedQuestions, IQuestion} from "../../types/types";
import ThematicHeader from "../ThematicHeader/ThematicHeader";

interface TicketProps {
    pddTickets: Array<IQuestion[]>;
    addCheckedQuestion: (payload: ICheckedQuestions) => void;
    checkedQuestions: any;
    isExam?: boolean;
}

const Ticket:FC<TicketProps> = ({pddTickets, addCheckedQuestion, checkedQuestions, isExam}) => {
    const ticketNumber = Number(useParams().id || 1);
    const [activeQuestionNumber, setActiveQuestionNumber] = useState(0);
    const currentTicket = pddTickets[ticketNumber - 1];
    return (
        <div className={styles.ticket}>
            <ThematicHeader title={`Тренировочный билет ${ticketNumber}`} subtitle={`Билет ${ticketNumber} ПДД 2022 решать онлайн`}/>
            <QuestionNumbers setActiveQuestionNumber={setActiveQuestionNumber}
                             checkedQuestions={checkedQuestions}
                             currentTicket={currentTicket}
                             activeQuestionNumber={activeQuestionNumber}
                             isExam={isExam}
            />
            <Question question={currentTicket[activeQuestionNumber]}
                      addCheckedQuestion={addCheckedQuestion}
                      selectedAnswer={checkedQuestions[currentTicket[activeQuestionNumber].id]}
                      isExam={isExam}
            />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    pddTickets: state.mainData.pddTickets,
    checkedQuestions: state.mainData.checkedQuestions,
})

export default connect(mapStateToProps, { addCheckedQuestion })(Ticket);