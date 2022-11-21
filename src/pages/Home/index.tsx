import React from 'react';
import Layout from "../../components/@UI/Layout";
import Representation from "../../components/Representation";
// import ImgCover from "/img/pages/home/phone14.png"
import {homeAPI} from "../../sevices/HomeService";

const Index = () => {
    const {data: representation, isLoading, error} = homeAPI.useFetchAllRepresentationQuery('')

    return (
        <Layout>
            {representation && representation.map((representation, index) =>
                <Representation
                    key={index}
                    mainColor={representation.mainColor}
                    logo={representation.logo}
                    textBig={representation.textBig}
                    textSubTitle={representation.textSubTitle}
                    colorSubTitle={representation.colorSubTitle}
                    textMedium={representation.textMedium}
                    firstLink={representation.firstLink}
                    lastLink={representation.lastLink}
                    firstLinkTo={representation.firstLinkTo}
                    lastLinkTo={representation.lastLinkTo}
                    imgUrl={representation.imgUrl}
                />
            )}
        </Layout>
    );
};

export default Index;