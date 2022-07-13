import ThematicPage from "../ThematicPage/ThematicPage";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";
import ResultPageBanner from "../../components/ResultPageBanner/ResultPageBanner";
import {useMemo} from "react";
import {IQuestion} from "../../types/types";
import {addErrorQuestions} from "../../store/mainReducer";



const ThematicResultPage = ({checkedQuestions, addErrorQuestions}: any) => {
    const location = useLocation();
    const { from }: any = location.state;
    let { questions } = from;
    if (questions.isArray) questions = Object.values(questions);
    const errorQuestions = useMemo(() => {
        const errorQuestions = questions.filter((question : IQuestion) => !(typeof checkedQuestions[question.id] === "number" && question.answers[checkedQuestions[question.id]].is_correct))
        addErrorQuestions(errorQuestions)
        return errorQuestions;
    }, [questions, checkedQuestions])
    return (
        <ThematicPage questions={errorQuestions} title="Тематические билеты" subtitle={"Результаты тренировки"}>
            <ResultPageBanner countErrorQuestions={errorQuestions.length} countQuestions={questions.length} time="06: 50"/>
        </ThematicPage>
    )
}

const mapStateToProps = (state: any) => ({
    checkedQuestions: state.mainData.checkedQuestions,
})

export default connect(mapStateToProps, {addErrorQuestions})(ThematicResultPage);