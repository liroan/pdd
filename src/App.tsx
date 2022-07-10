import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import styles from "./App.module.scss";
import MainPage from "./views/mainPage/MainPage";
import { connect } from 'react-redux';
import {getAllQuestions, addCheckedQuestion} from "./store/mainReducer";
import Ticket from "./components/Ticket/Ticket";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResultPage from "./views/resultPage/ResultPage";

// @ts-ignore
const App = ({ getAllQuestions, appInitialized }) => {
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
                            <Route path="/ticket/:id/result" element={<ResultPage />}/>
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
