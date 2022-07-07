import React, { CSSProperties } from "react";
import { FC } from "react";
import styles from "./Button.module.scss"

interface IButton {
    label: string;
    img?: string;
    style?: CSSProperties;
    onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Button:FC<IButton> = ({label, img, style, onClick}) => {
    return (
        <button onClick={onClick} style={style} className={styles.button}>
            {img && <img src={img} alt=""/>}
            {label}
        </button>
    )
}

export default Button;