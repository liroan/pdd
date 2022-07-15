import styles from "../Question.module.scss";
import React, {FC} from "react";
import Button from "../../Button/Button";
import NavButton from "../../NavButton/NavButton";

interface HintProps {
    isResultPage?: boolean;
    showHint: boolean;
    setShowHint: React.Dispatch<React.SetStateAction<boolean>>;
    isExam?: boolean;
    selectedAnswer?: number;
    isScrollPage?: boolean;
    nextQuestion?: any;
    isCanExit?: boolean;
}

const Hint:FC<HintProps> = ({ isResultPage, showHint, setShowHint, isExam,
                                selectedAnswer, isScrollPage, nextQuestion, isCanExit}) => {
    if (isResultPage) return null;
    return (
        <div className={!isExam ? styles.question__actions_moreButtons : styles.question__actions_oneButton}>
            { !isExam && (
                <div className={styles.question__help}>
                    {
                        !showHint
                            ? <Button color="pink" width={250} onClick={() => setShowHint(true)}>Показать ответ</Button>
                            : <Button color="dodgerblue" width={250} onClick={() => setShowHint(false)}>Скрыть ответ</Button>
                    }
                </div>
            )}
            { !isScrollPage && (
                !isCanExit
                    ? <Button color={typeof selectedAnswer === "number" ? "black" : "gray" } width={250} onClick={nextQuestion}>Следующий вопрос</Button>
                    : <NavButton color="black" width={250}>Завершить</NavButton>
            )}
        </div>
    )
}

export default Hint;