import styles from "./MainPage.module.scss";
import MainBanner from "./MainBanner/MainBanner";
import TicketChapter from "./TicketСhapter/TicketsСhapter";
import PddTopics from "./PddTopics/PddTopics";
import React, {FC} from "react";
import star from "../../assets/star.png";
import alertImg from "../../assets/alert.svg";
import clock from "../../assets/clockWhite.png";
import {connect} from "react-redux";
import {IPddTopics} from "../../types/types";
import NavButton from "../../components/NavButton/NavButton";

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
                <NavButton width="100%" color="purple" img={star} to="/chosen">Избранное</NavButton>
                <NavButton width="100%" color="red" img={alertImg} to="/errors">Мои ошибки</NavButton>
            </div>
            <PddTopics pddTopics={pddTopics} />
            <div className={styles.mainPage__buttonsOperation}>
                <NavButton width="100%" color="dodgerblue" img={clock} to="/marathon">Пройти марафон</NavButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    pddTopics: state.mainData.pddTopics,
})

export default connect(mapStateToProps)(MainPage);
