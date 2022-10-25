import React from 'react';
import classes from "./ColumnFooter.module.scss"
import Loader from "../@UI/Loader";
import {Link} from "react-router-dom";
import {FooterAPI} from "../../sevices/FooterService";

const Index = () => {
    const {data: columnTitle, isLoading} = FooterAPI.useFetchAllTitleQuery('')
    const {data: columnLink} = FooterAPI.useFetchAllLinkQuery('')
    return (
        <div className={classes.ColumnFooter}>
            {isLoading
                ? <Loader size={'medium'}/>
                :
                <div>
                    {columnTitle && columnTitle.map((column, index) =>
                        <div key={index}>
                            <h2>{column.title}</h2>
                        </div>
                    )}
                    {columnLink && columnLink.map((link, index) =>
                        <Link to={link.path} key={index}>
                            <p>{link.text}</p>
                        </Link>
                    )}
                </div>
            }
        </div>
    );
};

export default Index;