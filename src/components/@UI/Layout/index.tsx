import React, {FC, ReactNode} from 'react';
import Wrapper from "../Wrapper";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import {ContainerBig} from "../Container";

interface LayoutProps {
    children?: ReactNode
}

const Index: FC<LayoutProps> = ({children}) => {
    return (
        <Wrapper>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </Wrapper>
    );
};

export default Index;