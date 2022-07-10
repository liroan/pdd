import styles from "../Question.module.scss";
import React, {FC} from "react";

interface HintProps {
    isResultPage: boolean;
    showHint: boolean;
    setShowHint: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hint:FC<HintProps> = ({ isResultPage, showHint, setShowHint }) => {
    if (isResultPage) return null;
    return (
        <div className={styles.question__actions}>
            <div className={styles.question__help}>
                {
                    !showHint
                        ? <p onClick={() => setShowHint(true)}>Показать подсказку</p>
                        : <p onClick={() => setShowHint(false)}>Убрать подсказку</p>
                }
                <p>-{"->"}</p>
            </div>
            <p>Пропустить</p>
        </div>
    )
}

export default Hint;