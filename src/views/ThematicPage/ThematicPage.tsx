import { FixedSizeList } from "react-window";
import {connect} from "react-redux";
import {addCheckedQuestion} from "../../store/mainReducer";
import Question from "../../components/Question/Question";
import ThematicHeader from "../../components/ThematicHeader/ThematicHeader";
import Button from "../../components/Button/Button";
import styles from "./ThematicPage.module.scss"


const ThematicPage = ({allQuestions, checkedQuestions, addCheckedQuestion}: any) => {
    return (
        <div className={styles.thematicPage}>
            <ThematicHeader subtitle="Марафон" title="Здесь собраны все задания. Лучшая подготовка!"/>
            <FixedSizeList
                itemData={allQuestions}
                itemCount={allQuestions.length}
                itemSize={1020}
                height={800}
                width="100%"
            >
                {({data, index, style }) => {
                    return (
                        <div style={{...style, marginBottom: 20 }} >
                            <Question question={data[index]} selectedAnswer={checkedQuestions[data[index].id]} addCheckedQuestion={addCheckedQuestion} />
                        </div>
                    );
                }}
            </FixedSizeList>
            <div className={styles.thematicPage__send}>
                <Button color="dodgerblue">Завершить</Button>
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    allQuestions: state.mainData.allQuestions,
    checkedQuestions: state.mainData.checkedQuestions,
})

export default connect(mapStateToProps, {addCheckedQuestion})(ThematicPage);