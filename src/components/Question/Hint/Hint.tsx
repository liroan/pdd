import styles from "../Question.module.scss";
import React, {FC} from "react";

interface HintProps {
    isResultPage?: boolean;
    showHint: boolean;
    hint: string;
    rightAnswer: string;
}

const Hint:FC<HintProps> = ({ isResultPage, showHint , hint, rightAnswer}) => {
    if (!(isResultPage || showHint)) return null;
    return (
        <div className={styles.question__rightAnswers}>
            <h6>{rightAnswer}</h6>
            <p>{hint}</p>
        </div>
    )
}

export default Hint;