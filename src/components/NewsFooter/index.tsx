import React from 'react';
import classes from "./NewsFooter.module.scss"
import {newsFooterAPI} from "../../sevices/NewsFooterService";
import Loader from "../@UI/Loader";

const Index = () => {
    const {data: paragraph, isLoading} = newsFooterAPI.useFetchAllNewsFooterQuery('')
    return (
        <div className={classes.footerNews}>
            {isLoading
                ? <Loader size={'big'}/>
                :
                <div>
                    {paragraph && paragraph.map((paragraph, index) =>
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