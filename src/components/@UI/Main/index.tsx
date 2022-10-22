import React, {FC, ReactNode} from 'react';
import {ContainerBig} from "../Container";

interface MainProps {
    children: ReactNode
}

const Index:FC<MainProps> = ({children}) => {
    return (
        <main>
            <ContainerBig>
                {children}
            </ContainerBig>
        </main>
    );
};

export default Index;