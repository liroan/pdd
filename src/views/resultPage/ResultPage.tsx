import styles from "./ResultPage.module.scss"
import {FC, useMemo} from "react";
import pddHunt from "../../assets/pddHunt.png"
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import QuestionNumbers from "../../components/Ticket/QuestionNumbers/QuestionNumbers";
import Question from "../../components/Question/Question";
import {IQuestion} from "../../types/types";
import { addErrorQuestions } from "../../store/mainReducer";

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
            <div className={styles.banner}>
                <div className={styles.resultPage__container}>
                    <h1 className={styles.banner__title}>К сожалению вы не прошли тестирование</h1>
                    <div className={styles.banner__mainContent}>
                        <div className={styles.banner__info}>
                            <h2 className={styles.banner__subtitle}>Правильных ответов {20 - errorQuestions.length} из 20</h2>
                            <h3 className={styles.banner__timing}>Время тестирования: 08:50</h3>
                        </div>
                        <div className={styles.banner__image}>
                            <img src={pddHunt} alt=""/>
                        </div>
                    </div>
                    <div className={styles.banner__actions}>
                        <div className={styles.banner__actions_left}>
                            <p>Пройти тестирование еще раз</p>
                            <p>Выбрать другой билет</p>
                        </div>
                        <div className={styles.banner__actions_right}><p>Следующий билет {ticketNumber + 1}</p></div>
                    </div>
                </div>
            </div>
            <div className={styles.errors}>
                <div className={styles.errors__info}>
                    <h3 className={styles.errors__title}>Вы допустили {errorQuestions.length} ошибок</h3>
                    <div className={styles.errors__solve}><a href="/">Прорешать задачу</a></div>
                </div>
                {
                    errorQuestions.map((question: IQuestion, index: any) => {
                        return (
                            <Question question={question}
                                      activeQuestionNumber={index}
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