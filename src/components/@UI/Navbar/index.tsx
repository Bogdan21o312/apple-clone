import React, {FC, useEffect} from 'react';
import classes from "./Navbar.module.scss"
import {Link} from "react-router-dom";
import {Search} from "../../../assets/images/config";

interface NavbarProps {
    menuActive: any,
}

const Index: FC<NavbarProps> = ({menuActive}) => {
    React.useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [menuActive])
    return (
        <nav className={`${classes.menuBody} ${menuActive ? classes.menuOpen : ''}`}>
            <ul className={classes.menuList}>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink}>
                        text
                    </a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink}>
                        text
                    </a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink}>
                        text
                    </a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink}>
                        text
                    </a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink}>
                        text
                    </a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink}>
                        text
                    </a>
                </li>
                <li className={classes.menuItem}>
                    <a className={classes.menuLink}>
                        <Search/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Index;