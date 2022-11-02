import React from 'react';
import classes from "./ColumnFooter.module.scss"
import Loader from "../@UI/Loader";
import {Link} from "react-router-dom";
import {footerAPI} from "../../sevices/FooterService";

const Index = () => {
    const {data: columnTitle, isLoading} = footerAPI.useFetchAllTitleQuery('')
    const {data: columnLink} = footerAPI.useFetchAllLinkQuery('')
    return (
        <div className={classes.ColumnFooter}>
            {isLoading
                ? <Loader size={'medium'}/>
                :
                <div className={classes.ColumnFooterContent}>
                    {columnTitle && columnTitle.map((column, index) =>
                        <div className={classes.ColumnFooterContentTitle} key={index}>
                            <h2>{column.title}</h2>
                        </div>
                    )}
                    {columnLink && columnLink.map((link, index) =>
                        <Link className={classes.ColumnFooterContentItem} to={link.path} key={index}>
                            <div className={classes.ColumnFooterContentLink}>{link.text}</div>
                        </Link>
                    )}
                </div>
            }
        </div>
    );
};

export default Index;