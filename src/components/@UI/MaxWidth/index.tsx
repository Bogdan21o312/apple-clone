import React, {FC, ReactNode} from 'react';
import classes from "./MaxWidth.module.scss"

interface MaxWidthProps {
    children: ReactNode
}

const Index: FC<MaxWidthProps> = ({children}) => {
    return (
        <div className={classes.MaxWidth}>
            {children}
        </div>
    );
};

export default Index;