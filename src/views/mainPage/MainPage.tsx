import styles from "./MainPage.module.scss";
import MainBanner from "./MainBanner/MainBanner";
import TicketChapter from "./TicketСhapter/TicketsСhapter";
import Button from "../../components/Button/Button";
import PddTopics from "./PddTopics/PddTopics";
import React, {FC} from "react";
import star from "../../assets/star.png";
import alertImg from "../../assets/alert.svg";
import clock from "../../assets/clockWhite.png";
import {connect} from "react-redux";
import {IPddTopics} from "../../types/types";

interface MainPageProps {
    pddTopics: IPddTopics[];
}

const MainPage:FC<MainPageProps> = ({ pddTopics }) => {
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
                <Button width="100%" color="purple" img={star}>Избранное</Button>
                <Button width="100%" color="red" img={alertImg}>Мои ошибки</Button>
            </div>
            <PddTopics pddTopics={pddTopics} />
            <div className={styles.mainPage__buttonsOperation}>
                <Button width="100%" color="dodgerblue" img={clock} to="/marathon">Пройти марафон</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    pddTopics: state.mainData.pddTopics,
})

export default connect(mapStateToProps)(MainPage);
