import React, {FC, useEffect} from 'react';
import classes from "./Navbar.module.scss"
import {Link} from "react-router-dom";
import {Search} from "../../../assets/images/config";
import {navbarAPI} from "../../../sevices/NavbarService";

interface NavbarProps {
    menuActive: any,
}

const Index: FC<NavbarProps> = ({menuActive}) => {
    const {data: navbar} = navbarAPI.useFetchAllTestQuery('')
    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [menuActive])
    return (
        <nav className={`${classes.menuBody} ${menuActive ? classes.menuOpen : ''}`}>
            <ul className={classes.menuList}>
                {navbar && navbar.map((link, index) =>
                    <li key={index} className={classes.menuItem}>
                        <Link to={link.path} className={classes.menuLink}>
                            {link.title}
                        </Link>
                    </li>
                )}
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