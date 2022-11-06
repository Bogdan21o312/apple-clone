import React from 'react';
import classes from "./NewsFooter.module.scss"
import Loader from "../@UI/Loader";
import {footerAPI} from "../../sevices/FooterService";

const Index = () => {
    const {data: text, isLoading} = footerAPI.useFetchAllNewsFooterQuery('')
    return (
        <div className={classes.FooterNews}>
            {isLoading
                ? <Loader size={'big'}/>
                :
                <div className={classes.FooterNewsContent}>
                    {text && text.map((paragraph, index) =>
                        <p key={index}>
                            {paragraph.text}
                        </p>
                    )}
                </div>
            }
        </div>
    );
};

export default Index;