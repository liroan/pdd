import clock from "../../assets/clock.png";
import {Link} from "react-router-dom";
import styles from "./ThematicHeader.module.scss";
import {FC} from "react";

interface ThematicHeaderProps {
    title?: string;
    subtitle?: string;
}

const ThematicHeader:FC<ThematicHeaderProps> = ({title, subtitle}) => {
    return (
        <div className={styles.thematicHeader}>
            <h2 className={styles.thematicHeader__title}>{title}</h2>
            <h3 className={styles.thematicHeader__subtitle}>{subtitle}</h3>
            <div className={styles.thematicHeader__info}>
                <div className={styles.thematicHeader__time}>
                    <img src={clock} alt=""/>
                    11:29
                </div>
                <div className={styles.thematicHeader__exit}>
                    <Link to="/ticket/1/result">Выйти</Link>
                </div>
            </div>
        </div>
    )
}

export default ThematicHeader;