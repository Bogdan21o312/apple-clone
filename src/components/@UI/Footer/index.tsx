import React from 'react';
import {Container} from "../Container";
import classes from "./Footer.module.scss"
import {newsFooterAPI} from "../../../sevices/NewsFooterService";
import Loader from "../Loader";
import NewsFooter from "../../NewsFooter";
import ColumnFooter from "../../ColumnFooter";

const Index = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footerContent}>
                    <NewsFooter/>
                    <ColumnFooter/>
                </div>
            </Container>
        </footer>
    );
};

export default Index;