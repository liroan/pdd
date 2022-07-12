import ThematicPage from "../ThematicPage/ThematicPage";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";



const TopicPage = ({pddTopics}: any) => {
    const topic = useParams().topic;
    const questions = pddTopics.find((pddTopic: any) => pddTopic[0] === topic)
    console.log("lol")
    return <ThematicPage questions={questions[1]} title="Тематические билеты" subtitle={questions[0]}/>
}

const mapStateToProps = (state: any) => ({
    pddTopics: state.mainData.pddTopics,
})

export default connect(mapStateToProps)(TopicPage);