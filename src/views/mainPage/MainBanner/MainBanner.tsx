import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import styles from "./MainBanner.module.scss"
import lol from "../../../assets/lol.jpg"
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
                            Покажи, что ты можешь, и реши экзамен
                        </h3>
                        <div className={styles.banner__centering}>
                            <Button color="red" width={250}>Пройти экзамен</Button>
                        </div>
                    </div>
                    <div className={styles.banner__picture}>
                        <img src={lol} alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainBanner;