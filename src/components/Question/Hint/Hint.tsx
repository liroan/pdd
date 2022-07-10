import styles from "../Question.module.scss";
import React, {FC} from "react";

interface HintProps {
    isResultPage?: boolean;
    showHint: boolean;
}

const Hint:FC<HintProps> = ({ isResultPage, showHint }) => {
    if (!(isResultPage || showHint)) return null;
    return (
        <div className={styles.question__rightAnswers}>
            <h6>Правильный ответ: 3</h6>
            <p>При недостаточной видимостиПри недостаточной видимостиПри недостаточной видимости При недостаточной видимостиПри недостаточной видимостиПри недостаточной видимости</p>
        </div>
    )
}

export default Hint;