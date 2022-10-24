import React, {useState} from 'react';
import {Container} from "../Container";
import Navbar from "../Navbar";
import {Link} from "react-router-dom";
import classes from "./Header.module.scss"
import {Logo, Search, Suitcase} from "../../../assets/images/config";

const Index = () => {

    const [menuActive, setMenuActive] = useState(false)

    const [headerScroll, setHeaderScroll] = useState(false)

    const addHeaderScroll = () => {
        if (window.scrollY >= 25) {
            setHeaderScroll(true)
        } else {
            setHeaderScroll(false)
        }
    };

    window.addEventListener('scroll', addHeaderScroll);

    return (
        <header className={`${classes.header} ${headerScroll ? classes.headerScroll : ''}`}>
            <Container>
                <div className={classes.headerContent}>
                    <div className={classes.headerAction}>
                        <div
                            onClick={() => setMenuActive(!menuActive)}
                            className={`${classes.iconMenu} ${menuActive ? classes.menuOpen : ''}`}>
                        </div>
                    </div>
                    <div className={classes.headerMenu}>
                        <a className={classes.headerLogo}>
                            <Logo/>
                        </a>
                        <Navbar menuActive={menuActive}/>
                        <div className={classes.headerIcons}>
                            <Suitcase/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Index;