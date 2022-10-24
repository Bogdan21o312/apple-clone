import React, {FC} from 'react';
import classes from "./Loader.module.scss"
import Wrapper from "../Wrapper";

interface LoaderProps {
    size: string,
}

const Index: FC<LoaderProps> = ({size}) => {
    const SizeLoader = `${size === 'big' ? classes.LoaderBig : ''}${size === 'medium' ? classes.LoaderMedium : ''}${size === 'small' ? classes.LoaderSmall : ''}`
    return (
        <Wrapper>
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
        </Wrapper>
    );
};

export default Index;