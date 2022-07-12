import {connect} from "react-redux";
import ThematicPage from "../ThematicPage/ThematicPage";


const MarathonPage = ({allQuestions}: any) => {
    return <ThematicPage questions={allQuestions} subtitle="Марафон" title="Здесь собраны все задания. Лучшая подготовка!" />
}

const mapStateToProps = (state: any) => ({
    allQuestions: state.mainData.allQuestions,
})

export default connect(mapStateToProps)(MarathonPage);
