import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from '../../styles';
import Colors from '../../styles/colors';

const {
    ProfileStyle,
} = Styles.StyleSheets;

function ProfileInfoIcon(props) {
    return (
        <View
            style={ProfileStyle.profileCreditsIcon}
        >
            <View>
                <FontAwesomeIcon
                    icon={props.icon}
                    size={props.iconSize}
                    color={Colors.THEME_COLOR}
                    style={ProfileStyle.profileCreditsFA}
                />
            </View>
            <View
                style={ProfileStyle.profileCreditsIconTextContainer}
            >
                <Text
                    style={ProfileStyle.profileCreditsIconTitleText}
                >{props.title}</Text>
                <Text
                    style={ProfileStyle.profileCreditsIconValueText}
                >{props.value}</Text>
            </View>
        </View>
    );
}

ProfileInfoIcon.propTypes = {
    icon: propTypes.any,
    iconSize: propTypes.number,
    title: propTypes.string,
    value: propTypes.string,
};
ProfileInfoIcon.defaultProps = {
    icon: null,
    iconSize: 23,
    title: null,
    value: null,
};

export default ProfileInfoIcon;
