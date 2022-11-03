import React, {FC} from 'react';
import Ibg from "../@UI/Ibg";
import {Text} from "../@UI/Text";
import FullScreen from "../@UI/FullScreen";
import classes from "./Representation.module.scss"
import MaxWidth from "../@UI/MaxWidth";
import {IRepresentation} from "../../models/IRepresentation";

const Index: FC<IRepresentation> = ({...props}) => {
    return (
        <FullScreen>
            <Ibg>
                <img src={props.imgUrl} alt="PhoneCover"/>
                <div className={classes.RepresentationText}>
                    <MaxWidth>
                        <div className={classes.RepresentationTextBig}>
                            <Text mainColor={props.mainColor} size={'big'} logo={props.logo}>
                                {props.textBig}
                            </Text>
                        </div>
                        <div className={classes.RepresentationTextSubTitle}>
                            <Text size={'medium'} color={props.colorSubTitle}>
                                {props.textSubTitle}
                            </Text>
                        </div>
                        <div className={classes.RepresentationTextMedium}>
                            <Text mainColor={props.mainColor} size={'medium'}>
                                {props.textMedium}
                            </Text>
                        </div>
                        <div className={classes.RepresentationTextLinks}>
                            <Text mainColor={props.mainColor} size={'small'} color={'blue'} to={props.firstLinkTo}>
                                {props.firstLink}
                            </Text>
                            <Text mainColor={props.mainColor} size={'small'} color={'blue'} to={props.lastLinkTo}>
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