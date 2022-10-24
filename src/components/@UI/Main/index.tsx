import React, {FC, ReactNode} from 'react';
import {ContainerBig} from "../Container";
import classes from "./Main.module.scss"

interface MainProps {
    children: ReactNode
}

const Index:FC<MainProps> = ({children}) => {
    return (
        <main className={classes.Page}>
            <ContainerBig>
                {children}
            </ContainerBig>
        </main>
    );
};

export default Index;