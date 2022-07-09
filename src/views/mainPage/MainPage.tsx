import styles from "./MainPage.module.scss";
import MainBanner from "./MainBanner/MainBanner";
import TicketChapter from "./TicketСhapter/TicketsСhapter";
import Button from "../../components/Button/Button";
import PddTopics from "./PddTopics/PddTopics";
import React from "react";
import star from "../../assets/star.png";
import alertImg from "../../assets/alert.svg";
import clock from "../../assets/clockWhite.png";
const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <h1 className={styles.mainPage__title}>
                ПДД 2022: Правила дорожного движения онлайн экзамен и билеты как в ГИБДД, ГАИ РФ
            </h1>
            <div className={styles.mainPage__banner}>
                <MainBanner />
            </div>
            <TicketChapter />
            <div className={styles.mainPage__buttonsOperation}>
                <Button width="49%" color="purple" img={star}>Избранное</Button>
                <Button width="49%" color="red" img={alertImg}>Мои ошибки</Button>
            </div>
            <PddTopics />
            <div className={styles.mainPage__buttonsOperation}>
                <Button width="100%" color="dodgerblue" img={clock}>Пройти марафон</Button>
            </div>
        </div>
    )
}

export default MainPage;