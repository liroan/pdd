import React, { CSSProperties } from "react";
import { FC } from "react";
import styles from "./Button.module.scss"

interface ButtonProps {
    color?: string;
    colorText?: string;
    children?: React.ReactNode;
    height?: string | number;
    width?: string | number;
    img?: string;
    style?: CSSProperties;
    to?: string;
    state?: any;
    onClick?: any;
}

const Button:FC<ButtonProps> = ({
    color,
    children,
    height,
    width,
    style,
    img,
    colorText,
    onClick,
}) => {
    return (
            <button style={{backgroundColor: color, height, width, color: colorText, ...style}} onClick={onClick} className={styles.button} >
                {img && <img src={img} alt=""/>}
                {children}
            </button>
    )
}

export default Button;