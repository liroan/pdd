import styles from "./PddTopics.module.scss"
import lol from "../../../assets/lol.jpg"
import Container from "../../../components/Container/Container";

const PddTopics = () => {
    return (
        <div className={styles.pddTopics}>
            <Container>
                <h2 className={styles.pddTopics__title}>Вопросы ПДД по темам</h2>
                <h3 className={styles.pddTopics__subtitle}>Тренировка
                    по темам - еще один удобный способ выучить ПДД. Ваша цель -
                    все темы должны стать
                    <span className={styles.pddTopics__subtitle_green}> зелеными</span>
                    !
                </h3>
                <div className={styles.pddTopics__items}>
                {
                    new Array(20).fill(0).map((_) => {
                        return (
                            <div className={styles.pddTopic}>
                                <div className={styles.pddTopic__image}>
                                    <img src={lol} alt=""/>
                                </div>
                                <div className={styles.pddTopic__text}>
                                    <p>Общие положения (25 вопросов)</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </Container>
        </div>
    )
}

export default PddTopics;