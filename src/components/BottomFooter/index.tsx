import React from 'react';
import {FooterAPI} from "../../sevices/FooterService";
import classes from "./FooterBottom.module.scss";
import Loader from "../@UI/Loader";
import Line from "../@UI/Line";

const Index = () => {
    const {data: main, isLoading} = FooterAPI.useFetchAllBottomFooterQuery('')
    const {data: page} = FooterAPI.useFetchAllPagesFooterQuery('')
    const {data: country} = FooterAPI.useFetchAllCountryFooterQuery('')
    return (
        <div className={classes.BottomFooter}>
            {isLoading
                ? <Loader size={'medium'}/>
                :
                <div className={classes.BottomFooterContent}>
                    {main && main.map((text, index) =>
                        <div className={classes.BottomFooterContentMain} key={index}>
                            <div>{text.upstairs}</div>
                            <Line/>
                        </div>
                    )}
                    <div className={classes.BottomFooterContentLower}>
                        {main && main.map((text, index) =>
                            <div key={index}>
                                <div>{text.first}</div>
                            </div>
                        )}
                        {page && page.map((name, index) =>
                            <div key={index} className={classes.BottomFooterContentPage}>
                                <div>{name.title}</div>
                                <span></span>
                            </div>
                        )}
                        {country && country.map((country, index) =>
                            <div key={index}>
                                <div className={classes.BottomFooterContentCountry}>{country.name}</div>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
};

export default Index;