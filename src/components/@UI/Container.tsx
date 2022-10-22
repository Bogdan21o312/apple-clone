import React, {FC, ReactNode} from 'react';
import classes from "../../assets/style/Style.module.scss"

interface ContainerProps {
    children: ReactNode
}

const ContainerBig: FC<ContainerProps> = ({children}) => {
    return (
        <div className={classes.ContainerBig}>
            {children}
        </div>
    );
};

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={classes.Container}>
            {children}
        </div>
    );
};



export{Container, ContainerBig};