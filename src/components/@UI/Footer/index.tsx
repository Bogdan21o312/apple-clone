import React from 'react';
import {Container} from "../Container";
import classes from "./Footer.module.scss"
import NewsFooter from "../../NewsFooter";
import ColumnFooter from "../../ColumnFooter";
import BottomFooter from "../../BottomFooter";
import Line from "../Line";

const Index = () => {
    return (
        <footer className={classes.Footer}>
            <Container>
                <div className={classes.footerContent}>
                    <NewsFooter/>
                    <Line/>
                    <ColumnFooter/>
                    <BottomFooter/>
                </div>
            </Container>
        </footer>
    );
};

export default Index;