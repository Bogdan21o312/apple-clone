import React, {FC, ReactNode} from 'react';
import classes from "./FullScreen.module.scss"

interface FullScreenProps {
    children: ReactNode
}

const Index: FC<FullScreenProps> = ({children}) => {
    return (
        <div className={classes.FullScreen}>
            {children}
        </div>
    );
};

export default Index;