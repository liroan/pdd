import { FixedSizeList } from "react-window";
import {connect} from "react-redux";
import {addCheckedQuestion} from "../../store/mainReducer";
import Question from "../../components/Question/Question";
import ThematicHeader from "../../components/ThematicHeader/ThematicHeader";
import Button from "../../components/Button/Button";
import styles from "./ThematicPage.module.scss"
import {ICheckedQuestions, IQuestion} from "../../types/types";
import {FC} from "react";

interface ThematicPageProps {
    questions: IQuestion[];
    title?: string;
    subtitle?: string;
}

interface ThematicPageStateProps {
    checkedQuestions: any
    addCheckedQuestion: (payload: ICheckedQuestions) => void;
}

const ThematicPage:FC<ThematicPageProps & ThematicPageStateProps> = ({questions, checkedQuestions, addCheckedQuestion, title, subtitle}) => {
    return (
        <div className={styles.thematicPage}>
            <ThematicHeader subtitle={subtitle} title={title} />
            <FixedSizeList
                itemData={questions}
                itemCount={questions.length}
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
    checkedQuestions: state.mainData.checkedQuestions,
})

export default connect(mapStateToProps, {addCheckedQuestion})(ThematicPage);