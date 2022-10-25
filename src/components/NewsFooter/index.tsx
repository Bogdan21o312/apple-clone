import React from 'react';
import classes from "./NewsFooter.module.scss"
import Loader from "../@UI/Loader";
import {FooterAPI} from "../../sevices/FooterService";

const Index = () => {
    const {data: text, isLoading} = FooterAPI.useFetchAllNewsFooterQuery('')
    return (
        <div className={classes.footerNews}>
            {isLoading
                ? <Loader size={'big'}/>
                :
                <div>
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