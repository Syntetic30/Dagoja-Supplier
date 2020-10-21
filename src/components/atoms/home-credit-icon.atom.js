import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from '../../styles';
import Colors from '../../styles/colors';

const {
    HomeStyle,
} = Styles.StyleSheets;

function HomeInfoIcon(props) {
    return (
        <View
            style={HomeStyle.homeCreditsIcon}
        >
            <View>
                <FontAwesomeIcon
                    icon={props.icon}
                    size={props.iconSize}
                    color={Colors.GREY2_COLOR}
                    style={HomeStyle.homeCreditsFA}
                />
            </View>
            <View
                style={HomeStyle.homeCreditsIconTextContainer}
            >
                <Text
                    style={HomeStyle.homeCreditsIconTitleText}
                >{props.title}</Text>
                <Text
                    style={HomeStyle.homeCreditsIconValueText}
                >{props.value}</Text>
            </View>
        </View>
    );
}

HomeInfoIcon.propTypes = {
    icon: propTypes.any,
    iconSize: propTypes.number,
    title: propTypes.string,
    value: propTypes.string,
};
HomeInfoIcon.defaultProps = {
    icon: null,
    iconSize: 23,
    title: null,
    value: null,
};

export default HomeInfoIcon;
