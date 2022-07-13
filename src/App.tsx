import React, {FC, useEffect} from 'react';
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import styles from "./App.module.scss";
import MainPage from "./views/mainPage/MainPage";
import { connect } from 'react-redux';
import {getAllQuestions, addCheckedQuestion} from "./store/mainReducer";
import Ticket from "./components/Ticket/Ticket";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResultPage from "./views/resultPage/ResultPage";
import MarathonPage from "./views/MarathonPage/MarathonPage";
import TopicPage from "./views/TopicPage/TopicPage";
import ErrorsPage from "./views/ErrorsPage/ErrorsPage";
import ChosenQuestionPage from './views/ChosenQuestionPage/ChosenQuestionPage';

interface AppProps {
    getAllQuestions: () => void;
    appInitialized: boolean;
}

const App:FC<AppProps> = ({ getAllQuestions, appInitialized }) => {
    useEffect(() => {
        getAllQuestions()
    }, [])
    if (!appInitialized) {
        return <div>Loading...</div>
    }
    return (
        <>
            <Header />
            <Container>
                <div className={styles.paddings}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/ticket/:id" element={<Ticket />}/>
                            <Route path="/exam/:id" element={<Ticket isExam />}/>
                            <Route path="/ticket/:id/result" element={<ResultPage />}/>
                            <Route path="/marathon" element={<MarathonPage />}/>
                            <Route path="/:topic" element={<TopicPage />}/>
                            <Route path="/errors" element={<ErrorsPage />}/>
                            <Route path="/chosen" element={<ChosenQuestionPage />}/>
                            <Route path="/" element={<MainPage />}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </Container>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    appInitialized: state.mainData.appInitialized,
})

export default connect(mapStateToProps, { getAllQuestions, addCheckedQuestion })(App);
