import React, {FC} from 'react';
import Ibg from "../@UI/Ibg";
import {Text} from "../@UI/Text";
import FullScreen from "../@UI/FullScreen";
import classes from "./Representation.module.scss"
import MaxWidth from "../@UI/MaxWidth";

interface RepresentationProps {
    logo?: boolean
    imgUrl: string
    textBig: string
    textSubTitle?: string
    colorSubTitle?: string
    textMedium: string
    firstLink: string
    firstLinkTo: string
    lastLink: string
    lastLinkTo: string
}

const Index: FC<RepresentationProps> = ({...props}) => {
    return (
        <FullScreen>
            <Ibg>
                <img src={props.imgUrl} alt="PhoneCover"/>
                <div className={classes.RepresentationText}>
                    <MaxWidth>
                        <div className={classes.RepresentationTextBig}>
                            <Text size={'big'} logo={props.logo}>
                                {props.textBig}
                            </Text>
                        </div>
                        <div className={classes.RepresentationTextSubTitle}>
                            <Text size={'medium'} color={props.colorSubTitle}>
                                {props.textSubTitle}
                            </Text>
                        </div>
                        <div className={classes.RepresentationTextMedium}>
                            <Text size={'medium'}>
                                {props.textMedium}
                            </Text>
                        </div>
                        <div className={classes.RepresentationTextLinks}>
                            <Text size={'small'} color={'blue'} to={props.firstLinkTo}>
                                {props.firstLink}
                            </Text>
                            <Text size={'small'} color={'blue'} to={props.lastLinkTo}>
                                {props.lastLink}
                            </Text>
                        </div>
                    </MaxWidth>
                </div>
            </Ibg>
        </FullScreen>
    );
};

export default Index;