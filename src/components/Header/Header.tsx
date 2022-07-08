import Container from "../Container/Container";
import { FC } from "react";
import styles from "./Header.module.scss"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <h3 className={styles.header__title}>HeavyTeam</h3>
            </Container>
        </header>
    )
}

export default Header;