import ThematicPage from "../ThematicPage/ThematicPage";
import {connect} from "react-redux";
import {IQuestion} from "../../types/types";



const ChosenQuestionPage = ({chosenQuestions}: any) => {
    const chosenQuestionsArray: IQuestion[] = Object.values(chosenQuestions) || [];
    return <ThematicPage questions={chosenQuestionsArray} title="Тематические билеты" subtitle="Эти вопросы вы добавили в избранное. Насладитесь ими!"/>
}

const mapStateToProps = (state: any) => ({
    chosenQuestions: state.mainData.chosenQuestions,
})

export default connect(mapStateToProps)(ChosenQuestionPage);