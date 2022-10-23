import React from 'react';
import {testAPI} from "../../sevices/test";
import classes from "./Home.module.scss"
import Layout from "../../components/@UI/Layout";
import {Text} from "../../components/@UI/Text";
import {Link} from "react-router-dom";
import Center from "../../components/@UI/Center";
import MaxWidth from "../../components/@UI/MaxWidth";

const Index = () => {
    const {data: test, isLoading, error} = testAPI.useFetchAllTestQuery('')

    return (
        <Layout>
            {/*{isLoading && <h1>Loading...</h1>}*/}
            {/*{error && <h2>Error...</h2>}*/}
            {/*{test && test.map(test =>*/}
            {/*    <div key={test.id}>*/}
            {/*        {test.id}*/}
            {/*        {test.body}*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*<Title color={''} logo={true}>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*</Title>*/}
            {/*<SubTitle color={'orange'}>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*</SubTitle>*/}
            {/*<LinkTo to={''}>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*</LinkTo>*/}
            <Center>
                <MaxWidth>
                    <Text logo={true} size={'small'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium in iusto minus ratione reiciendis? Ab, aliquam, animi assumenda debitis iste laudantium obcaecati odit qui quibusdam quis ratione repudiandae sunt veniam!
                    </Text>
                </MaxWidth>
            </Center>
        </Layout>
    );
};

export default Index;