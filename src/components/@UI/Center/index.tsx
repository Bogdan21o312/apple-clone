import React, {FC, ReactNode} from 'react';
import classes from "./Center.module.scss"

interface CenterProps {
    children: ReactNode
}

const Index: FC<CenterProps> = ({children}) => {
    return (
        <div className={classes.Center}>
            {children}
        </div>
    );
};

export default Index;