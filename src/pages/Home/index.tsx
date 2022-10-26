import React from 'react';
import {testAPI} from "../../sevices/test";
import Layout from "../../components/@UI/Layout";
import Representation from "../../components/Representation";
import ImgCover from "../../assets/images/pages/home/phone14.png"

const Index = () => {
    const {data: test, isLoading, error} = testAPI.useFetchAllTestQuery('')

    return (
        <Layout>
            <Representation
                imgUrl={ImgCover}
                textBig={'iPhone 14'}
                textMedium={'Big and bigger.'}
                firstLink={'Learn more'}
                lastLink={'Buy'}
                textSubTitle={'ULTRA'}
                colorSubTitle={'orange'}
                firstLinkTo={'/'}
                lastLinkTo={'/mac'}
            />
        </Layout>
    );
};

export default Index;