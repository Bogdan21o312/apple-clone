import React, {FC, ReactNode} from 'react';
import {Link} from "react-router-dom";
import classes from "./Text.module.scss"
import {Logo} from "../../../assets/images/config";

interface TextProps {
    children: ReactNode,
    to?: string | any,
    logo?: boolean,
    color?: string,
    size?: string
}

export const Text: FC<TextProps> = ({children, to, color, logo, size}) => {
    const Color = `${color === 'red' ? classes.Red : ''}${color === 'orange' ? classes.Orange : ''}${color === 'blue' ? classes.Blue : ''}`
    const LogoApple = `${logo === true ? classes.Logo : classes.Remove}`
    const Size = `${size === 'big' ? classes.Big : ''}${size === 'medium' ? classes.Medium : ''}${size === 'small' ? classes.Small : ''}`
    return (
        to
            ?
            <Link to={to} className={`${classes.Base}${Size}`}>
                <Logo className={`${LogoApple}`}/>
                <span className={`${Color}`}>{children}</span>
            </Link>
            :
            <div className={`${classes.Base} ${Size}`}>
                <Logo className={`${LogoApple}`}/>
                <span className={`${Color}`}>{children}</span>
            </div>
    )
}
