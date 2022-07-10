import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import styles from "./MainBanner.module.scss"
import pddHunt2 from "../../../assets/pddHunt2.png"
import { Link } from "react-router-dom";
import {getRandomArbitrary} from "../../../utils/utils";
const MainBanner = () => {
    return (
        <div className={styles.banner}>
            <Container>
                <div className={styles.banner__content}>
                    <div className={styles.banner__info}>
                        <h1 className={styles.banner__title}>
                            Думаешь что уже готов?
                        </h1>
                        <h3 className={styles.banner__explanation}>
                            Покажи, что ты можешь, и реши экзамен без единой ошибки
                        </h3>
                        <div className={styles.banner__centering}>
                            <Link to={"/exam/" + getRandomArbitrary(1, 41)}><Button color="red" width={250}>Пройти экзамен</Button></Link>
                        </div>
                    </div>
                    <div className={styles.banner__picture}>
                        <img src={pddHunt2} alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainBanner;