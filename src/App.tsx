import React from 'react';
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import styles from "./App.module.scss";
import MainPage from "./views/mainPage/MainPage";

const App = () => {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.paddings}>
                    <MainPage />
                </div>
            </Container>
        </>
    )
}


export default App;
