import styles from "./ResultPage.module.scss"
import {FC} from "react";
import pddHunt from "../../assets/pddHunt.png"
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {addCheckedQuestion} from "../../store/mainReducer";
import QuestionNumbers from "../../components/Ticket/QuestionNumbers/QuestionNumbers";
import Question from "../../components/Question/Question";

interface ResultPageProps {
    pddTickets: any;
    checkedQuestions: any;
}

const ResultPage:FC<ResultPageProps> = ({pddTickets, checkedQuestions}) => {
    const ticketNumber = Number(useParams().id || 1);
    const currentTicket = pddTickets[ticketNumber - 1];
    let errors = 0;
    const errorQuestions = currentTicket.map((question : any, index: any) => {
        console.log(checkedQuestions, currentTicket)
        if (question.answers[checkedQuestions[index]].is_correct)
            return {}
        errors++;
        return question;
    })
    return (
        <div className={styles.resultPage}>
            <h3 className={styles.resultPage__title}>Билет {ticketNumber}. Результаты тренировки</h3>
            <QuestionNumbers setActiveQuestionNumber={undefined}
                             checkedQuestions={checkedQuestions}
                             currentTicket={currentTicket}
            />
            <div className={styles.banner}>
                <div className={styles.resultPage__container}>
                    <h1 className={styles.banner__title}>К сожалению вы не прошли тестирование</h1>
                    <div className={styles.banner__mainContent}>
                        <div className={styles.banner__info}>
                            <h2 className={styles.banner__subtitle}>Правильных ответов {20 - errors} из 20</h2>
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
                    <h3 className={styles.errors__title}>Вы допустили {errors} ошибок</h3>
                    <div className={styles.errors__solve}><a href="/">Прорешать задачу</a></div>
                </div>
                {
                    errorQuestions.map((question: any, index: any) => {
                        return (
                            <Question question={question}
                                      addCheckedQuestion={addCheckedQuestion}
                                      activeQuestionNumber={index}
                                      selectedAnswer={checkedQuestions[index]}
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
})

export default connect(mapStateToProps)(ResultPage);