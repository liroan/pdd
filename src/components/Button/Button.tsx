import React, { CSSProperties } from "react";
import { FC } from "react";
import styles from "./Button.module.scss"
import {Link} from "react-router-dom";

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
}

const Button:FC<ButtonProps> = ({
    color,
    children,
    height,
    width,
    style,
    img,
    colorText,
    to,
    state,
}) => {
    return (
            <Link style={{backgroundColor: color, height, width, color: colorText, ...style}} className={styles.button} to={to || "/"} state={state}>
                {img && <img src={img} alt=""/>}
                {children}
            </Link>
    )
}

export default Button;