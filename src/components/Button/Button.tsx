import React, { CSSProperties } from "react";
import { FC } from "react";
import styles from "./Button.module.scss"

interface ButtonProps {
    color?: string;
    colorText?: string;
    children?: React.ReactNode;
    height?: string | number;
    onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
    width?: string | number;
    img?: string;
    style?: CSSProperties;
}

const Button:FC<ButtonProps> = ({
    color,
    children,
    height,
    onClick,
    width,
    style,
    img,
    colorText
}) => {
    return (
        <button onClick={onClick} style={{backgroundColor: color, height, width, color: colorText, ...style}} className={styles.button}>
            {img && <img src={img} alt=""/>}
            {children}
        </button>
    )
}

export default Button;