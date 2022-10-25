import React, {FC} from 'react';
import classes from "./Loader.module.scss"

interface LoaderProps {
    size: string,
}

const Index: FC<LoaderProps> = ({size}) => {
    const SizeLoader = `${size === 'big' ? classes.LoaderBig : ''}${size === 'medium' ? classes.LoaderMedium : ''}${size === 'small' ? classes.LoaderSmall : ''}`
    return (
        <div className={`${SizeLoader}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Index;