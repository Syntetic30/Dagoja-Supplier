import React from 'react';
import { View, Image, Text } from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faInfo,
} from '@fortawesome/free-solid-svg-icons';
import Styles from '../../styles';
import Assets from '../../assets';
import colors from '../../styles/colors';

const { Image150x150 } = Assets.ImageAssets;

const {
    InboxDetailStyle,
} = Styles.StyleSheets;

function InboxDetailHeader(props) {
    return (
        <View style={InboxDetailStyle.headerContainer}>
            <View style={InboxDetailStyle.headerImageContainer}>
                <Image
                    style={InboxDetailStyle.headerImage}
                    source={props.image}
                    // resizeMode='cover'
                />
            </View>
            <View style={InboxDetailStyle.headerIconContainer}>
                <View style={InboxDetailStyle.iconContainer}>
                    <FontAwesomeIcon
                        icon={props.icon}
                        size={22}
                        color={colors.GREY3_COLOR}
                    />
                </View>
            </View>
            <View style={InboxDetailStyle.headerTitleContainer}>
                <Text style={InboxDetailStyle.headerTitle}>
                    {props.title}
                </Text>
                <Text style={InboxDetailStyle.headerDate}>
                    {props.date}
                </Text>
            </View>
        </View>
    );
}

InboxDetailHeader.propTypes = {
    image: propTypes.any,
    icon: propTypes.any,
    imageSize: propTypes.number,
    title: propTypes.string,
    date: propTypes.any,
};
InboxDetailHeader.defaultProps = {
    image: Image150x150,
    icon: faInfo,
    imageSize: 23,
    title: '',
    date: '',
};

export default InboxDetailHeader;
