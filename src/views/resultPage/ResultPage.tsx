import styles from "./ResultPage.module.scss"
import {FC, useMemo} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import QuestionNumbers from "../../components/Ticket/QuestionNumbers/QuestionNumbers";
import Question from "../../components/Question/Question";
import {IQuestion} from "../../types/types";
import { addErrorQuestions } from "../../store/mainReducer";
import ResultPageBanner from "../../components/ResultPageBanner/ResultPageBanner";

interface ResultPageProps {
    pddTickets: Array<IQuestion[]>;
    checkedQuestions: any;
    addErrorQuestions: any;
}


const ResultPage:FC<ResultPageProps> = ({pddTickets, checkedQuestions, addErrorQuestions}) => {
    const ticketNumber = Number(useParams().id || 1);
    const currentTicket = pddTickets[ticketNumber - 1];
    const errorQuestions = useMemo(() => {
        const errorQuestions = currentTicket.filter((question : IQuestion) => !(typeof checkedQuestions[question.id] === "number" && question.answers[checkedQuestions[question.id]].is_correct))
        addErrorQuestions(errorQuestions)
        return errorQuestions;
    }, [currentTicket, checkedQuestions])
    return (
        <div className={styles.resultPage}>
            <h3 className={styles.resultPage__title}>Билет {ticketNumber}. Результаты тренировки</h3>
            <QuestionNumbers checkedQuestions={checkedQuestions} currentTicket={currentTicket} />
            <ResultPageBanner countErrorQuestions={errorQuestions.length} countQuestions={currentTicket.length} time="06: 50" nextTicket={ticketNumber + 1} isTicket/>
            <div className={styles.errors}>
                <div className={styles.errors__info}>
                    <h3 className={styles.errors__title}>Вы допустили {errorQuestions.length} ошибок</h3>
                    <div className={styles.errors__solve}><a href="/">Прорешать задачу</a></div>
                </div>
                {
                    errorQuestions.map((question: IQuestion) => {
                        return (
                            <Question question={question}
                                      selectedAnswer={checkedQuestions[question.id]}
                                      isResultPage
                            />
                        )
                    })
                }
            </div>
        </div>
)
}

const mapStateToProps = (state: any) => ({
    pddTickets: state.mainData.pddTickets,
    checkedQuestions: state.mainData.checkedQuestions,
    errorQuestions: state.mainData.errorQuestions,
})

export default connect(mapStateToProps, {addErrorQuestions})(ResultPage);