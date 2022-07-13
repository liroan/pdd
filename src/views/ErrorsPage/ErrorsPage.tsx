import ThematicPage from "../ThematicPage/ThematicPage";
import {connect} from "react-redux";
import {IQuestion} from "../../types/types";



const ErrorsPage = ({errorQuestions}: any) => {
    const errorQuestionsArray: IQuestion[] = Object.values(errorQuestions) || [];
    return <ThematicPage questions={errorQuestionsArray} title="Тематические билеты" subtitle="В этих билетах вы допустили ошибки. Исправьте это!"/>
}

const mapStateToProps = (state: any) => ({
    errorQuestions: state.mainData.errorQuestions,
})

export default connect(mapStateToProps)(ErrorsPage);