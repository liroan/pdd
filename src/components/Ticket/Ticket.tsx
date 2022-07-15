import styles from "./Ticket.module.scss"
import {FC, useState} from "react";
import Question from "../Question/Question";
import QuestionNumbers from "./QuestionNumbers/QuestionNumbers";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {IQuestion} from "../../types/types";
import ThematicHeader from "../ThematicHeader/ThematicHeader";

interface TicketProps {
    pddTickets: Array<IQuestion[]>;
    checkedQuestions: any;
    isExam?: boolean;
    chosenQuestions: any;
}

const Ticket:FC<TicketProps> = ({pddTickets, checkedQuestions, isExam, chosenQuestions}) => {
    const ticketNumber = Number(useParams().id || 1);
    const [activeQuestionNumber, setActiveQuestionNumber] = useState(0);
    const currentTicket = pddTickets[ticketNumber - 1];
    const [isCanExit, seIsCanExit] = useState(false);
    const nextQuestion = () => {
        for (let i = activeQuestionNumber + 1; i < currentTicket.length; i++) {
            if (typeof checkedQuestions[currentTicket[i].id] !== "number") {
                setActiveQuestionNumber(i);
                return true;
            }
        }
        for (let i = 0; i < activeQuestionNumber; i++) {
            if (typeof checkedQuestions[currentTicket[i].id] !== "number") {
                setActiveQuestionNumber(i);
                return true;
            }
        }
        seIsCanExit(true);
        return false;
    }

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
                      selectedAnswer={checkedQuestions[currentTicket[activeQuestionNumber].id]}
                      isExam={isExam}
                      isChosenQuestion={!!chosenQuestions[currentTicket[activeQuestionNumber].id]}
                      isLastQuestion={activeQuestionNumber === 19}
                      nextQuestion={nextQuestion}
                      isCanExit={isCanExit}
            />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    pddTickets: state.mainData.pddTickets,
    checkedQuestions: state.mainData.checkedQuestions,
    chosenQuestions: state.mainData.chosenQuestions,
})

export default connect(mapStateToProps)(Ticket);